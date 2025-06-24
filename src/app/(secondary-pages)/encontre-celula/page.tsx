'use client'

import { useState } from 'react';

const CELULAS = [
  { nome: 'Célula Maranata', bairro: 'Méier', lider: 'Sarah', dia: 'Quinta-feira', horario: '20h', endereco: 'Rua Miguel Fernandes, 377', whatsapp: '21964277805', lat: -22.9025, lng: -43.2728 },
  { nome: 'Célula Maranata', bairro: 'Méier', lider: 'Sarah', dia: 'Quinta-feira', horario: '20h', endereco: 'Rua Miguel Fernandes, 377', whatsapp: '21964277805', lat: -22.9025, lng: -43.2728 },
  { nome: 'Célula Esperança', bairro: 'Méier', lider: 'João Silva', dia: 'Quarta-feira', horario: '20h', endereco: 'Rua Dias da Cruz, 100', whatsapp: '21964277805', lat: -22.9000, lng: -43.2728 },
  { nome: 'Célula Vida', bairro: 'Tijuca', lider: 'Maria Souza', dia: 'Sexta-feira', horario: '19h30', endereco: 'Rua Conde de Bonfim, 200', whatsapp: '21964277805', lat: -22.9235, lng: -43.2335 },
  { nome: 'Célula Família', bairro: 'Méier', lider: 'Carlos Lima', dia: 'Sábado', horario: '18h', endereco: 'Rua Hermengarda, 50', whatsapp: '21964277805', lat: -22.9000, lng: -43.2728 },
  { nome: 'Célula Jovem', bairro: 'Engenho Novo', lider: 'Ana Paula', dia: 'Quinta-feira', horario: '20h', endereco: 'Rua 24 de Maio, 300', whatsapp: '21964277805', lat: -22.9020, lng: -43.2500 },
];

const BAIRROS = Array.from(new Set(CELULAS.map(c => c.bairro)));

// Endereço da igreja
const IGREJA_ADDRESS = 'Rua Arquias Cordeiro, 302 - Méier, Rio de Janeiro - RJ, 20770-001';

export default function EncontreCelulaPage() {
  const [bairro, setBairro] = useState('');
  const celulasFiltradas = bairro ? CELULAS.filter(c => c.bairro === bairro) : [];

  const mapAddress = bairro && celulasFiltradas.length > 0
    ? celulasFiltradas[0].endereco
    : IGREJA_ADDRESS;

  return (
    <>
      <div className="min-h-screen bg-[#f4efea] py-16 px-4">
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
                    onChange={e => setBairro(e.target.value)}
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
                      return (
                        <div key={i} className="border border-[#ff8800] rounded-lg p-4 bg-[#fff8f0]">
                          <h2 className="text-xl font-bold text-[#ff8800] mb-2">{c.nome}</h2>
                          <p className="text-[#1c1c1c] text-sm mb-1"><strong>Líder:</strong> {c.lider}</p>
                          <p className="text-[#1c1c1c] text-sm mb-1"><strong>Dia:</strong> {c.dia} - {c.horario}</p>
                          <p className="text-[#1c1c1c] text-sm mb-3"><strong>Endereço:</strong> {c.endereco}</p>
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25d366] text-white font-bold rounded-lg px-4 py-2 shadow transition hover:bg-[#1ebe57] flex items-center gap-2 text-sm w-full justify-center"
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
                  src={`https://www.google.com/maps?q=${encodeURIComponent(mapAddress)}&z=15&output=embed`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 