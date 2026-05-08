"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import Container from "./container";

const PROJECTS = [
  {
    category: "UI / UX Design",
    title: "Creative Portfolio Platform",
    color: "from-[#0e1a04] to-[#1c3008]",
    accent: "#9EFF00",
  },
  {
    category: "Software Development",
    title: "Financial Dashboard & SFG",
    color: "from-[#050d02] to-[#0a1804]",
    accent: "#9EFF00",
  },
  {
    category: "Mobile Application",
    title: "E-Commerce Mobile App",
    color: "from-[#080808] to-[#111]",
    accent: "#9EFF00",
  },
  {
    category: "AI Integration",
    title: "AI Analytics Platform",
    color: "from-[#06100a] to-[#0d1e10]",
    accent: "#9EFF00",
  },
];

export default function PortfolioSection() {
  const [active, setActive] = useState(1);

  return (
    <section className="relative z-10 md:py-24 py-12 overflow-hidden bg-[#050505]">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(158,255,0,0.2) 1px,transparent 1px),linear-gradient(90deg,rgba(158,255,0,0.2) 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none opacity-[0.06]"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, rgba(158,255,0,0.6) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <Container className="relative z-10">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="text-[#9EFF00]">✦</span>
              <span className="text-[#9EFF00] text-xs font-semibold tracking-widest uppercase">
                Our Recent Work
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Discover Our{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(90deg, #9EFF00, #c6ff5e)",
                  filter: "drop-shadow(0 0 14px rgba(158,255,0,0.4))",
                }}
              >
                Recent Work
              </span>
            </motion.h2>
          </div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-[#9EFF00] text-black font-bold text-sm px-6 py-3 rounded-full flex-shrink-0 h-fit"
            style={{ boxShadow: "0 0 24px rgba(158,255,0,0.45)" }}
          >
            Explore Our Work
            <ArrowUpRight size={16} />
          </motion.button>
        </div>

        {/* Portfolio cards row */}
        <div className="flex gap-4 items-end overflow-x-auto pb-2 no-scrollbar">
          {PROJECTS.map((project, i) => (
            <PortfolioCard
              key={i}
              project={project}
              isActive={active === i}
              onClick={() => setActive(i)}
              index={i}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function PortfolioCard({
  project,
  isActive,
  onClick,
  index,
}: {
  project: (typeof PROJECTS)[0];
  isActive: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      animate={{
        flex: isActive ? 2.5 : 1,
        opacity: isActive ? 1 : 0.6,
      }}
      style={{
        minWidth: isActive ? 280 : 140,
        transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      className="relative rounded-2xl overflow-hidden cursor-pointer group flex-shrink-0"
    >
      {/* Card bg */}
      <div
        className={`w-full h-[340px] sm:h-[420px] bg-gradient-to-b ${project.color} relative`}
        style={{
          border: isActive ? "1px solid rgba(158,255,0,0.3)" : "1px solid rgba(255,255,255,0.06)",
          boxShadow: isActive ? "0 0 40px rgba(158,255,0,0.12)" : "none",
        }}
      >
        {/* Green glow top */}
        <div
          className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none transition-opacity duration-500"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(158,255,0,0.18) 0%, transparent 70%)",
            opacity: isActive ? 1 : 0.3,
          }}
        />

        {/* Person silhouette inside */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-20 h-36">
          <div
            className="w-full h-full rounded-t-full opacity-50"
            style={{
              background: "linear-gradient(180deg, rgba(100,160,30,0.5), rgba(30,60,10,0.2))",
            }}
          />
        </div>

        {/* Animated border glow */}
        {isActive && (
          <motion.div
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ boxShadow: "inset 0 0 0 1px rgba(158,255,0,0.3)" }}
          />
        )}

        {/* Play button — center */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.3 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-14 h-14 rounded-full bg-[#9EFF00] flex items-center justify-center"
                style={{ boxShadow: "0 0 30px rgba(158,255,0,0.6)" }}
              >
                <Play size={18} className="fill-black text-black ml-1" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom info */}
        <AnimatePresence>
          {isActive ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.35 }}
              className="absolute bottom-0 left-0 right-0 p-5"
              style={{
                background: "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, transparent 100%)",
              }}
            >
              <span
                className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold mb-2"
                style={{
                  background: "rgba(158,255,0,0.15)",
                  border: "1px solid rgba(158,255,0,0.3)",
                  color: "#9EFF00",
                }}
              >
                {project.category}
              </span>
              <h3
                className="text-white font-bold text-base"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {project.title}
              </h3>
              <div className="flex items-center gap-1.5 mt-2">
                <ArrowUpRight size={14} className="text-[#9EFF00]" />
                <span className="text-[#9EFF00] text-xs font-semibold">View Project</span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute bottom-4 left-0 right-0 flex justify-center"
            >
              <div className="w-1 h-1 rounded-full bg-white/30" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}