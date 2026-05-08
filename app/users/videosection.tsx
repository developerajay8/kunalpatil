"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Container from "./container";

export default function VideoSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative z-10 pb-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Outer glow frame */}
          <div
            className="absolute -inset-px rounded-3xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(158,255,0,0.35) 0%, rgba(158,255,0,0.05) 40%, rgba(158,255,0,0.2) 100%)",
            }}
          />
          <div className="absolute -inset-[2px] rounded-3xl blur-sm opacity-40"
            style={{
              background:
                "linear-gradient(135deg, rgba(158,255,0,0.6) 0%, transparent 50%, rgba(158,255,0,0.4) 100%)",
            }}
          />

          {/* Card */}
          <motion.div
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative rounded-3xl overflow-hidden border border-[#9EFF00]/20 shadow-[0_40px_100px_rgba(0,0,0,0.8),0_0_60px_rgba(158,255,0,0.08)]"
            style={{ aspectRatio: "16/7" }}
          >
            {/* Placeholder image (grayscale green toned team photo feel) */}
            <div className="absolute inset-0 bg-[#0a0a0a]" />

            {/* Simulated photo: green-toned dark gradient */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(
                    180deg,
                    rgba(5,5,5,0.2) 0%,
                    rgba(5,5,5,0.05) 30%,
                    rgba(5,5,5,0.05) 60%,
                    rgba(5,5,5,0.55) 100%
                  )
                `,
              }}
            />

            {/* Decorative abstract lines (right side) */}
            <svg
              className="absolute right-6 top-1/2 -translate-y-1/2 opacity-20 h-[70%]"
              viewBox="0 0 80 200"
              fill="none"
            >
              {[0, 12, 24, 36, 48].map((offset, i) => (
                <path
                  key={i}
                  d={`M${40 + offset} 0 Q${60 + offset} 100 ${40 + offset} 200`}
                  stroke="#9EFF00"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              ))}
            </svg>
            <svg
              className="absolute left-6 top-1/2 -translate-y-1/2 opacity-20 h-[70%]"
              viewBox="0 0 80 200"
              fill="none"
            >
              {[0, 12, 24, 36, 48].map((offset, i) => (
                <path
                  key={i}
                  d={`M${40 - offset} 0 Q${20 - offset} 100 ${40 - offset} 200`}
                  stroke="#9EFF00"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              ))}
            </svg>

            {/* Inner green glow at bottom */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(158,255,0,0.12) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />

            {/* Simulated people silhouettes placeholder */}
            <div className="absolute inset-0 flex items-end justify-center pb-8 opacity-40">
              <div
                className="w-full h-[65%]"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(50,80,20,0.15) 100%)",
                }}
              />
            </div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                animate={hovered ? { scale: 1.12 } : { scale: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex items-center gap-3 bg-black/50 backdrop-blur-xl border border-white/20 text-white font-semibold px-7 py-4 rounded-full shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:border-[#9EFF00]/50 hover:shadow-[0_0_40px_rgba(158,255,0,0.25)] transition-all duration-300 group"
              >
                <span className="w-10 h-10 rounded-full bg-[#9EFF00] flex items-center justify-center shadow-[0_0_20px_#9EFF0066] group-hover:shadow-[0_0_32px_#9EFF0099] transition-all duration-300">
                  <Play size={16} className="fill-black text-black ml-0.5" />
                </span>
                <span className="text-base">Play Video</span>
              </motion.button>
            </div>

            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#9EFF00]/40 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#9EFF00]/40 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#9EFF00]/40 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#9EFF00]/40 rounded-br-lg" />
          </motion.div>

          {/* Bottom shadow glow */}
          <div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-12 opacity-30"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(158,255,0,0.4) 0%, transparent 70%)",
              filter: "blur(16px)",
            }}
          />
        </motion.div>
      </Container>
    </section>
  );
}