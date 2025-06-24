'use client'

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const menuItems = [
  { href: "/", label: "Início" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/ministerios", label: "Ministérios" },
  { href: "/eventos", label: "Eventos" },
  { href: "/recursos", label: "Recursos" },
  { href: "/contato", label: "Contato" },
];

interface MobileMenuProps {
  isScrolled?: boolean;
}

export function MobileMenu({ isScrolled = false }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const textColor = isScrolled ? "text-[#1c1c1c]" : "text-white";
  const hoverColor = isScrolled ? "hover:text-[#1c1c1c]/80" : "hover:text-white/80";
  const buttonColor = isScrolled ? "text-[#1c1c1c]" : "text-white";
  const buttonHoverBg = isScrolled ? "hover:bg-[#1c1c1c]/10" : "hover:bg-white/20";

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className={`p-2 ${buttonColor} ${buttonHoverBg} rounded-lg transition-colors`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-white/10 backdrop-blur-md flex flex-col justify-center items-center"
          >
            <button
              onClick={toggleMenu}
              className={`absolute top-6 right-4 p-2 ${textColor} ${buttonHoverBg} rounded-lg transition-colors`}
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6" />
            </button>

            <nav className="w-full">
              <ul className="space-y-6 text-center">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block py-4 text-2xl font-semibold ${textColor} ${hoverColor} transition-colors`}
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 