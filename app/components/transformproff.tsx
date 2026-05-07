"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaPlay,
} from "react-icons/fa";
import LeadPopup from "./leadpopup";

export default function TruthAbout() {
  const sectionRef =
    useRef<HTMLDivElement>(null);

  const aboutRef =
    useRef<HTMLDivElement>(null);

  const [open, setOpen] =
    useState(false);

  useEffect(() => {
    const items = [
      sectionRef.current,
      aboutRef.current,
    ];

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting
          ) {
            entry.target.classList.add(
              "show"
            );
          }
        },
        {
          threshold: 0.15,
        }
      );

    items.forEach((el) => {
      if (el)
        observer.observe(el);
    });

    return () =>
      observer.disconnect();
  }, []);

  const points = [
    "You were never taught real online skills.",
    "Nobody gave you a simple roadmap.",
    "You kept searching without direction.",
    "You just needed proper guidance.",
  ];

  const stats = [
    {
      value: "800+",
      label: "Students Guided",
    },
    {
      value: "45+",
      label: "Digital Skills",
    },
    {
      value: "₹50K+",
      label: "Income Potential",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#050505] py-20 sm:py-28">
        {/* BACKGROUND */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[140px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

        <div
          ref={sectionRef}
          className="
            relative
            z-10
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            opacity-0
            translate-y-10
            duration-700
            transition-all
            [&.show]:opacity-100
            [&.show]:translate-y-0
          "
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-300 text-sm font-semibold mb-8 backdrop-blur-xl">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                REALITY CHECK
              </div>

              <h1 className="text-4xl sm:text-6xl  font-black leading-tight text-white mb-8">
                You Were Never
                <span className="block bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 bg-clip-text text-transparent">
                  Meant To Stay
                </span>
                Confused.
              </h1>

              <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
                Most people fail
                because nobody
                teaches them the
                right skills, the
                right roadmap, and
                the right mindset.
              </p>

              {/* POINTS */}
              <div className="space-y-4 mb-10">
                {points.map(
                  (item, i) => (
                    <div
                      key={i}
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-[26px]
                        border
                        border-white/10
                        bg-white/[0.03]
                        backdrop-blur-xl
                        p-5
                        transition-all
                        duration-500
                        hover:border-orange-400/30
                        hover:-translate-y-1
                      "
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

                      <div className="relative z-10 flex items-start gap-4">
                        <div className="mt-1 text-orange-400 text-lg">
                          <FaCheckCircle />
                        </div>

                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                          {item}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() =>
                    setOpen(true)
                  }
                  className="
                    group
                    relative
                    overflow-hidden
                    px-8
                    sm:px-10
                    py-4
                    rounded-full
                    bg-gradient-to-r
                    from-orange-500
                    via-[#ff7b00]
                    to-blue-600
                    text-white
                    font-semibold
                    text-base
                    sm:text-lg
                    shadow-[0_10px_40px_rgba(255,115,0,0.35)]
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Start Your Journey
                    <FaArrowRight className="group-hover:translate-x-1 transition" />
                  </span>
                </button>

                <button
                  className="
                    px-8
                    py-4
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    text-white
                    font-medium
                    hover:bg-white/[0.05]
                    transition
                  "
                >
                  <span className="flex items-center justify-center gap-3">
                    <FaPlay />
                    Watch Story
                  </span>
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              {/* GLOW */}
              <div className="absolute -inset-6 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-[40px] blur-3xl" />

              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-xl">
                <img
                  src="/IMG_4401.JPG.jpeg"
                  alt="mentor"
                  className="w-full aspect-[4/5] object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* BADGE */}
                <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-black/40 border border-white/10 backdrop-blur-xl text-white text-sm">
                  🚀 Digital Mentor
                </div>

                {/* FLOATING CARD */}
                <div className="absolute bottom-5 left-5 right-5 rounded-[28px] border border-white/10 bg-black/40 backdrop-blur-xl p-5">
                  <p className="text-white text-lg font-semibold mb-2">
                    “Your background
                    doesn't decide your
                    future.”
                  </p>

                  <p className="text-gray-400 text-sm">
                    Learn high-income
                    digital skills and
                    build your own
                    online journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative overflow-hidden bg-[#070707] py-20 sm:py-28"
      >
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-orange-500/10 rounded-full blur-[140px]" />

        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[140px]" />

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
            translate-y-10
            duration-700
            transition-all
            [&.show]:opacity-100
            [&.show]:translate-y-0
          "
        >
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* LEFT CONTENT */}
            <div>
              <span className="inline-block px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold tracking-wide mb-6">
                ABOUT YOUR MENTOR
              </span>

              <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight mb-6">
                Hi, I'm
                <span className="block bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 bg-clip-text text-transparent">
                  Kunal Patil
                </span>
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I started with no
                roadmap, no guidance,
                and no support.
                Everything changed
                when I learned the
                right digital skills.
              </p>

              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10">
                Now my mission is to
                help students,
                freelancers, and
                beginners build real
                income online without
                confusion.
              </p>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map(
                  (item, i) => (
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
                        p-5
                        text-center
                      "
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/10" />

                      <div className="relative z-10">
                        <h3 className="text-2xl sm:text-4xl font-black text-white mb-2">
                          {item.value}
                        </h3>

                        <p className="text-gray-500 text-xs sm:text-sm">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl p-8 sm:p-10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />

                <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-orange-500 to-blue-600 flex items-center justify-center text-3xl mb-8 shadow-2xl">
                    🚀
                  </div>

                  <h3 className="text-3xl font-black text-white mb-6 leading-tight">
                    My Goal Is To Make
                    Your Journey Simple.
                  </h3>

                  <div className="space-y-5">
                    {[
                      "Step-by-step roadmap",
                      "Real skill learning",
                      "Beginner friendly guidance",
                      "Online earning mindset",
                    ].map(
                      (
                        item,
                        i
                      ) => (
                        <div
                          key={i}
                          className="flex items-center gap-4"
                        >
                          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-blue-400" />

                          <p className="text-gray-300">
                            {item}
                          </p>
                        </div>
                      )
                    )}
                  </div>

                  <button
                    onClick={() =>
                      setOpen(true)
                    }
                    className="
                      mt-10
                      w-full
                      py-4
                      rounded-2xl
                      bg-gradient-to-r
                      from-orange-500
                      via-[#ff7b00]
                      to-blue-600
                      text-white
                      font-semibold
                      text-lg
                      transition-all
                      duration-300
                      hover:scale-[1.02]
                    "
                  >
                    Join The Community
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

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