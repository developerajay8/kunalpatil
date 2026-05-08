"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";
import Container from "./container";

const AVATARS = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/75.jpg",
];


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    delay,
  },
  viewport: { once: true },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20">
      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center gap-6">

          {/* Social Proof Row */}
          <motion.div
            {...fadeUp(0.2)}
            className="flex items-center gap-3"
          >
            <div className="flex -space-x-3">
              {AVATARS.map((src, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-[#9EFF00]/60 overflow-hidden bg-gray-700"
                  style={{ zIndex: AVATARS.length - i }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="customer" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-[#9EFF00] text-[#9EFF00]" />
                ))}
              </div>
              <span className="text-white/50 text-xs">125k+ Customer</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            {...fadeUp(0.35)}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight  max-w-[820px]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Best Software Solution To The Drive{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #9EFF00 0%, #c6ff5e 100%)",
                filter: "drop-shadow(0 0 18px rgba(158,255,0,0.5))",
              }}
            >
              Business Forward
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            {...fadeUp(0.48)}
            className="text-white/50 text-base sm:text-lg max-w-[480px] leading-relaxed"
          >
            High-Performance Software Designed To The Streamline Operation Boost Productivity
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp(0.6)}
            className="flex flex-col sm:flex-row items-center gap-4 mt-2"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 48px rgba(158,255,0,0.55)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 bg-[#9EFF00] text-black font-bold px-7 py-4 rounded-full text-sm shadow-[0_0_28px_rgba(158,255,0,0.45)] transition-all duration-300"
            >
              Book A Free Demo
              <span className="w-7 h-7 rounded-full bg-black/20 flex items-center justify-center">
                <ArrowRight size={15} />
              </span>
            </motion.button>

            {/* Secondary / Play Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 text-white font-medium text-sm group"
            >
              <span className="w-11 h-11 rounded-full border border-white/25 bg-white/8 backdrop-blur flex items-center justify-center group-hover:border-[#9EFF00]/60 group-hover:shadow-[0_0_20px_rgba(158,255,0,0.3)] transition-all duration-300">
                <Play size={15} className="fill-white ml-0.5" />
              </span>
              <span className="text-white/80 group-hover:text-white transition-colors">See Works</span>
            </motion.button>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.85, duration: 0.5, ease: "backOut" }}
            className="mt-2 flex items-center gap-2 px-4 py-2 rounded-full border border-[#9EFF00]/20 bg-[#9EFF00]/5 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#9EFF00] animate-pulse shadow-[0_0_8px_#9EFF00]" />
            <span className="text-xs text-white/60 font-medium">Trusted by 125k+ businesses worldwide</span>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}