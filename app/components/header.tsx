"use client";
import { useState, useEffect } from "react";
import LeadPopup from "./leadpopup";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Stories", href: "#proof" },
    { label: "Join", href: "#cta" },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
    <header
      className={"bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-orange-500/20 py-3"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          
          <span className="text-white uppercase font-bold text-lg tracking-tight">
            Kunal<span className="text-orange-400"> Patil</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="px-4 py-2 text-sm text-gray-400 hover:text-orange-400 transition-colors duration-200 rounded-lg hover:bg-orange-500/10"
            >
              {link.label}
            </button>
          ))}
          <button
              onClick={() => setOpen(true)} 
            className="ml-3 px-5 py-2.5 cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-orange-500/40 hover:scale-105 transition-all duration-200"
          >
            Start Now →
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-orange-400 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-orange-400 transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-orange-400 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d0d0d]/95 backdrop-blur-xl border-t border-orange-500/20 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left px-4 py-3 text-gray-300 hover:text-orange-400 hover:bg-orange-500/10 rounded-lg transition-all"
            >
              {link.label}
            </button>
          ))}
          <button onClick={() => setOpen(true)} 
            
            className="w-full mt-2 cursor-pointer px-5 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full"
          >
            Start Now →
          </button>

          
        </div>
      )}
      
    </header>
    <LeadPopup
        isOpen={open}
        onClose={() => setOpen(false)}
      />

      </>
  );
}