"use client";
import { useEffect, useRef } from "react";

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("animate-in"); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const thoughts = [
    "I don't have any skills.",
    "What if I fail?",
    "What will people say?",
    "Maybe this isn't for me.",
  ];

  const painPoints = [
    { icon: "💭", text: "You want to earn… but don't know where to start." },
    { icon: "📱", text: "You save reels about freelancing… but never begin." },
    { icon: "👀", text: "You feel like others are moving ahead… you're stuck." },
    { icon: "😔", text: "You keep doubting yourself every single day." },
  ];

  return (
    <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-orange-500/0 via-orange-500/40 to-orange-500/0" />

      <div
        ref={ref}
        className="max-w-4xl mx-auto px-4 sm:px-6 opacity-0 translate-y-8 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
      >
        {/* Label */}
        <div className="text-center mb-14">
          <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">Sound Familiar?</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-black text-white leading-tight">
            This Might Feel{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Uncomfortably
            </span>{" "}
            Familiar…
          </h2>
        </div>

        {/* Pain points */}
        <div className="grid sm:grid-cols-2 gap-4 mb-14">
          {painPoints.map((p, i) => (
            <div
              key={i}
              className="group flex items-start gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="text-2xl mt-0.5">{p.icon}</span>
              <p className="text-gray-300 text-base leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        {/* Inner voice section */}
        <div className="relative p-8 rounded-3xl bg-gradient-to-br from-red-900/20 to-orange-900/10 border border-red-500/20">
          <div className="absolute -top-3 left-8 px-4 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-xs font-semibold tracking-wide">
            THE INNER VOICE THAT HOLDS YOU BACK
          </div>
          <div className="grid sm:grid-cols-2 gap-3 mt-2">
            {thoughts.map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl bg-black/30 border border-white/5"
              >
                <span className="text-red-400 text-lg flex-shrink-0">"</span>
                <span className="text-gray-400 italic">{t}</span>
                <span className="text-red-400 text-lg flex-shrink-0">"</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-gray-400 text-base">
            And the worst part? You start{" "}
            <span className="text-orange-400 font-semibold">doubting yourself.</span>
          </p>
        </div>
      </div>
    </section>
  );
}