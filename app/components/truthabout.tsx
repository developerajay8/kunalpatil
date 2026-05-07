"use client";
import { useEffect, useRef } from "react";

export default function TruthAbout() {
  const ref = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [ref.current, aboutRef.current];
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("animate-in"); },
      { threshold: 0.1 }
    );
    els.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const stats = [
    { num: "800+", label: "People Guided" },
    { num: "45+", label: "Skills Taught" },
    { num: "₹0→₹50K", label: "Possible Journey" },
  ];

  return (
    <>
      {/* Truth Shift */}
      <section className="relative md:py-24 py-12 bg-[#0d0d0d] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-orange-500/8 rounded-full blur-[100px]" />
        </div>

        <div
          ref={ref}
          className="max-w-3xl mx-auto px-4 sm:px-6 text-center opacity-0 translate-y-8 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/25 text-orange-300 text-sm font-semibold mb-8 tracking-wide">
            ⚡ REALITY CHECK
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-8 leading-tight">
            You're{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Not
            </span>{" "}
            the Problem.
          </h2>

          <div className="space-y-5 mb-10">
            {[
              { bold: "You were never taught how to earn.", sub: "" },
              { bold: "No one showed you what skills matter.", sub: "" },
              { bold: "No one gave you a roadmap.", sub: "" },
              { bold: "No one told you where to begin.", sub: "" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-left"
              >
                <div className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0" />
                <p className="text-gray-300 text-base sm:text-lg">{item.bold}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-orange-500/15 to-amber-500/5 border border-orange-500/25">
            <p className="text-xl sm:text-2xl font-bold text-white leading-relaxed">
              You stayed confused{" "}
              <span className="text-orange-400">not because you can't do it</span>
              <br />
              But because{" "}
              <span className="text-orange-400">no one simplified it for you.</span>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 ">
          
              <button className="bg-[#f35113] cursor-pointer text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:scale-105 transition">
                👉 Start Your Journey Today
              </button>

        </div>
      </section>

      {/* About / Coach Section */}
      <section id="about" className="relative py-24 bg-[#080808] overflow-hidden">
        <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div
          ref={aboutRef}
          className="max-w-6xl mx-auto px-4 sm:px-6 opacity-0 translate-y-8 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image placeholder / visual */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto lg:mx-0">
                {/* Decorative frame */}
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/20 to-amber-500/5 rounded-3xl blur-xl" />
                <div className="relative rounded-2xl overflow-hidden border border-orange-500/20 aspect-[4/5]">
  <img
    src="/IMG_4401.JPG.jpeg"
    alt="Kunal Patil"
    className="w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

  {/* Floating badges */}
  <div className="absolute top-6 right-6 px-3 py-1.5 bg-orange-500/90 rounded-full text-white text-xs font-bold shadow-lg">
    ✓ Verified Coach
  </div>

  <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/70 backdrop-blur-sm rounded-xl text-white text-xs border border-white/10">
    <span className="text-orange-400 font-bold">800+</span> Students
  </div>
</div>
              </div>
            </div>

            {/* Text content */}
            <div>
              <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
                Meet Your Mentor
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Kunal Patil
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I started from zero. No connections, no fancy degree — just a burning desire to build something on my own.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Today I've helped <span className="text-white font-semibold">800+ people</span> learn real digital skills and start earning online. My mission is simple: give you the roadmap I wish I had when I started.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 sm:gap-4 mb-8">
                {stats.map((s, i) => (
                  <div key={i} className="p-4 sm:rounded-2xl bg-white/[0.04] border border-white/[0.07] text-center">
                    <div className="text-[16px] sm:text-2xl font-black text-orange-400 mb-1">{s.num}</div>
                    <div className="text-gray-500 sm:text-xs text-[12px]">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {["💻 Freelancer", "🎯 Skills Coach", "🚀 Entrepreneur"].map((tag, i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}