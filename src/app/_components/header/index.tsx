'use client';

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { DropdownMenu } from "../../../components/ui/dropdown-menu";
import { MobileMenu } from "./mobile-menu";

const ministries = [
  {
    title: "Ministério de Louvor",
    href: "/ministerios/louvor",
  },
  {
    title: "Células",
    href: "/ministerios/celulas",
  },
  {
    title: "Infantil",
    href: "/ministerios/infantil",
  },
  {
    title: "Jovens",
    href: "/ministerios/jovens",
  },
  {
    title: "Ação Social",
    href: "/ministerios/acao-social",
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  const isHome = pathname === '/';
  const backgroundFixed = !isHome;

  useEffect(() => {
    if (backgroundFixed) return;

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [backgroundFixed]);

  const scrolled = backgroundFixed ? true : isScrolled;
  const linkBaseClass = scrolled ? "text-[#1c1c1c]/80 hover:text-[#1c1c1c]" : "text-white/80 hover:text-white";

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled 
        ? "bg-[#f4efea] shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="container max-w-[1200px] mx-auto flex items-center justify-between h-24 px-4">
        <Link href="/" className="relative w-32">
          <Image
            src="/images/logos/logo-preta.png"
            alt="Igreja Batista Atitude Méier"
            className="object-contain"
            priority
            width={120}
            height={48}
          />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li>
              <Link href="/" className={linkBaseClass}>
                Início
              </Link>
            </li>
            <li>
              <Link href="/quem-somos" className={linkBaseClass}>
                Quem Somos
              </Link>
            </li>
            <li>
              <DropdownMenu
                items={ministries}
                trigger={
                  <button className={linkBaseClass}>
                    Ministérios
                  </button>
                }
              />
            </li>
            <li>
              <Link href="/eventos" className={linkBaseClass}>
                Eventos
              </Link>
            </li>
            <li>
              <Link href="/recursos" className={linkBaseClass}>
                Recursos
              </Link>
            </li>
            <li>
              <Link href="/contato" className={linkBaseClass}>
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        <MobileMenu isScrolled={scrolled} />
      </div>
    </header>
  );
} 