"use client";
import { useEffect, useRef } from "react";

export default function TransformProof() {
  const transRef = useRef<HTMLDivElement>(null);
  const proofRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [transRef.current, proofRef.current];
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("animate-in"); },
      { threshold: 0.1 }
    );
    els.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const outcomes = [
    { emoji: "📱", before: "Scrolling reels", after: "Creating content" },
    { emoji: "💸", before: "Asking for money", after: "Earning your own" },
    { emoji: "😰", before: "Feeling stuck", after: "Moving forward" },
    { emoji: "🧠", before: "Self-doubt", after: "Confidence" },
  ];

  const testimonials = [
    { name: "Priya S.", role: "Student → Freelancer", text: "Started from zero knowledge. Now earning ₹25K/month from home!", avatar: "PS" },
    { name: "Anjali R.", role: "Housewife → Content Creator", text: "Never thought I could earn online. Kunal's guidance changed everything.", avatar: "AR" },
    { name: "Sneha M.", role: "Working Professional", text: "Added a second income stream while keeping my job. So grateful!", avatar: "SM" },
    { name: "Divya K.", role: "College Student", text: "Learning graphic design here was the best decision. Already getting clients.", avatar: "DK" },
  ];

  return (
    <>
      {/* Transformation Section */}
      <section className="relative py-24 bg-[#0d0d0d] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-orange-500/8 rounded-full blur-[120px]" />
        </div>

        <div
          ref={transRef}
          className="max-w-5xl mx-auto px-4 sm:px-6 opacity-0 translate-y-8 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
        >
          <div className="text-center mb-14">
            <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">The Vision</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-black text-white">
              Imagine{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                This…
              </span>
            </h2>
          </div>

          {/* Before / After */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {outcomes.map((o, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-center group hover:border-orange-500/25 transition-all duration-300">
                <div className="text-3xl mb-4">{o.emoji}</div>
                <div className="flex flex-col gap-2">
                  <div className="px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs line-through opacity-70">
                    {o.before}
                  </div>
                  <div className="text-gray-400 text-xs">↓</div>
                  <div className="px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold">
                    {o.after}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dream scenario */}
          <div className="relative p-10 rounded-3xl bg-gradient-to-br from-orange-500/15 via-amber-500/8 to-orange-900/10 border border-orange-500/25 text-center overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
            <p className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight">
              You wake up…<br />
              Check your phone…<br />
              And see{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                money you earned yourself.
              </span>
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-gray-400">
              {["No asking.", "No explaining.", "No depending."].map((t, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-6 text-orange-300 font-semibold text-lg">
              Not because someone gave it to you. <span className="text-white">But because you built it.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="proof" className="relative py-24 bg-[#080808] overflow-hidden">
        <div
          ref={proofRef}
          className="max-w-6xl mx-auto px-4 sm:px-6 opacity-0 translate-y-8 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
        >
          <div className="text-center mb-14">
            <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">Social Proof</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-black text-white mb-4">
              You're Not{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Alone
              </span>{" "}
              in This
            </h2>
            <p className="text-gray-500 text-lg">800+ people have already started their journey.</p>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-3 gap-4 mb-12 p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 to-amber-500/5 border border-orange-500/20">
            {[
              { num: "800+", label: "Active Learners" },
              { num: "6", label: "Skills Covered" },
              { num: "₹50K+", label: "Avg Monthly Earning" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-4xl font-black text-orange-400">{s.num}</div>
                <div className="text-gray-500 text-xs sm:text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonial cards */}
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-orange-500/25 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.name}</div>
                    <div className="text-orange-400 text-xs">{t.role}</div>
                  </div>
                  <div className="ml-auto text-orange-400 text-lg">★★★★★</div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed italic">"{t.text}"</p>
              </div>
            ))}
          </div>

          {/* Screenshot placeholder */}
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-dashed border-white/[0.1] text-center">
            <p className="text-gray-600 text-sm mb-2">📸 Add screenshots, DMs, and before/after stories here</p>
            <p className="text-gray-700 text-xs">This section is critical for conversions — add real testimonials!</p>
          </div>
        </div>
      </section>
    </>
  );
}