'use client';

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <Section className="min-h-[calc(100vh-100px)] flex items-center justify-center px-4 sm:px-0">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Página não encontrada
          </h2>
          <p className="text-primary mb-8">
            A página que você está procurando não existe ou foi movida.
          </p>
          <Button>
            <Link href="/" className="text-[#1c1c1c]">Voltar ao Início</Link>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
} 