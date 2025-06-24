'use client';

import { motion, AnimatePresence } from 'framer-motion';

export default function Loading() {
  return (
    <AnimatePresence>
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
        <motion.div
          className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </AnimatePresence>
  );
} 