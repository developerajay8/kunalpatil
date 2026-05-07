"use client";

import { useEffect, useRef, useState } from "react";
import LeadPopup from "./leadpopup";

export default function TruthAbout() {
  const ref = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] =
    useState(false);

  useEffect(() => {
    const els = [
      ref.current,
      aboutRef.current,
    ];

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting
          ) {
            entry.target.classList.add(
              "animate-in"
            );
          }
        },
        {
          threshold: 0.1,
        }
      );

    els.forEach((el) => {
      if (el)
        observer.observe(el);
    });

    return () =>
      observer.disconnect();
  }, []);

  const stats = [
    {
      num: "800+",
      label: "People Guided",
    },

    {
      num: "45+",
      label: "Skills Taught",
    },

    {
      num: "₹0→₹50K",
      label: "Possible Journey",
    },
  ];

  return (
    <>
      {/* SECTION 1 */}
      <section className="relative overflow-hidden bg-[#070707] py-16 sm:py-24">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

        {/* Center Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[300px] bg-orange-500/10 rounded-full blur-[120px]" />
        </div>

        <div
          ref={ref}
          className="
            relative
            z-10
            max-w-4xl
            mx-auto
            px-4
            sm:px-6
            text-center
            opacity-0
            translate-y-8
            transition-all
            duration-700
            [&.animate-in]:opacity-100
            [&.animate-in]:translate-y-0
          "
        >
          {/* Badge */}
          <span className="inline-block px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm font-semibold tracking-wide mb-8">
            ⚡ REALITY CHECK
          </span>

          {/* Heading */}
          <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight mb-8">
            You're{" "}
            <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 bg-clip-text text-transparent">
              Not
            </span>{" "}
            the Problem.
          </h2>

          {/* Cards */}
          <div className="space-y-5 mb-12">
            {[
              "You were never taught how to earn.",
              "No one showed you what skills matter.",
              "No one gave you a roadmap.",
              "No one told you where to begin.",
            ].map(
              (item, i) => (
                <div
                  key={i}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    p-5
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-orange-400/30
                  "
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

                  <div className="relative z-10 flex items-center gap-4 text-left">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-blue-400 flex-shrink-0" />

                    <p className="text-gray-300 text-base sm:text-lg">
                      {item}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Quote Box */}
          <div className="relative overflow-hidden rounded-[32px] border border-orange-500/20 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10" />

            <p className="relative z-10 text-xl sm:text-2xl font-bold text-white leading-relaxed">
              You stayed confused{" "}
              <span className="text-orange-400">
                not because you
                can't do it
              </span>
              <br />
              But because{" "}
              <span className="text-blue-400">
                no one simplified
                it for you.
              </span>
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <button
              onClick={() =>
                setOpen(true)
              }
              className="
                relative
                overflow-hidden
                px-8
                sm:px-10
                py-4
                rounded-full
                text-white
                font-semibold
                text-base
                sm:text-lg
                bg-gradient-to-r
                from-orange-500
                via-[#ff7b00]
                to-blue-600
                shadow-[0_10px_40px_rgba(255,115,0,0.35)]
                transition-all
                duration-300
                hover:scale-105
              "
            >
              <span className="relative z-10">
                👉 Start Your
                Journey Today
              </span>

              <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition" />
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative overflow-hidden bg-[#050505] py-16 sm:py-24"
      >
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-orange-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div
          ref={aboutRef}
          className="
            relative
            z-10
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            opacity-0
            translate-y-8
            transition-all
            duration-700
            [&.animate-in]:opacity-100
            [&.animate-in]:translate-y-0
          "
        >
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* IMAGE */}
            <div className="relative">
              <div className="relative max-w-md mx-auto lg:mx-0">
                {/* Outer Glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/20 to-blue-500/10 rounded-[40px] blur-2xl" />

                <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl">
                  <img
                    src="/IMG_4401.JPG.jpeg"
                    alt="Kunal Patil"
                    className="w-full aspect-[4/5] object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-5 right-5 px-4 py-2 rounded-full bg-orange-500/90 text-white text-xs font-bold shadow-lg">
                    ✓ Verified Coach
                  </div>

                  {/* Students */}
                  <div className="absolute bottom-5 left-5 px-4 py-2 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 text-white text-sm">
                    <span className="text-orange-400 font-bold">
                      800+
                    </span>{" "}
                    Students
                  </div>
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div>
              <span className="inline-block px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm font-semibold tracking-wide mb-6">
                🚀 Meet Your Mentor
              </span>

              <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight mb-6">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 bg-clip-text text-transparent">
                  Kunal Patil
                </span>
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I started from zero.
                No connections, no
                fancy degree —
                just a burning
                desire to build
                something on my
                own.
              </p>

              <p className="text-gray-400 leading-relaxed mb-10 text-base sm:text-lg">
                Today I've helped{" "}
                <span className="text-white font-semibold">
                  800+ people
                </span>{" "}
                learn real digital
                skills and start
                earning online.
                My mission is simple:
                give you the roadmap
                I wish I had when I
                started.
              </p>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {stats.map(
                  (s, i) => (
                    <div
                      key={i}
                      className="
                        relative
                        overflow-hidden
                        rounded-[24px]
                        border
                        border-white/10
                        bg-white/[0.03]
                        backdrop-blur-xl
                        p-4
                        text-center
                      "
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10" />

                      <div className="relative z-10">
                        <div className="text-lg sm:text-3xl font-black text-orange-400 mb-1">
                          {s.num}
                        </div>

                        <div className="text-gray-500 text-[11px] sm:text-sm">
                          {s.label}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-3">
                {[
                  "💻 Freelancer",
                  "🎯 Skills Coach",
                  "🚀 Entrepreneur",
                ].map((tag, i) => (
                  <span
                    key={i}
                    className="
                      px-5
                      py-2.5
                      rounded-full
                      bg-white/[0.04]
                      border
                      border-orange-500/20
                      text-orange-300
                      text-sm
                      font-medium
                      backdrop-blur-xl
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Popup */}
        <LeadPopup
          isOpen={open}
          onClose={() =>
            setOpen(false)
          }
        />
      </section>
    </>
  );
}