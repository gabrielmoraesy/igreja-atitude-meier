import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface DropdownMenuProps {
  items: {
    title: string;
    href: string;
  }[];
  trigger: React.ReactNode;
}

export function DropdownMenu({ items, trigger }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div 
      className="relative" 
      onMouseLeave={() => {
        setTimeout(() => {
          if (!isHovering) {
            setIsOpen(false);
          }
        }, 100);
      }}
    >
      <div 
        onMouseEnter={() => setIsOpen(true)}
      >
        {trigger}
      </div>
      <AnimatePresence>
        {(isOpen || isHovering) && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-full left-0 mt-1 w-[400px] bg-white shadow-soft-lg rounded-lg border border-gray-100 overflow-hidden"
            onMouseEnter={() => {
              setIsHovering(true);
              setIsOpen(true);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
              setIsOpen(false);
            }}
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.05
                  }
                }
              }}
              className="p-2"
            >
              {items.map((item) => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    show: { opacity: 1, x: 0 }
                  }}
                >
                  <Link
                    href={item.href}
                    className="block select-none rounded-md p-3 text-sm font-medium leading-none no-underline outline-none transition-colors hover:bg-surface-blue hover:text-primary text-foreground/80"
                  >
                    {item.title}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 