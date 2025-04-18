// import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { href: "#imagine", label: "Imagine" },
  { href: "#why", label: "Why" },
  { href: "#how", label: "How" },
  { href: "#create", label: "Create" },
  { href: "#who", label: "Who" },
  { href: "#connect", label: "Connect" },
];

// Animation variants
const menuVariants = {
  closed: { opacity: 0, x: "100%" },
  open: { opacity: 1, x: 0 }
};

const itemVariants = {
  closed: { opacity: 0, y: 20 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.05,
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-0 bg-white backdrop-blur-xl z-50 flex flex-col"
        >
          <div className="flex justify-between items-center p-4 border-b border-[#e8e8ed]">
            <span className="text-xl font-semibold tracking-tight text-primary-gradient">
              Dreamer AI Studios
            </span>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose} 
              className="rounded-full text-[#1d1d1f] hover:bg-[#f5f5f7]"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          
          <nav className="flex flex-col items-center justify-center flex-1 p-8 space-y-2">
            {navItems.map((item, i) => (
              <motion.a
                custom={i}
                variants={itemVariants}
                key={item.href}
                href={item.href}
                className="text-[17px] font-medium px-8 py-3 rounded-full hover:bg-[#f5f5f7] transition-colors w-full text-center text-[#1d1d1f]"
                onClick={onClose}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>
          
          <div className="p-6 text-center">
            <p className="text-sm text-[#86868b]">Tap anywhere to close</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
