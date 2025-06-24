import { Instagram, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface py-12">
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-center">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logos/logo-branca.png"
                alt="Logo IBAM"
                width={56}
                height={56}
                className="object-contain"
              />
              <h3 className="text-xl font-bold text-foreground">Igreja Batista Atitude Méier</h3>
            </div>
            <div className="text-sm text-foreground/80 space-y-4">
              <p>
                Fundada em 2024, a Igreja Batista Atitude Méier é uma comunidade cristã comprometida com a transformação de vidas através do amor de Jesus.
              </p>
              <p>
                Nossa missão é proclamar o evangelho, servir à comunidade e promover o crescimento espiritual de cada família.
              </p>
              <div className="mt-4">
                <p className="font-semibold text-foreground">Igreja Batista Atitude Méier</p>
                <p>R. Arquias Cordeiro, 302 - Méier</p>
                <p>Rio de Janeiro - RJ, 20770-001</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Contato</h4>
            <ul className="space-y-2">
              <li>
                <a href="tel:+5521995129424" className="text-sm text-foreground/80 hover:text-foreground">
                  (21) 99512-9424
                </a>
              </li>
              <li>
                <a href="mailto:contato@atitudemeier.com.br" className="text-sm text-foreground/80 hover:text-foreground">
                  contato@atitudemeier.com.br
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/quem-somos" className="text-sm text-foreground/80 hover:text-foreground">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-sm text-foreground/80 hover:text-foreground">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/utilidades" className="text-sm text-foreground/80 hover:text-foreground">
                  Utilidades
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-sm text-foreground/80 hover:text-foreground">
                  Contato
                </Link>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/atitudemeier/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-foreground"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.google.com/maps/place/Igreja+Batista+Atitude+M%C3%A9ier/@-22.902395,-43.277205,15z/data=!4m15!1m8!3m7!1s0x997dba16991065:0x4257c558d70f9f0!2sR.+Arquias+Cordeiro,+302+-+M%C3%A9ier,+Rio+de+Janeiro+-+RJ,+20770-001,+Brasil!3b1!8m2!3d-22.9023947!4d-43.2772054!16s%2Fg%2F11y2lsh5pv!3m5!1s0x997d005a96add7:0x8891309393ee2eab!8m2!3d-22.9022541!4d-43.277076!16s%2Fg%2F11y29y553c?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-foreground"
                  aria-label="Localização no Google Maps"
                >
                  <MapPin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} Igreja Batista Atitude Méier. Todos os direitos reservados.</p>
          <p className="mt-2">
            Desenvolvido por <a href="https://www.instagram.com/moraesdev" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">Gabriel Moraes (@moraesdev).</a>
          </p>
        </div>
      </div>
    </footer>
  );
} 