"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "./container";

export default function AboutSection() {
  return (
    <section className="relative z-10 md:py-24 py-12 overflow-hidden bg-[#050505]">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(158,255,0,0.25) 1px,transparent 1px),linear-gradient(90deg,rgba(158,255,0,0.25) 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(ellipse, rgba(158,255,0,0.4) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            {/* Label */}
            <div className="flex items-center gap-2">
              <span className="text-[#9EFF00]">✦</span>
              <span className="text-[#9EFF00] text-xs font-semibold tracking-widest uppercase">
                Who We Are
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              We Are Passionate
              <br />
              Team Of{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(90deg, #9EFF00, #c6ff5e)",
                  filter: "drop-shadow(0 0 12px rgba(158,255,0,0.4))",
                }}
              >
                Developers
              </span>
            </h2>

            <p className="text-white/50 text-sm leading-relaxed max-w-md">
              We are passionate team of developer, designer, digital marketing
              strategists committed to delivering smart solutions and bespoke
              software solutions. With an deep understanding technology and
              focus on results to help businesses solve complex problems.
            </p>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-[#9EFF00] text-black font-bold text-sm px-6 py-3 rounded-full w-fit"
              style={{ boxShadow: "0 0 24px rgba(158,255,0,0.45)" }}
            >
              Explore Our Story
              <ArrowUpRight size={16} />
            </motion.button>

            {/* Stats card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-fit"
            >
              <div
                className="flex items-center gap-4 px-6 py-4 rounded-2xl border border-[#9EFF00]/20 backdrop-blur-md"
                style={{
                  background: "linear-gradient(135deg, rgba(158,255,0,0.12), rgba(158,255,0,0.04))",
                  boxShadow: "0 0 30px rgba(158,255,0,0.12), inset 0 0 20px rgba(158,255,0,0.04)",
                }}
              >
                <div>
                  <p
                    className="text-4xl font-extrabold text-[#9EFF00]"
                    style={{ fontFamily: "'Syne', sans-serif", filter: "drop-shadow(0 0 10px rgba(158,255,0,0.6))" }}
                  >
                    25+
                  </p>
                  <p className="text-white/50 text-xs mt-0.5">Team Experts</p>
                </div>
                <div className="w-px h-12 bg-[#9EFF00]/20" />
                <div>
                  <p
                    className="text-4xl font-extrabold text-white"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    5★
                  </p>
                  <p className="text-white/50 text-xs mt-0.5">Client Rating</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — image collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative h-[440px] hidden lg:block"
          >
            {/* Main large image card */}
            <div
              className="absolute left-0 top-0 w-[58%] h-[75%] rounded-2xl overflow-hidden border border-[#9EFF00]/15"
              style={{ boxShadow: "0 0 40px rgba(158,255,0,0.1)" }}
            >
              <div
                className="w-full h-full"
                style={{
                  background: "linear-gradient(135deg,#0e1a04 0%, #1a2e08 50%, #0d1503 100%)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(158,255,0,0.15) 0%, transparent 60%)",
                }}
              />
              {/* Silhouette */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-40">
                <div
                  className="w-full h-full rounded-t-full opacity-50"
                  style={{ background: "linear-gradient(180deg, rgba(100,160,30,0.5), rgba(50,80,15,0.2))" }}
                />
              </div>
            </div>

            {/* Secondary image card */}
            <div
              className="absolute right-0 top-6 w-[40%] h-[55%] rounded-2xl overflow-hidden border border-[#9EFF00]/10"
              style={{ boxShadow: "0 0 24px rgba(158,255,0,0.07)" }}
            >
              <div
                className="w-full h-full"
                style={{ background: "linear-gradient(225deg, #0d1a04, #060d02)" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(158,255,0,0.12), transparent 70%)" }}
              />
            </div>

            {/* Third card */}
            <div
              className="absolute right-4 bottom-0 w-[44%] h-[38%] rounded-2xl overflow-hidden border border-white/5"
              style={{ boxShadow: "0 0 16px rgba(0,0,0,0.5)" }}
            >
              <div
                className="w-full h-full"
                style={{ background: "linear-gradient(180deg, #111, #0a0a0a)" }}
              />
            </div>

            {/* Floating experience badge */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute top-4 right-2 w-20 h-20"
            >
              <svg viewBox="0 0 100 100" width="80" height="80">
                <defs>
                  <path id="exp-circle" d="M 50,50 m -33,0 a 33,33 0 1,1 66,0 a 33,33 0 1,1 -66,0" />
                </defs>
                <text fontSize="8.5" fill="rgba(158,255,0,0.65)" letterSpacing="2.5">
                  <textPath href="#exp-circle">YEARS EXPERIENCE • 10+ YEARS •</textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-[#9EFF00]/15 border border-[#9EFF00]/30 flex items-center justify-center">
                  <span className="text-[#9EFF00] text-[9px] font-bold">10+</span>
                </div>
              </div>
            </motion.div>

            {/* Floating glow dot */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-12 left-8 w-3 h-3 rounded-full bg-[#9EFF00]"
              style={{ boxShadow: "0 0 16px rgba(158,255,0,0.8)" }}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}