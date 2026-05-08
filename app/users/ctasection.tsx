"use client";

import { motion } from "framer-motion";
import Container from "./container";

export default function CTASection() {
  return (
    <section className="relative z-10 md:py-24 py-12">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden border border-[#9EFF00]/20 min-h-[240px] flex items-center"
          style={{
            background:
              "linear-gradient(135deg, #0d1a04 0%, #111e05 40%, #0a1502 100%)",
            boxShadow:
              "0 0 60px rgba(158,255,0,0.08), inset 0 0 80px rgba(158,255,0,0.04)",
          }}
        >
          {/* Grid overlay inside CTA */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(158,255,0,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(158,255,0,0.3) 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Right green glow */}
          <div
            className="absolute right-0 top-0 w-2/3 h-full opacity-25 pointer-events-none"
            style={{
              background:
                "linear-gradient(270deg, rgba(158,255,0,0.35) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />

          {/* Simulated person image area (right side) */}
          <div className="absolute right-0 top-0 h-full w-1/2 lg:w-2/5 opacity-40">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(270deg, rgba(50,90,15,0.3) 0%, transparent 80%)",
              }}
            />
            {/* Person silhouette */}
            <div className="absolute bottom-0 right-12 w-[140px] h-[220px]">
              <div
                className="w-full h-full rounded-t-full opacity-60"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(80,130,20,0.4) 0%, rgba(40,70,10,0.2) 100%)",
                }}
              />
            </div>
          </div>

          {/* Simulated code editor (center right) */}
          {/* <div className="absolute right-1/3 top-6 w-[200px] h-[160px] rounded-xl bg-black/50 border border-[#9EFF00]/15 backdrop-blur overflow-hidden hidden md:block">
            <div className="h-6 bg-black/40 border-b border-white/5 flex items-center px-3 gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/60" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
              <div className="w-2 h-2 rounded-full bg-[#9EFF00]/60" />
              <div className="flex-1 h-1 rounded bg-white/5 ml-2" />
            </div>
            <div className="p-3 space-y-1.5">
              {["const build = () => {", '  return "together";', "};", "", "// 🚀 Let's go"].map((line, i) => (
                <div key={i} className="flex gap-2">
                  <span className="text-white/20 text-[9px] w-3 flex-shrink-0">{i + 1}</span>
                  <span
                    className="text-[9px] font-mono"
                    style={{
                      color:
                        line.includes("const") || line.includes("return")
                          ? "#9EFF00"
                          : line.includes("//")
                          ? "rgba(255,255,255,0.3)"
                          : "rgba(255,255,255,0.6)",
                    }}
                  >
                    {line}
                  </span>
                </div>
              ))}
            </div>
          </div> */}

          {/* Content */}
          <div className="relative z-10 sm:px-8 px-3 md:px-12 py-10 max-w-[480px]">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white text-2xl sm:text-5xl font-extrabold leading-tight mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              LET US BUILD
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="flex items-center gap-4"
            >
              {/* Arrow button */}
              <motion.button
                whileHover={{ scale: 1.12, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 rounded-full bg-[#9EFF00] flex items-center justify-center flex-shrink-0"
                style={{ boxShadow: "0 0 28px rgba(158,255,0,0.55)" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </motion.button>

              {/* TOGETHER text */}
              <span
                className="text-2xl sm:text-5xl font-extrabold tracking-wide"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  color: "#9EFF00",
                  filter: "drop-shadow(0 0 18px rgba(158,255,0,0.5))",
                }}
              >
                TOGETHER
              </span>
            </motion.div>
          </div>

          {/* Circular rotating badge */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute top-6 right-6 w-[90px] h-[90px] hidden lg:block"
          >
            <svg viewBox="0 0 100 100" width="90" height="90">
              <defs>
                <path id="cta-circle" d="M 50,50 m -33,0 a 33,33 0 1,1 66,0 a 33,33 0 1,1 -66,0" />
              </defs>
              <text fontSize="8.5" fill="rgba(158,255,0,0.65)" letterSpacing="2.8">
                <textPath href="#cta-circle">BUILD A SUCCESS BRAND WITH DEMO •</textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-9 h-9 rounded-full border border-[#9EFF00]/30 bg-[#9EFF00]/10 flex items-center justify-center">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9EFF00" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}