"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { useState } from "react";
import Container from "./container";

const QUICK_LINKS = ["About Us", "Our Project", "Our Services", "Testimonial", "Contact Us"];

const CONTACT = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.22 2 2 0 012.03 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    text: "+1 123 456 7890",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    text: "421 Allen, Mexico 4233",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    text: "technioai@gmail.com",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    text: "technioartificial.com",
  },
];

const SOCIAL = [
  {
    label: "Facebook",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="black" />
      </svg>
    ),
  },
  {
    label: "X",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <footer className="relative z-10 pt-4 overflow-hidden">
      {/* Light beam accents in footer */}
      <div
        className="absolute top-0 left-0 w-[200px] h-[300px] opacity-20 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(158,255,0,0.25) 0%, transparent 60%)",
          clipPath: "polygon(0 0,40% 0,60% 100%,0 100%)",
          filter: "blur(16px)",
        }}
      />
      <div
        className="absolute top-0 right-0 w-[200px] h-[300px] opacity-20 pointer-events-none"
        style={{
          background: "linear-gradient(225deg, rgba(158,255,0,0.25) 0%, transparent 60%)",
          clipPath: "polygon(60% 0,100% 0,100% 100%,40% 100%)",
          filter: "blur(16px)",
        }}
      />

      {/* Top border */}
      <div className="border-t border-white/5" />

      <Container className="pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Col 1: Logo + desc + socials */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div
                className="w-9 h-9 rounded-full bg-[#9EFF00] flex items-center justify-center"
                style={{ boxShadow: "0 0 16px rgba(158,255,0,0.5)" }}
              >
                <Zap size={17} className="fill-black text-black" />
              </div>
              <span className="text-white font-bold text-base font-mono tracking-widest">TECHNEO</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              We create powerful AI solutions that drives results. Backed by innovation
              built for performance we are to here
            </p>
            <div className="flex items-center gap-2.5">
              {SOCIAL.map((s) => (
                <motion.a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  whileHover={{ scale: 1.12, color: "#9EFF00" }}
                  className="w-9 h-9 rounded-full border border-white/12 bg-white/5 flex items-center justify-center text-white/60 hover:border-[#9EFF00]/50 hover:text-[#9EFF00] hover:shadow-[0_0_12px_rgba(158,255,0,0.25)] transition-all duration-200"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-semibold text-sm">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  whileHover={{ x: 4, color: "#9EFF00" }}
                  className="text-white/45 text-sm transition-colors duration-200 hover:text-[#9EFF00] w-fit"
                >
                  {link}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Col 3: Contact Info */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-semibold text-sm">Contact Info</h4>
            <div className="flex flex-col gap-3.5">
              {CONTACT.map((c, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="text-[#9EFF00] flex-shrink-0 mt-0.5">{c.icon}</span>
                  <span className="text-white/45 text-sm">{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: Newsletter */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-semibold text-sm">Newsletter</h4>
            <div
              className="flex items-center gap-0 rounded-full border border-white/10 bg-white/5 overflow-hidden pl-4 pr-1 py-1"
              style={{ boxShadow: "0 0 0 1px rgba(158,255,0,0.06)" }}
            >
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Your Email"
                className="flex-1 bg-transparent text-white/70 text-sm placeholder:text-white/30 outline-none min-w-0"
              />
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-[#9EFF00] text-black font-semibold text-xs px-4 py-2.5 rounded-full flex-shrink-0"
                style={{ boxShadow: "0 0 14px rgba(158,255,0,0.4)" }}
              >
                Subscribe
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
            <label className="flex items-center gap-2 cursor-pointer group">
              <div
                onClick={() => setAgreed(!agreed)}
                className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                  agreed
                    ? "bg-[#9EFF00] border-[#9EFF00]"
                    : "border-white/25 bg-transparent"
                }`}
              >
                {agreed && (
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span className="text-white/40 text-xs">
                I Agree To The{" "}
                <a href="#" className="text-white/70 underline underline-offset-2 hover:text-[#9EFF00] transition-colors">
                  Privacy Policy
                </a>
              </span>
            </label>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">@Copyright 2025 Techneo . All Rights Reserved</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/30 text-xs hover:text-[#9EFF00] transition-colors">Terms And Conditions</a>
            <span className="text-white/15">|</span>
            <a href="#" className="text-white/30 text-xs hover:text-[#9EFF00] transition-colors">Privacy Policy</a>
          </div>
        </div>
      </Container>

      {/* Giant TECHNEO watermark */}
      <div className="relative overflow-hidden h-24 select-none pointer-events-none">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap font-extrabold tracking-tighter leading-none"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(80px, 16vw, 160px)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.07)",
          }}
        >
          TECHNEO
        </motion.p>
      </div>
    </footer>
  );
}