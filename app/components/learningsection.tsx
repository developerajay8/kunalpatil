"use client";

import Image from "next/image";

const founders = [
  {
    name: "Anubhav Dubey",
    role: "Founder of Chai Sutta Bar",
    image: "/image.png",
    caption:
      "Building one of India’s most recognized café franchise brands.",
  },

  {
    name: "Arjun Deshpande",
    role: "Founder of Generic Aadhaar",
    image: "image.png",
    caption:
      "Known for making affordable medicines more accessible across India.",
  },

  {
    name: "Arjun Vaidya",
    role: "Founder of Dr. Vaidya’s",
    image: "/image.png",
    caption:
      "Building a modern Ayurveda brand for the new generation.",
  },
];

export default function LearningSection() {
  return (
    <section className="relative overflow-hidden bg-[#070707] py-24">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm font-semibold tracking-wide mb-6">
            🚀 Learning From Visionaries
          </span>

          <h2 className="text-4xl sm:text-6xl font-black leading-tight text-white">
            Learning From{" "}
            <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 bg-clip-text text-transparent">
              People Building
            </span>{" "}
            Big Things
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-gray-400 leading-relaxed">
            Growth becomes faster when you stay close to
            people building with intent.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {founders.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-400/30"
            >
              {/* Gradient Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Image */}
              <div className="relative h-[420px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Floating badge */}
                <div className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-semibold">
                  Visionary Founder
                </div>
              </div>

              {/* Content */}
              <div className="relative p-7">
                <h3 className="text-2xl font-black text-white mb-2">
                  {item.name}
                </h3>

                <p className="text-orange-300 font-semibold text-sm mb-4">
                  {item.role}
                </p>

                <div className="w-14 h-[2px] bg-gradient-to-r from-orange-400 to-blue-400 rounded-full mb-4" />

                <p className="text-gray-400 leading-relaxed text-[15px]">
                  {item.caption}
                </p>

                {/* Bottom Glow */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-400/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}