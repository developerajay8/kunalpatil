"use client";
import { useEffect, useRef, useState } from "react";
import LeadPopup from "./leadpopup";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("animate-in");
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleVideo = () => {
    const video = videoRef.current;

    if (video) {
      if (isPlaying) {
        video.pause();
        setIsPlaying(false);
      } else {
        video.play();
        setIsPlaying(true);
      }
    }
  };

  const [open, setOpen] = useState(false);

  return (
    <>
    <section className="relative md:py-28 pt-25 flex items-center justify-center overflow-hidden bg-[#080808]">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-orange-500/10 blur-[120px] animate-pulse" />
        <div className="absolute top-3/4 left-1/4 w-[300px] h-[300px] rounded-full bg-orange-600/8 blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] rounded-full bg-amber-500/8 blur-[60px] animate-pulse" style={{ animationDelay: "2s" }} />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-orange-400/60 animate-float"
          style={{
            left: `${10 + i * 11}%`,
            top: `${20 + (i % 3) * 20}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${3 + i * 0.5}s`,
          }}
        />
      ))}

      <div
        ref={heroRef}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center opacity-0 translate-y-8 transition-all duration-1000 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-300 text-sm font-medium mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse sm:block hidden" />
          800+ people already started their journey
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tight">
          Stop{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 bg-clip-text text-transparent">
              Depending
            </span>
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
              <path d="M2 8 Q75 2 150 8 Q225 14 298 6" stroke="url(#underline-grad)" strokeWidth="3" strokeLinecap="round" />
              <defs>
                <linearGradient id="underline-grad" x1="0" y1="0" x2="1" y2="0">
                  <stop stopColor="#f97316" />
                  <stop offset="1" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
            </svg>
          </span>{" "}
          on Others
          <br />
          <span className="text-gray-200">Start</span>{" "}
          <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 bg-clip-text text-transparent">
            Earning
          </span>{" "}
          <span className="text-gray-200">with Skills</span>
        </h1>

        {/* Sub headline */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed">
          No experience. No degree. No confusion.
        </p>
        <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto mb-10">
          Just a clear path to learn high-income skills and start earning online — even from zero.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:mb-10 mb-5">
          <button  onClick={() => setOpen(true)}  
            className="group relative sm:px-8 px-4 py-4 bg-gradient-to-r from-orange-500 via-[#ff7b00] to-blue-600 text-white font-bold text-lg rounded-full overflow-hidden shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10">👉 Start Your Journey Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
           
          <button
            onClick={() => scrollTo("#video")}
            className="flex items-center gap-3 px-6 py-4 text-gray-300 hover:text-orange-400 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full border-2 border-orange-500/50 flex items-center justify-center group-hover:border-orange-400 group-hover:bg-orange-500/10 transition-all">
              <span className="text-xs ml-0.5">▶</span>
            </div>
            Watch My Story
          </button>
        </div>

        <LeadPopup
        isOpen={open}
        onClose={() => setOpen(false)}
      />

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-2"><span className="text-green-400">✓</span> No Experience Needed</span>
          <span className="flex items-center gap-2"><span className="text-green-400">✓</span> Start in 24 Hours</span>
          <span className="flex items-center gap-2"><span className="text-green-400">✓</span> Real Earning Skills</span>
        </div>

        

        


      </div>

      <LeadPopup
        isOpen={open}
        onClose={() => setOpen(false)}
      />

      

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0.6; }
          50% { transform: translateY(-20px); opacity: 1; }
        }
        .animate-float { animation: float linear infinite; }
      `}</style>
    </section>

    {/* video */}
    <div id="video" className="pb-12 px-2 pt-6 w-full  relative"> {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-orange-500/10 blur-[120px] animate-pulse" />
        <div className="absolute top-3/4 left-1/4 w-[300px] h-[300px] rounded-full bg-orange-600/8 blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] rounded-full bg-amber-500/8 blur-[60px] animate-pulse" style={{ animationDelay: "2s" }} />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>
       <div className=" max-w-7xl mx-auto">
        <div 
          className="rounded-2xl overflow-hidden border border-white/10 shadow-xl cursor-pointer"
          onClick={handleToggleVideo}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            playsInline
          >
            <source
              src="https://res.cloudinary.com/dvjpyxdqy/video/upload/q_auto/f_auto/v1778058033/kunal_A_xehtvk.mp4"
              type="video/mp4"
            />
          </video>

          {/* ▶️ Play Button Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/60 px-6 py-3 rounded-lg text-white text-lg">
                ▶ Tap to Play
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    </>
  );
}