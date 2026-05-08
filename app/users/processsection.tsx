"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "./container";

const STEPS = [
  {
    num: "01",
    title: "Discover And Define",
    desc: "We deeply analyze your business challenges, goals, and audience to lay a solid strategic foundation before any code is written.",
  },
  {
    num: "02",
    title: "Planning For Design",
    desc: "Our designers craft pixel-perfect wireframes and prototypes that align with your brand vision and user expectations.",
  },
  {
    num: "03",
    title: "Build And Development",
    desc: "Our expert engineers bring designs to life using modern technologies, agile sprints, and continuous testing.",
  },
];

const TAGS = [
  "AI Powered",
  "Custom Planning",
  "Creative Thinking",
  "AI Integration",
  "Fast Testing",
  "Launch Setup",
  "Performance Testing",
  "Automated Monitoring",
];

export default function ProcessSection() {
  return (
    <section className="relative z-10 md:py-24 py-12 overflow-hidden bg-[#050505]">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(158,255,0,0.2) 1px,transparent 1px),linear-gradient(90deg,rgba(158,255,0,0.2) 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Glow left */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[500px] opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 0% 50%, rgba(158,255,0,0.5) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <Container className="relative z-10">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-4"
        >
          <span className="text-[#9EFF00]">✦</span>
          <span className="text-[#9EFF00] text-xs font-semibold tracking-widest uppercase">
            Built To Work For You
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-14"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Our Process{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(90deg, #9EFF00, #c6ff5e)",
              filter: "drop-shadow(0 0 14px rgba(158,255,0,0.4))",
            }}
          >
            Your Solution
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">

          {/* LEFT — steps */}
          <div className="flex flex-col gap-5">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ scale: 1.02 }}
                className="relative flex gap-5 p-5 rounded-2xl border border-white/7 group transition-all duration-300 cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                  backdropFilter: "blur(10px)",
                }}
              >
                {/* Hover glow border */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(158,255,0,0.25), 0 0 20px rgba(158,255,0,0.06)" }}
                />

                {/* Step number */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#9EFF00]/10 border border-[#9EFF00]/25 flex items-center justify-center group-hover:bg-[#9EFF00]/20 transition-all"
                  style={{ boxShadow: "0 0 12px rgba(158,255,0,0.1)" }}
                >
                  <span
                    className="text-[#9EFF00] font-extrabold text-sm"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {step.num}
                  </span>
                </div>

                <div className="flex flex-col gap-1.5">
                  <h3 className="text-white font-semibold text-sm">{step.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT — tilted image collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative h-[400px] hidden lg:block"
          >
            {/* Main tilted card */}
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [3, 4.5, 3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 top-8 w-[75%] h-[80%] rounded-2xl overflow-hidden border border-[#9EFF00]/20"
              style={{
                background: "linear-gradient(135deg, #0e1a04 0%, #1c3008 50%, #0a1402 100%)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(158,255,0,0.1)",
                transform: "rotate(3deg)",
              }}
            >
              {/* Green overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(158,255,0,0.15) 0%, transparent 60%)",
                }}
              />
              {/* Code lines decoration */}
              <div className="p-6 space-y-2 opacity-40">
                {[80, 60, 90, 45, 70, 55].map((w, i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <div className="w-4 h-1 rounded bg-[#9EFF00]/50" />
                    <div
                      className="h-1.5 rounded"
                      style={{
                        width: `${w}%`,
                        background: i % 2 === 0 ? "rgba(158,255,0,0.3)" : "rgba(255,255,255,0.15)",
                      }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Secondary card */}
            <motion.div
              animate={{ y: [0, 8, 0], rotate: [-4, -2.5, -4] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute right-0 bottom-4 w-[55%] h-[60%] rounded-2xl overflow-hidden border border-white/8"
              style={{
                background: "linear-gradient(225deg, #111, #0a0a0a)",
                boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
                transform: "rotate(-4deg)",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(ellipse at 70% 30%, rgba(158,255,0,0.08), transparent 70%)",
                }}
              />
              <div className="p-4 flex flex-col gap-3 opacity-50">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#9EFF00]/60" />
                    <div
                      className="h-1.5 rounded bg-white/20"
                      style={{ width: `${50 + i * 12}%` }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating glow orb */}
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#9EFF00]"
              style={{ boxShadow: "0 0 30px rgba(158,255,0,0.8)", filter: "blur(2px)" }}
            />
          </motion.div>
        </div>

        {/* Feature tags row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap gap-3"
        >
          {TAGS.map((tag, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06, borderColor: "rgba(158,255,0,0.5)" }}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/4 backdrop-blur cursor-pointer transition-all duration-200 group"
              style={{
                background: i === 2 ? "rgba(158,255,0,0.12)" : "rgba(255,255,255,0.03)",
                borderColor: i === 2 ? "rgba(158,255,0,0.4)" : undefined,
              }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: i === 2 ? "#9EFF00" : "rgba(255,255,255,0.3)" }}
              />
              <span
                className="text-xs font-medium"
                style={{ color: i === 2 ? "#9EFF00" : "rgba(255,255,255,0.5)" }}
              >
                {tag}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}