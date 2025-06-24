import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "./globals.css";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Igreja Batista Atitude Méier",
  description: "Uma igreja para toda a família no Méier. Venha viver o novo de Deus!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} font-sans bg-background antialiased`} suppressHydrationWarning>
      <body className={`${dmSans.variable} font-sans bg-background antialiased`}>
        <Header />
          {children}
        <Footer /> 
      </body>
    </html>
  );
}
