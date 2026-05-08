"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "./container";

const TESTIMONIALS = [
  {
    quote:
      '"Partnering with this team has been game changer for our business. From the very first meeting, they demonstrated deep understanding of our industry and delivered custom solution that not only met but exceeded our expectation"',
    name: "Amanda Reyes",
    role: "Owner FeaterDev",
  },
  {
    quote:
      '"The software they built transformed how we operate. The attention to detail, the responsiveness, and the quality of output was beyond what we could have imagined. Truly a world-class team."',
    name: "Marcus Chen",
    role: "CTO Nexlify",
  },
  {
    quote:
      '"From onboarding to delivery, the experience was seamless. They listened, iterated fast, and shipped a product that our clients love. Would recommend them without hesitation."',
    name: "Sofia Mendez",
    role: "Founder, Launchpad",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);

  return (
    <section className="relative z-10 md:py-24 py-12 overflow-hidden">
      {/* Left ambient glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(158,255,0,0.35) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      {/* Section bg strip */}
      <div className="absolute inset-0 bg-[#070707]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(158,255,0,0.2) 1px,transparent 1px),linear-gradient(90deg,rgba(158,255,0,0.2) 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <Container className="relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-5"
        >
          <span className="text-[#9EFF00] text-base">✦</span>
          <span className="text-[#9EFF00] text-xs font-semibold tracking-widest uppercase">
            What Our Clients Say
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-14 "
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          What Our Clients Say
          <br />
          Results{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(90deg, #9EFF00, #c6ff5e)",
              filter: "drop-shadow(0 0 12px rgba(158,255,0,0.35))",
            }}
          >
            From Clients
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Circular image with quote icon */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Outer dashed ring */}
              <div
                className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full border border-dashed border-[#9EFF00]/20 flex items-center justify-center relative"
              >
                {/* Photo circle */}
                <div
                  className="w-[230px] h-[230px] sm:w-[270px] sm:h-[270px] rounded-full overflow-hidden border border-[#9EFF00]/20 relative"
                  style={{
                    background: "linear-gradient(135deg,#0e1a05,#060d02,#0a1404)",
                    boxShadow: "0 0 40px rgba(158,255,0,0.08)",
                  }}
                >
                  {/* Simulated person silhouette */}
                  <div className="absolute inset-0 flex items-end justify-center pb-0">
                    <div
                      className="w-[100px] h-[180px] rounded-t-full"
                      style={{
                        background:
                          "linear-gradient(180deg,rgba(60,90,20,0.5) 0%,rgba(30,50,10,0.3) 100%)",
                      }}
                    />
                  </div>
                  <div className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse at 30% 60%, rgba(158,255,0,0.1) 0%, transparent 60%)",
                    }}
                  />
                </div>

                {/* Quote icon circle */}
                <div
                  className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#9EFF00] flex items-center justify-center"
                  style={{ boxShadow: "0 0 20px rgba(158,255,0,0.5)" }}
                >
                  <span className="text-black text-lg font-black">"</span>
                </div>

                {/* Starburst bottom-right */}
                <svg
                  className="absolute -bottom-2 -right-2 opacity-40"
                  width="60" height="60" viewBox="0 0 60 60"
                >
                  {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((deg, i) => (
                    <line
                      key={i}
                      x1="30" y1="30"
                      x2={30 + 26 * Math.cos((deg * Math.PI) / 180)}
                      y2={30 + 26 * Math.sin((deg * Math.PI) / 180)}
                      stroke="#9EFF00" strokeWidth="1.2" strokeLinecap="round"
                    />
                  ))}
                </svg>
              </div>

              {/* Circular rotating badge */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-24 h-24"
              >
                <svg viewBox="0 0 100 100" width="96" height="96">
                  <defs>
                    <path id="circle-text" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                  </defs>
                  <text fontSize="9" fill="rgba(158,255,0,0.7)" letterSpacing="3">
                    <textPath href="#circle-text">BUILD A SUCCESS BRAND WITH TECHNEO •</textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#9EFF00]/10 border border-[#9EFF00]/30 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9EFF00" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: Testimonial card */}
          <div className="flex flex-col gap-6">
            {/* Stars */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex gap-1"
            >
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#9EFF00] text-lg">★</span>
              ))}
            </motion.div>

            {/* Quote */}
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="text-white/75 text-base leading-relaxed"
              >
                {TESTIMONIALS[active].quote}
              </motion.blockquote>
            </AnimatePresence>

            {/* Author + nav */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full bg-[#9EFF00]/10 border border-[#9EFF00]/30 flex items-center justify-center text-[#9EFF00] text-xs font-bold"
                >
                  {TESTIMONIALS[active].name.charAt(0)}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-white font-semibold text-sm">{TESTIMONIALS[active].name}</p>
                    <p className="text-white/40 text-xs">{TESTIMONIALS[active].role}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation arrows */}
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.93 }}
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/60 hover:border-[#9EFF00]/50 hover:text-[#9EFF00] transition-all duration-200"
                >
                  <ChevronLeft size={17} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.93 }}
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/60 hover:border-[#9EFF00]/50 hover:text-[#9EFF00] transition-all duration-200"
                >
                  <ChevronRight size={17} />
                </motion.button>
              </div>
            </div>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-8 bg-[#9EFF00] shadow-[0_0_8px_#9EFF00]"
                      : "w-3 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}