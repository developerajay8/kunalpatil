"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LeadPopup from "./leadpopup";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
    if (el) {
      const offset = 80; // Header height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
          ? "py-3 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 shadow-2xl" 
          : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            
            <span className="text-white uppercase font-bold text-xl tracking-wider">
              Kunal<span className="text-orange-500 group-hover:text-orange-400 transition-colors"> Patil</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center bg-white/5 border border-white/10 px-2 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-5 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-1/2" />
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => setOpen(true)}
              className="relative inline-flex items-center justify-center px-7 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-orange-500 rounded-full shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-orange-500 transition-all duration-300 transform group-hover:translate-x-full ease">Start Now</span>
              <span className="relative invisible">Start Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 p-2 text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <span className={`h-0.5 bg-orange-500 transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
              <span className={`h-0.5 bg-orange-500 transition-all duration-300 ${menuOpen ? "opacity-0" : "w-4"}`} />
              <span className={`h-0.5 bg-orange-500 transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-orange-500/20 px-6 py-10 md:hidden flex flex-col gap-6"
            >
              {navLinks.map((link, i) => (
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-2xl font-semibold text-gray-300 hover:text-orange-500 text-left transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                onClick={() => { setOpen(true); setMenuOpen(false); }}
                className="w-full py-4 bg-orange-500 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30"
              >
                Start Now →
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <LeadPopup isOpen={open} onClose={() => setOpen(false)} />
      
      {/* Spacer to prevent content jump because header is fixed */}
      <div className="h-20" />
    </>
  );
}