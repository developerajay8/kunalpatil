"use client";

import { motion, MotionProps  } from "framer-motion";
import Container from "./container";

const SKILLS = [
  { label: "UI/UX Design", percent: 96 },
  { label: "Software Develop", percent: 96 },
  { label: "IT Solution", percent: 96 },
];

function CircleProgress({ percent }: { percent: number }) {
  const r = 34;
  const circ = 2 * Math.PI * r;
  const dash = (percent / 100) * circ;

  return (
    <div className="relative w-[84px] h-[84px] flex items-center justify-center">
      <svg width="84" height="84" viewBox="0 0 84 84" className="-rotate-90">
        <circle
          cx="42" cy="42" r={r}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="5"
          fill="none"
        />
        <motion.circle
          cx="42" cy="42" r={r}
          stroke="#9EFF00"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${circ}`}
          initial={{ strokeDashoffset: circ }}
          whileInView={{ strokeDashoffset: circ - dash }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
          style={{ filter: "drop-shadow(0 0 6px rgba(158,255,0,0.6))" }}
        />
      </svg>
      <span className="absolute text-white font-bold text-sm">{percent}%</span>
    </div>
  );
}

const fadeUp = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 32 },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
    margin: "-60px",
  },

  transition: {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    delay,
  },
});

export default function ExpertiseSection() {
  return (
    <section className="relative z-10 md:py-24 py-12 overflow-hidden">
      {/* Section bg glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(158,255,0,0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT: Circular image */}
          <motion.div
            {...fadeUp(0.1)}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <img src="/IMG_4401.JPG.jpeg" alt="" />
            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <div className="flex flex-col gap-7">
            {/* Badge */}
            <motion.div {...fadeUp(0.15)} className="flex items-center gap-2">
              <span className="text-[#9EFF00] text-base">✦</span>
              <span className="text-[#9EFF00] text-xs font-semibold tracking-widest uppercase">
                Backed By Real Skills
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              {...fadeUp(0.25)}
              className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Deep Expertise In Cutting
              <br />
              Edge{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(90deg, #9EFF00, #c6ff5e)",
                  filter: "drop-shadow(0 0 14px rgba(158,255,0,0.4))",
                }}
              >
                Software Solutions
              </span>
            </motion.h2>

            {/* Sub */}
            <motion.p
              {...fadeUp(0.33)}
              className="text-white/45 text-sm leading-relaxed max-w-[440px]"
            >
              With years of hands on experience and passion for innovation we
              specialize in delivering advanced software best solutions
            </motion.p>

            {/* Skill circles */}
            <motion.div
              {...fadeUp(0.42)}
              className="flex flex-wrap gap-8"
            >
              {SKILLS.map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-2">
                  <CircleProgress percent={s.percent} />
                  <span className="text-white/60 text-xs text-center">{s.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div {...fadeUp(0.5)}>
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 0 44px rgba(158,255,0,0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 bg-[#9EFF00] text-black font-bold px-7 py-4 rounded-full text-sm shadow-[0_0_28px_rgba(158,255,0,0.35)] transition-all duration-300"
              >
                See How We Work
                <span className="w-7 h-7 rounded-full bg-black/20 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}