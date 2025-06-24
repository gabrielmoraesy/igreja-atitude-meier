'use client'

import { useState } from 'react';
import { MapPin, Car } from 'lucide-react';

const CELULAS = [
  {
    nome: 'Célula Maranata',
    bairro: 'Méier',
    lider: 'Sarah',
    dia: 'Quinta-feira',
    horario: '20h',
    endereco: 'Rua Miguel Fernandes, 377',
    whatsapp: '21964277805',
    lat: -22.8981085,
    lng: -43.2698794
  },
  {
    nome: 'Célula Esperança',
    bairro: 'Méier',
    lider: 'João Silva',
    dia: 'Quarta-feira',
    horario: '20h',
    endereco: 'Rua Dias da Cruz, 100',
    whatsapp: '21964277805',
    lat: -22.9047991,
    lng: -43.2887442
  },
  {
    nome: 'Célula Vida',
    bairro: 'Tijuca',
    lider: 'Maria Souza',
    dia: 'Sexta-feira',
    horario: '19h30',
    endereco: 'Rua Conde de Bonfim, 200',
    whatsapp: '21964277805',
    lat: -22.9393752,
    lng: -43.2482399
  },
  {
    nome: 'Célula Família',
    bairro: 'Méier',
    lider: 'Carlos Lima',
    dia: 'Sábado',
    horario: '18h',
    endereco: 'Rua Hermengarda, 50',
    whatsapp: '21964277805',
    lat: -22.9042910,
    lng: -43.2782544
  },
  {
    nome: 'Célula Jovem',
    bairro: 'Engenho Novo',
    lider: 'Ana Paula',
    dia: 'Quinta-feira',
    horario: '20h',
    endereco: 'Rua 24 de Maio, 300',
    whatsapp: '21964277805',
    lat: -22.9022378,
    lng: -43.2636507
  },
];

const BAIRROS = Array.from(new Set(CELULAS.map(c => c.bairro)));

// Coordenadas da igreja
const IGREJA_COORDS = { lat: -22.9024, lng: -43.2771 };

// Função para gerar URL do OpenStreetMap
const getOpenStreetMapUrl = (lat: number, lng: number) => {
  const bbox = `${lng-0.01},${lat-0.01},${lng+0.01},${lat+0.01}`;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;
};

// Função para gerar URL do Uber
const getUberUrl = (endereco: string, lat: number, lng: number, nome: string) => {
  const enderecoEncoded = encodeURIComponent(endereco + ', Rio de Janeiro, RJ');
  const nomeEncoded = encodeURIComponent(nome);
  return `https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[nickname]=${nomeEncoded}&dropoff[formatted_address]=${enderecoEncoded}&dropoff[latitude]=${lat}&dropoff[longitude]=${lng}`;
};


export default function EncontreCelulaPage() {
  const [bairro, setBairro] = useState('');
  const [celulaSelecionada, setCelulaSelecionada] = useState<number | null>(null);
  
  const celulasFiltradas = bairro ? CELULAS.filter(c => c.bairro === bairro) : [];

  // Determinar coordenadas para o mapa
  let mapCoords = IGREJA_COORDS;
    
  if (celulaSelecionada !== null) {
    // Se uma célula específica foi clicada, usa suas coordenadas
    const celula = CELULAS[celulaSelecionada];
    mapCoords = { lat: celula.lat, lng: celula.lng };
  } else if (bairro && celulasFiltradas.length > 0) {
    // Se um bairro foi selecionado mas nenhuma célula específica foi clicada, usa a primeira célula
    mapCoords = { lat: celulasFiltradas[0].lat, lng: celulasFiltradas[0].lng };
  } 

  const mapUrl = getOpenStreetMapUrl(mapCoords.lat, mapCoords.lng);

  const handleCelulaClick = (celula: typeof CELULAS[0]) => {
    // Encontrar o índice da célula no array principal
    const index = CELULAS.findIndex(c => 
      c.nome === celula.nome && 
      c.endereco === celula.endereco && 
      c.bairro === celula.bairro
    );

    setCelulaSelecionada(index);
  };

  const handleBairroChange = (novoBairro: string) => {
    setBairro(novoBairro);
    setCelulaSelecionada(null); // Reset da célula selecionada quando muda o bairro
  };

  return (
    <>
      <div className="min-h-screen bg-[#f4efea] py-16 px-4 mt-16 sm:mt-24">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-[#ff8800] text-center">Encontre uma célula perto de você</h1>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-[400px] flex-shrink-0">
              <div className="flex flex-col gap-4 bg-white rounded-xl shadow p-6">
                <div>
                  <label className="block mb-4 text-lg font-medium text-[#1c1c1c]">Selecione seu bairro:</label>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff8800] text-[#1c1c1c]"
                    value={bairro}
                    onChange={e => handleBairroChange(e.target.value)}
                  >
                    <option value="">Igreja Batista Atitude Méier</option>
                    {BAIRROS.map(b => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                {bairro && celulasFiltradas.length === 0 && (
                  <p className="text-center text-gray-500">Nenhuma célula cadastrada para este bairro.</p>
                )}

                {celulasFiltradas.length > 0 && (
                  <div className="space-y-4 max-h-[600px] overflow-y-auto">
                    {celulasFiltradas.map((c, i) => {
                      const numero = c.whatsapp || '21964277805';
                      const msg = encodeURIComponent(`Olá, tenho interesse em participar da célula ${c.nome}, no endereço ${c.endereco}, ${c.dia} às ${c.horario}, do líder ${c.lider}.`);
                      const whatsappUrl = `https://wa.me/55${numero}?text=${msg}`;
                      const uberUrl = getUberUrl(c.endereco, c.lat, c.lng, c.nome);
                      const isSelected = celulaSelecionada === CELULAS.findIndex(celula => 
                        celula.nome === c.nome && 
                        celula.endereco === c.endereco && 
                        celula.bairro === c.bairro
                      );
                      
                      return (
                        <div 
                          key={i} 
                          className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                            isSelected 
                              ? 'border-[#ff8800] bg-[#fff8f0] shadow-lg' 
                              : 'border-[#ff8800] bg-[#fff8f0] hover:bg-[#fff4e6] hover:border-[#e67700] hover:shadow-md'
                          }`}
                          onClick={() => handleCelulaClick(c)}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h2 className="text-xl font-bold text-[#ff8800]">{c.nome}</h2>
                            <div className="flex gap-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleCelulaClick(c);
                                }}
                                className="p-2 text-[#ff8800] hover:text-[#e67700] transition-colors"
                                title="Ver no mapa"
                              >
                                <MapPin className="w-5 h-5" />
                              </button>
                              <a
                                href={uberUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="p-2 text-black hover:text-gray-700 transition-colors"
                                title="Pedir Uber"
                              >
                                <Car className="w-5 h-5" />
                              </a>
                            </div>
                          </div>
                          <p className="text-[#1c1c1c] text-sm mb-1"><strong>Líder:</strong> {c.lider}</p>
                          <p className="text-[#1c1c1c] text-sm mb-1"><strong>Dia:</strong> {c.dia} - {c.horario}</p>
                          <p className="text-[#1c1c1c] text-sm mb-3"><strong>Endereço:</strong> {c.endereco}</p>
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25d366] text-white font-bold rounded-lg px-4 py-2 shadow transition hover:bg-[#1ebe57] flex items-center gap-2 text-sm w-full justify-center"
                            onClick={(e) => e.stopPropagation()} // Evita que o clique no WhatsApp ative o card
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 12c0 4.556-3.694 8.25-8.25 8.25A8.207 8.207 0 0 1 4.5 18.674L3 21l2.326-1.5A8.207 8.207 0 0 1 3.75 12c0-4.556 3.694-8.25 8.25-8.25S20.25 7.444 20.25 12Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M8.635 11.25a3.375 3.375 0 0 0 6.73 0c0-.186-.015-.37-.045-.55a.75.75 0 0 0-.75-.62h-1.125a.375.375 0 0 0-.375.375v.375a.375.375 0 0 1-.375.375h-.75a.375.375 0 0 1-.375-.375V10.5a.375.375 0 0 0-.375-.375H9.18a.75.75 0 0 0-.75.62c-.03.18-.045.364-.045.55Z" /></svg>
                            Falar no WhatsApp
                          </a>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1">
              <div className="bg-white rounded-xl shadow overflow-hidden h-[600px]">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={mapUrl}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 