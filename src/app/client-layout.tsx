'use client'

import { usePathname } from 'next/navigation';
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

export function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isEncontreCelulaPage = pathname === '/encontre-celula';

  return (
    <>
      <Header backgroundFixed={isEncontreCelulaPage} />
      {children}
      <Footer />
    </>
  );
} 