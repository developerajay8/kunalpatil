"use client";

import { useEffect, useRef, useState } from "react";
import LeadPopup from "./leadpopup";

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null);

  const [open, setOpen] =
    useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting
          ) {
            el.classList.add(
              "animate-in"
            );
          }
        },
        {
          threshold: 0.1,
        }
      );

    observer.observe(el);

    return () =>
      observer.disconnect();
  }, []);

  const thoughts = [
    "I don't have any skills.",
    "What if I fail?",
    "What will people say?",
    "Maybe this isn't for me.",
  ];

  const painPoints = [
    {
      icon: "💭",
      text: "You want to earn… but don't know where to start.",
    },

    {
      icon: "📱",
      text: "You save reels about freelancing… but never begin.",
    },

    {
      icon: "👀",
      text: "You feel like others are moving ahead… you're stuck.",
    },

    {
      icon: "😔",
      text: "You keep doubting yourself every single day.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#070707] py-16 sm:py-24">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Top Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-orange-500/0 via-orange-500/50 to-transparent" />

      <div
        ref={ref}
        className="
          relative
          z-10
          max-w-6xl
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
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm font-semibold tracking-wide mb-6">
            ⚠ Reality Check
          </span>

          <h2 className="text-4xl sm:text-6xl font-black leading-tight text-white">
            This Might Feel{" "}
            <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 bg-clip-text text-transparent">
              Uncomfortably
            </span>{" "}
            Familiar...
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-gray-400 leading-relaxed">
            Most people stay stuck
            because they never get
            the right direction.
          </p>
        </div>

        {/* Pain Points */}
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {painPoints.map(
            (p, i) => (
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
                  sm:p-6
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-orange-400/30
                "
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center text-2xl flex-shrink-0">
                    {p.icon}
                  </div>

                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    {p.text}
                  </p>
                </div>
              </div>
            )
          )}
        </div>

        {/* Inner Voice */}
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-8">
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-orange-500/10" />

          {/* Badge */}
          <div className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-semibold tracking-wide">
            THE INNER VOICE
          </div>

          <div className="relative z-10 pt-12">
            <div className="grid sm:grid-cols-2 gap-4">
              {thoughts.map(
                (t, i) => (
                  <div
                    key={i}
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-black/30
                      px-5
                      py-4
                      text-gray-300
                      italic
                      transition
                      hover:border-orange-400/20
                    "
                  >
                    "{t}"
                  </div>
                )
              )}
            </div>

            <p className="mt-8 text-center text-gray-400 text-base sm:text-lg leading-relaxed">
              And slowly...
              you start{" "}
              <span className="text-orange-400 font-semibold">
                doubting yourself.
              </span>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
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
              👉 Start Your Journey
              Today
            </span>

            <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition" />
          </button>
        </div>
      </div>

      <LeadPopup
        isOpen={open}
        onClose={() =>
          setOpen(false)
        }
      />
    </section>
  );
}