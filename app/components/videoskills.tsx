"use client";

import { useState } from "react";
import {
  FaHeart,
  FaRegClock,
  FaShare,
} from "react-icons/fa";

const videos = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dvjpyxdqy/video/upload/q_auto/f_auto/v1778058310/IMG_6174_pqzslx.mp4",
    thumbnail: "/1.png",
    caption:
      "From confused → started earning 💰",
  },

  {
    id: 2,
    src: "https://res.cloudinary.com/dvjpyxdqy/video/upload/q_auto/f_auto/v1778059247/IMG_6175_l3i9oy.mp4",
    thumbnail: "/2.png",
    caption: "First income feeling ❤️",
  },

  {
    id: 3,
    src: "https://res.cloudinary.com/dvjpyxdqy/video/upload/q_auto/f_auto/v1778061206/IMG_6173_pcbq7r.mp4",
    thumbnail: "/3.png",
    caption: "Started from zero 🚀",
  },

  {
    id: 4,
    src: "https://res.cloudinary.com/dvjpyxdqy/video/upload/q_auto/f_auto/v1778063785/IMG_6188_vhv9dz.mp4",
    thumbnail: "/4.png",
    caption:
      "Now working with clients 💻",
  },
];

function VideoCard({
  video,
  activeId,
  setActiveId,
}: any) {
  const [showMenu, setShowMenu] =
    useState(false);

  const isActive =
    activeId === video.id;

  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        shadow-[0_10px_40px_rgba(0,0,0,0.5)]
        aspect-[9/16]
        transition-all
        duration-500
        cursor-pointer
        hover:-translate-y-2
        hover:border-orange-400/30
        ${
          isActive
            ? "scale-[1.03] border-orange-400/40"
            : ""
        }
      `}
      onClick={() =>
        setActiveId(
          isActive ? null : video.id
        )
      }
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500 z-0" />

      {/* Video / Thumbnail */}
      {isActive ? (
        <video
          src={video.src}
          className="w-full h-full object-cover"
          autoPlay
          controls
          playsInline
        />
      ) : (
        <>
          <img
            src={video.thumbnail}
            alt="thumbnail"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500/30">
              ▶
            </div>
          </div>
        </>
      )}

      {/* Top Badge */}
      <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] sm:text-xs font-semibold">
        Success Story
      </div>

      {/* Caption */}
      <div className="absolute bottom-4 left-4 right-4 z-20">
        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3">
          <p className="text-white text-sm font-medium leading-relaxed">
            {video.caption}
          </p>
        </div>
      </div>

      {/* Menu Button */}
      <div
        className="absolute top-4 right-4 z-30"
        onClick={(e) => {
          e.stopPropagation();
          setShowMenu(!showMenu);
        }}
      >
        <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center">
          <div className="flex flex-col gap-[3px]">
            {[...Array(3)].map(
              (_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 rounded-full bg-white"
                />
              )
            )}
          </div>
        </div>
      </div>

      {/* Menu */}
      {showMenu && (
        <div
          onClick={(e) =>
            e.stopPropagation()
          }
          className="
            absolute
            top-0
            right-0
            w-[220px]
            h-full
            bg-black/90
            backdrop-blur-2xl
            border-l
            border-white/10
            z-40
            p-5
          "
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-white font-semibold text-sm">
              More Options
            </h4>

            <button
              onClick={() =>
                setShowMenu(false)
              }
              className="text-white/70 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Menu Items */}
          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-orange-500/20 text-white/80 hover:text-white transition">
              <FaHeart />
              Like
            </button>

            <button className="w-full flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-orange-500/20 text-white/80 hover:text-white transition">
              <FaRegClock />
              Watch Later
            </button>

            <button className="w-full flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-orange-500/20 text-white/80 hover:text-white transition">
              <FaShare />
              Share
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function VideoTestimonialsSection() {
  const [activeId, setActiveId] =
    useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#070707] py-24">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm font-semibold tracking-wide mb-6">
            🎥 Success Stories
          </span>

          <h2 className="text-4xl sm:text-6xl font-black leading-tight text-white">
            Watch How It{" "}
            <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 bg-clip-text text-transparent">
              All Started
            </span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-gray-400 leading-relaxed">
            Real people. Real journeys.
            Real progress.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-14 max-w-3xl mx-auto">
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            They are now learning
            high-income skills, getting
            freelance work, and building
            their own income stream —
            step by step.
          </p>
        </div>
      </div>
    </section>
  );
}