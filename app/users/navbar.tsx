"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, ArrowRight, Zap } from "lucide-react";
import Container from "./container";

const NAV_LINKS = ["Home", "About Us", "Stories", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-0 right-0 z-50 px-4"
    >
      <Container>
        <div
          className={`flex items-center justify-between px-4 py-3 rounded-full border transition-all duration-300 ${
            scrolled
              ? "border-white/15 bg-black/60 shadow-[0_8px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
              : "border-white/10 bg-white/5 backdrop-blur-xl"
          }`}
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-[#9EFF00] flex items-center justify-center shadow-[0_0_16px_#9EFF0066]">
              <Zap size={18} className="text-black fill-black" />
            </div>
            <span className="font-bold text-white text-lg tracking-wide font-mono">
              TECHNEO
            </span>
          </motion.div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link}
                href="#"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
                className="relative px-4 py-2 text-sm text-white/70 hover:text-white transition-colors duration-200 group"
              >
                {link}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-[#9EFF00] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </motion.a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1, color: "#9EFF00" }}
              className="p-2 text-white/60 hover:text-[#9EFF00] transition-colors"
            >
              <Search size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-[#9EFF00]/10 border border-[#9EFF00]/30 text-[#9EFF00] hover:bg-[#9EFF00] hover:text-black px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-[0_0_16px_#9EFF0033] hover:shadow-[0_0_28px_#9EFF0066]"
            >
              Get Started
              <ArrowRight size={15} />
            </motion.button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="p-2 text-white/60"
            >
              <Search size={18} />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-white/70"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mt-2 mx-2 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-2xl p-5 flex flex-col gap-1"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="py-3 px-4 text-white/80 hover:text-[#9EFF00] hover:bg-white/5 rounded-xl transition-all text-sm font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-white/10">
                <button className="w-full flex items-center justify-center gap-2 bg-[#9EFF00] text-black font-semibold px-5 py-3 rounded-full text-sm shadow-[0_0_20px_#9EFF0055]">
                  Get Started <ArrowRight size={15} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
}