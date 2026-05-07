"use client";
import { useEffect, useRef } from "react";

export default function ObjMissionCTA() {
  const objRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [objRef.current, ctaRef.current];
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("animate-in"); },
      { threshold: 0.1 }
    );
    els.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const objections = [
    { q: "What if I don't have any skills?", a: "Perfect. That's exactly where you start. We build from zero." },
    { q: "What if I don't have time?", a: "You don't need hours. You need just 1-2 hours of consistency." },
    { q: "What if I fail?", a: "You only fail when you don't start. Action is the only cure." },
    { q: "What if I'm not confident?", a: "Confidence comes after you begin. Not before." },
  ];

  const joinSteps = [
    { icon: "⚡", title: "Step-by-step guidance", desc: "Clear roadmap from day one" },
    { icon: "🎓", title: "Beginner-friendly learning", desc: "No jargon. No confusion." },
    { icon: "💼", title: "Real-world skill application", desc: "Learn by doing, not just watching" },
    { icon: "🤝", title: "Support system", desc: "You're not doing this alone" },
  ];

  const whatsappUrl = `https://wa.me/918643071462?text=Hi%20Kunal%2C%20I%20want%20to%20start%20my%20journey%20with%20you!`;

  return (
    <>
      {/* Objection Handling */}
      <section className="relative py-24 bg-[#0d0d0d] overflow-hidden">
        <div
          ref={objRef}
          className="max-w-4xl mx-auto px-4 sm:px-6 opacity-0 translate-y-8 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
        >
          <div className="text-center mb-14">
            <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">No More Excuses</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-black text-white">
              "But what if…"
            </h2>
          </div>

          <div className="space-y-4">
            {objections.map((o, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-red-400 text-xl mt-0.5 flex-shrink-0">?</span>
                  <div>
                    <p className="text-gray-300 font-semibold mb-2 italic">"{o.q}"</p>
                    <div className="flex items-start gap-2">
                      <span className="text-orange-400 font-bold flex-shrink-0">→</span>
                      <p className="text-orange-300">{o.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-24 bg-[#080808] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-orange-500/8 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-6 block">Our Purpose</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-8">
            This Is{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Bigger
            </span>{" "}
            Than Money
          </h2>

          <div className="space-y-4 mb-10">
            {[
              "Not asking before spending.",
              "Not depending on anyone.",
              "Not settling for less.",
            ].map((t, i) => (
              <div key={i} className="flex items-center justify-center gap-3 text-gray-400 text-lg">
                <span className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0" />
                {t}
              </div>
            ))}
          </div>

          <p className="text-xl sm:text-2xl text-white font-bold leading-relaxed">
            This is about building a life
            <br />
            where you have{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              choices.
            </span>
          </p>
          <p className="mt-4 text-gray-500 text-lg">And that starts with skills.</p>
        </div>
      </section>

      {/* What Happens After Joining */}
      <section className="relative py-20 bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">After You Join</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white">
              What Happens Next?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {joinSteps.map((s, i) => (
              <div key={i} className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-orange-500/25 transition-all duration-300 group text-center">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-xs font-bold">
                  {i + 1}
                </div>
                <div className="text-3xl mb-3 mt-2">{s.icon}</div>
                <h3 className="text-white font-bold mb-2 text-sm">{s.title}</h3>
                <p className="text-gray-600 text-xs">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="relative py-28 bg-[#080808] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-orange-500/12 rounded-full blur-[130px]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
        </div>

        <div
          ref={ctaRef}
          className="max-w-3xl mx-auto px-4 sm:px-6 text-center opacity-0 translate-y-8 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/15 border border-red-500/30 text-red-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            Don't stay stuck for another 6 months thinking "I'll start soon"
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            You Don't Need to{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Be Ready.
            </span>
          </h2>
          <p className="text-gray-400 text-xl mb-10">
            You just need to take the first step.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-black text-xl rounded-full overflow-hidden shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60 hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">👉 Start Your Journey Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* Contact info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <a href="mailto:workwithkunalpatil@gmail.com" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
              <span>📧</span> workwithkunalpatil@gmail.com
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
              <span>📱</span> +91 86430 71462
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-10 bg-[#050505] border-t border-white/[0.05]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-black text-xs">
                KP
              </div>
              <span className="text-gray-500 text-sm">
                Kunal<span className="text-orange-400">Patil</span>
              </span>
            </div>

            <p className="text-gray-600 text-sm text-center italic">
              "Your future doesn't change by waiting. It changes when you decide."
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-orange-500/15 border border-orange-500/30 text-orange-400 text-sm font-semibold rounded-full hover:bg-orange-500/25 transition-all"
            >
              👉 Start Now
            </a>
          </div>
          <p className="text-center text-gray-700 text-xs mt-6">
            © 2025 Kunal Patil. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}