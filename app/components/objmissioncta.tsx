"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaWhatsapp,
} from "react-icons/fa";
import LeadPopup from "./leadpopup";

export default function ObjMissionCTA() {
  const [open, setOpen] =
    useState(false);

  const objRef =
    useRef<HTMLDivElement>(null);

  const missionRef =
    useRef<HTMLDivElement>(null);

  const joinRef =
    useRef<HTMLDivElement>(null);

  const ctaRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = [
      objRef.current,
      missionRef.current,
      joinRef.current,
      ctaRef.current,
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

    sections.forEach((el) => {
      if (el)
        observer.observe(el);
    });

    return () =>
      observer.disconnect();
  }, []);

  const objections = [
    {
      q: "What if I don't have any skills?",
      a: "Perfect. We'll build everything from zero.",
    },
    {
      q: "What if I don't have enough time?",
      a: "1-2 focused hours daily is enough to start.",
    },
    {
      q: "What if I fail?",
      a: "The biggest failure is never starting.",
    },
    {
      q: "What if I'm not confident?",
      a: "Confidence comes after action.",
    },
  ];

  const joinSteps = [
    {
      icon: "⚡",
      title:
        "Step-by-step Roadmap",
      desc: "Clear path from beginner to earning.",
    },
    {
      icon: "🎓",
      title:
        "Beginner Friendly",
      desc: "Simple learning with zero confusion.",
    },
    {
      icon: "💼",
      title:
        "Practical Skills",
      desc: "Learn real-world digital skills.",
    },
    {
      icon: "🤝",
      title: "Community Support",
      desc: "You're never alone in the journey.",
    },
  ];

  const whatsappUrl =
    "https://wa.me/918643071462?text=Hi%20Kunal%2C%20I%20want%20to%20start%20my%20journey%20with%20you!";

  return (
    <>
      {/* OBJECTION SECTION */}
      <section className="relative overflow-hidden bg-[#050505] py-20 sm:py-28">
        {/* GLOW */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[140px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px]" />

        <div
          ref={objRef}
          className="
            relative
            z-10
            max-w-5xl
            mx-auto
            px-4
            sm:px-6
            opacity-0
            translate-y-10
            transition-all
            duration-700
            [&.show]:opacity-100
            [&.show]:translate-y-0
          "
        >
          <div className="text-center mb-14">
            <span className="inline-block px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm font-semibold tracking-wide mb-6">
              NO MORE EXCUSES
            </span>

            <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight">
              Your Mind Says
              <span className="block bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 bg-clip-text text-transparent">
                “What If?”
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {objections.map(
              (item, i) => (
                <div
                  key={i}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    p-6
                    transition-all
                    duration-500
                    hover:border-orange-400/30
                    hover:-translate-y-1
                  "
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 text-xl flex-shrink-0">
                        ?
                      </div>

                      <h3 className="text-white text-lg font-bold leading-relaxed">
                        {item.q}
                      </h3>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-orange-400">
                        <FaArrowRight />
                      </div>

                      <p className="text-gray-300 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="relative overflow-hidden bg-[#070707] py-20 sm:py-28">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[400px] bg-orange-500/10 rounded-full blur-[140px]" />
        </div>

        <div
          ref={missionRef}
          className="
            relative
            z-10
            max-w-4xl
            mx-auto
            px-4
            sm:px-6
            text-center
            opacity-0
            translate-y-10
            transition-all
            duration-700
            [&.show]:opacity-100
            [&.show]:translate-y-0
          "
        >
          <span className="inline-block px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold tracking-wide mb-8">
            OUR PURPOSE
          </span>

          <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight mb-10">
            This Is Bigger
            <span className="block bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 bg-clip-text text-transparent">
              Than Money
            </span>
          </h2>

          <div className="space-y-5 mb-12">
            {[
              "Not asking before spending.",
              "Not depending on others.",
              "Not settling for average life.",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-4 text-gray-300 text-lg"
              >
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-blue-400" />

                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 sm:p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10" />

            <p className="relative z-10 text-2xl sm:text-4xl font-black text-white leading-relaxed">
              Build a life where
              <span className="block bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                you finally have choices.
              </span>
            </p>

            <p className="relative z-10 mt-5 text-gray-400 text-lg">
              And it all starts
              with learning the
              right skills.
            </p>
          </div>
        </div>
      </section>

      {/* JOIN STEPS */}
      <section className="relative overflow-hidden bg-[#050505] py-20 sm:py-28">
        <div
          ref={joinRef}
          className="
            relative
            z-10
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            opacity-0
            translate-y-10
            transition-all
            duration-700
            [&.show]:opacity-100
            [&.show]:translate-y-0
          "
        >
          <div className="text-center mb-14">
            <span className="inline-block px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm font-semibold tracking-wide mb-6">
              AFTER YOU JOIN
            </span>

            <h2 className="text-4xl sm:text-5xl font-black text-white">
              What Happens Next?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {joinSteps.map(
              (step, i) => (
                <div
                  key={i}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    p-6
                    transition-all
                    duration-500
                    hover:border-orange-400/30
                    hover:-translate-y-1
                  "
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-blue-600 flex items-center justify-center text-white font-bold mb-5 shadow-xl">
                      {i + 1}
                    </div>

                    <div className="text-4xl mb-5">
                      {step.icon}
                    </div>

                    <h3 className="text-white text-lg font-bold mb-3">
                      {step.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#070707] py-20 sm:py-28">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[500px] bg-orange-500/10 rounded-full blur-[150px]" />
        </div>

        <div
          ref={ctaRef}
          className="
            relative
            z-10
            max-w-4xl
            mx-auto
            px-4
            sm:px-6
            text-center
            opacity-0
            translate-y-10
            transition-all
            duration-700
            [&.show]:opacity-100
            [&.show]:translate-y-0
          "
        >
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-sm font-medium mb-10">
            <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />

            Stop waiting for the
            perfect moment.
          </div>

          <h2 className="text-4xl sm:text-7xl font-black text-white leading-tight mb-8">
            You Don't Need To
            <span className="block bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 bg-clip-text text-transparent">
              Feel Ready.
            </span>
          </h2>

          <p className="text-gray-400 text-lg sm:text-2xl leading-relaxed mb-12">
            You only need the
            courage to take your
            first step.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
            <button
              onClick={() =>
                setOpen(true)
              }
              className="
                group
                relative
                overflow-hidden
                px-10
                py-5
                rounded-full
                bg-gradient-to-r
                from-orange-500
                via-[#ff7b00]
                to-blue-600
                text-white
                font-black
                text-lg
                shadow-[0_15px_50px_rgba(255,115,0,0.35)]
                transition-all
                duration-300
                hover:scale-105
              "
            >
              <span className="relative z-10 flex items-center gap-3">
                👉 Start Your Journey
                <FaArrowRight className="group-hover:translate-x-1 transition" />
              </span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-8
                py-5
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                text-white
                font-semibold
                text-lg
                hover:bg-white/[0.05]
                transition-all
                duration-300
              "
            >
              <span className="flex items-center gap-3">
                <FaWhatsapp />
                WhatsApp
              </span>
            </a>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 text-gray-500 text-sm">
            <a
              href="mailto:workwithkunalpatil@gmail.com"
              className="hover:text-orange-400 transition"
            >
              📧
              workwithkunalpatil@gmail.com
            </a>

            <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-700" />

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              📱 +91 86430 71462
            </a>
          </div>
        </div>

        <LeadPopup
          isOpen={open}
          onClose={() =>
            setOpen(false)
          }
        />
      </section>

      {/* FOOTER */}
      <footer className="relative overflow-hidden bg-[#040404] border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black text-white">
                Kunal
                <span className="text-orange-400">
                  {" "}
                  Patil
                </span>
              </h3>
            </div>

            <p className="text-gray-500 text-center italic max-w-xl">
              “Your future changes
              the moment you decide
              to stop waiting.”
            </p>

            <button
              onClick={() =>
                setOpen(true)
              }
              className="
                px-6
                py-3
                rounded-full
                bg-orange-500/10
                border
                border-orange-500/20
                text-orange-300
                font-semibold
                hover:bg-orange-500/20
                transition-all
                duration-300
              "
            >
              👉 Join Now
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 text-center text-gray-700 text-sm">
            © 2025 Kunal Patil.
            All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}