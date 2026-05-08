"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Globe, Wrench, ArrowUpRight, Star } from "lucide-react";
import Container from "./container";

const SERVICES = [
  {
    icon: <Code2 size={18} />,
    title: "Software Development",
    desc: "We build scalable, high-performance software tailored to your business needs with modern tech stack.",
  },
  {
    icon: <Globe size={18} />,
    title: "Application Development",
    desc: "End-to-end web and cloud applications with seamless user experience and robust architecture.",
  },
  {
    icon: <Smartphone size={18} />,
    title: "Mobile App Development",
    desc: "Native and cross-platform apps that deliver exceptional performance across all devices.",
  },
  {
    icon: <Wrench size={18} />,
    title: "Software Maintenance",
    desc: "Continuous support, updates, and performance optimization to keep your product running flawlessly.",
  },
];

const AVATARS = ["A", "B", "C", "D"];

export default function ServicesSection() {
  return (
    <section className="relative z-10 md:py-24 py-12 overflow-hidden bg-[#050505]">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(158,255,0,0.2) 1px,transparent 1px),linear-gradient(90deg,rgba(158,255,0,0.2) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-[0.07]"
        style={{
          background: "radial-gradient(ellipse, rgba(158,255,0,0.5) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <Container className="relative z-10">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-3 mb-4"
        >
          <div className="flex items-center gap-2">
            <span className="text-[#9EFF00]">✦</span>
            <span className="text-[#9EFF00] text-xs font-semibold tracking-widest uppercase">
              Build To Enable Success
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold text-white leading-tight text-center mb-14"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Smart Services For{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(90deg, #9EFF00, #c6ff5e)",
              filter: "drop-shadow(0 0 14px rgba(158,255,0,0.4))",
            }}
          >
            Digital Growth
          </span>
        </motion.h2>

        {/* Main grid: 2 left cards | center image | 2 right cards */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px_1fr] gap-6 items-start">

          {/* LEFT cards */}
          <div className="flex flex-col gap-5">
            {SERVICES.slice(0, 2).map((s, i) => (
              <ServiceCard key={i} {...s} delay={i * 0.1} />
            ))}
          </div>

          {/* CENTER image card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden border border-[#9EFF00]/20 h-[420px] lg:h-[500px]"
            style={{
              background: "linear-gradient(180deg, #0e1a04 0%, #060d02 100%)",
              boxShadow: "0 0 50px rgba(158,255,0,0.12), inset 0 0 40px rgba(158,255,0,0.04)",
            }}
          >
            {/* Green glow top */}
            <div
              className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 50% 0%, rgba(158,255,0,0.2) 0%, transparent 70%)",
              }}
            />
            {/* Person silhouette */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-36 h-64">
              <div
                className="w-full h-full rounded-t-full"
                style={{ background: "linear-gradient(180deg, rgba(80,130,20,0.6), rgba(30,60,10,0.3))" }}
              />
            </div>

            {/* Floating phone mockup */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 left-1/2 -translate-x-1/2 w-[110px] h-[190px] rounded-2xl border border-[#9EFF00]/30 bg-black/60 backdrop-blur overflow-hidden"
              style={{ boxShadow: "0 0 30px rgba(158,255,0,0.2)" }}
            >
              <div className="h-5 bg-black/50 border-b border-white/5 flex items-center justify-center">
                <div className="w-10 h-1 rounded-full bg-white/20" />
              </div>
              <div className="p-2 space-y-1.5">
                {["Dashboard", "Analytics", "Reports", "Settings"].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#9EFF00]/60" />
                    <div
                      className="h-1.5 rounded-full"
                      style={{
                        width: `${60 + i * 8}%`,
                        background: i === 0 ? "#9EFF00" : "rgba(255,255,255,0.15)",
                      }}
                    />
                  </div>
                ))}
                <div className="mt-3 w-full h-16 rounded-lg bg-[#9EFF00]/10 border border-[#9EFF00]/20 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#9EFF00]/20 border border-[#9EFF00]/40" />
                </div>
              </div>
            </motion.div>

            {/* Bottom social proof */}
            <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-3">
              <div className="flex items-center gap-1">
                {AVATARS.map((a, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-[#050505] bg-[#9EFF00]/20 flex items-center justify-center text-[#9EFF00] text-[9px] font-bold -ml-1 first:ml-0"
                  >
                    {a}
                  </div>
                ))}
                <div className="flex ml-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className="text-[#9EFF00] fill-[#9EFF00]" />
                  ))}
                </div>
              </div>
              <p className="text-white/40 text-[10px]">Join Over 200+ Inspiring Creators</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-[#9EFF00] text-black font-bold text-xs px-5 py-2.5 rounded-full"
                style={{ boxShadow: "0 0 20px rgba(158,255,0,0.5)" }}
              >
                Explore Our Work
                <ArrowUpRight size={13} />
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT cards */}
          <div className="flex flex-col gap-5">
            {SERVICES.slice(2, 4).map((s, i) => (
              <ServiceCard key={i} {...s} delay={(i + 2) * 0.1} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02, borderColor: "rgba(158,255,0,0.3)" }}
      className="p-5 rounded-2xl border border-white/8 flex flex-col gap-3 cursor-pointer transition-all duration-300 group"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        className="w-10 h-10 rounded-xl bg-[#9EFF00]/10 border border-[#9EFF00]/20 flex items-center justify-center text-[#9EFF00] group-hover:bg-[#9EFF00]/20 transition-all"
        style={{ boxShadow: "0 0 16px rgba(158,255,0,0.1)" }}
      >
        {icon}
      </div>
      <h3 className="text-white font-semibold text-sm">{title}</h3>
      <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
      <motion.button
        whileHover={{ x: 4 }}
        className="flex items-center gap-1 text-[#9EFF00] text-xs font-semibold w-fit"
      >
        Read More <ArrowUpRight size={12} />
      </motion.button>
    </motion.div>
  );
}