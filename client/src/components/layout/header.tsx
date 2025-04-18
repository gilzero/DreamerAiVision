import { useState as _useState, useEffect as _useEffect } from "react";
import { Menu } from "lucide-react";
import { FiMenu as _FiMenu, FiX as _FiX } from "react-icons/fi";
import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";

interface HeaderProps {
  activeSection: string | null;
  onMobileMenuToggle: () => void;
}

const navItems = [
  { href: "#imagine", label: "Imagine" },
  { href: "#why", label: "Why" },
  { href: "#how", label: "How" },
  { href: "#create", label: "Create" },
  { href: "#who", label: "Who" },
  { href: "#connect", label: "Connect" },
];

export default function Header({ activeSection, onMobileMenuToggle }: HeaderProps) {
  return (
    <header className="fixed w-full z-50 navbar-fixed transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="flex items-center space-x-2 group">
            <span className="text-xl font-semibold tracking-tight text-primary-gradient transition-all duration-300 group-hover:opacity-90">
              Dreamer AI Studios
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center space-x-1 bg-[#f5f5f7]/80 rounded-full px-1.5 py-1.5 backdrop-blur-lg border border-[#e1e1e3]/50">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-sm font-medium transition-all duration-200 rounded-full ${
                    activeSection === item.href.substring(1) 
                      ? "text-white bg-[#0071e3]" 
                      : "text-[#1d1d1f] hover:bg-[#e8e8ed]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full text-[#1d1d1f] hover:bg-[#f5f5f7]"
            onClick={onMobileMenuToggle}
            aria-controls="mobile-menu" 
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
