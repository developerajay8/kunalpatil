"use client";
import { useEffect, useRef } from "react";

export default function VideoSkills() {
  const ref = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [ref.current, skillsRef.current];
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("animate-in"); },
      { threshold: 0.1 }
    );
    els.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      icon: "✍️",
      title: "Content Creation",
      desc: "Create posts that attract attention and build your audience organically",
      tag: "High Demand",
    },
    {
      icon: "💬",
      title: "Copywriting",
      desc: "Write words that sell — the most profitable skill online",
      tag: "Top Paying",
    },
    {
      icon: "📲",
      title: "Social Media Management",
      desc: "Handle brands online and get paid from anywhere",
      tag: "Easy Start",
    },
    {
      icon: "🎨",
      title: "Graphic Designing",
      desc: "Create stunning visuals without being naturally 'creative'",
      tag: "Always Needed",
    },
    {
      icon: "🎬",
      title: "Video Editing",
      desc: "Turn raw footage into income-generating content",
      tag: "Trending",
    },
    {
      icon: "🤖",
      title: "AI Tools",
      desc: "Work smarter not harder — automate and scale your output",
      tag: "Future Skill",
    },
  ];

  return (
    <>
      {/* Video Section */}
      <section id="video" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/6 rounded-full blur-[100px]" />
        </div>

        <div
          ref={ref}
          className="max-w-4xl mx-auto px-4 sm:px-6 opacity-0 translate-y-8 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
        >
          <div className="text-center mb-10">
            <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">My Story</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white">
              Watch How It All{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Started
              </span>
            </h2>
          </div>

          {/* Main video embed */}
          <div className="relative rounded-3xl overflow-hidden border border-orange-500/20 shadow-2xl shadow-orange-500/10 mb-8">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none" />
            <div className="aspect-video bg-[#111] flex items-center justify-center">
              {/* Replace src with actual YouTube embed */}
              <iframe
                className="w-full h-full"
                src="about:blank"
                title="Kunal Patil Story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              {/* Placeholder when no video added yet */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111]">
                <div className="w-20 h-20 rounded-full bg-orange-500/20 border-2 border-orange-500/40 flex items-center justify-center mb-4 hover:bg-orange-500/30 transition-colors cursor-pointer">
                  <span className="text-3xl ml-1">▶</span>
                </div>
                <p className="text-gray-500 text-sm">Add your YouTube embed URL here</p>
              </div>
            </div>
          </div>

          {/* Testimonial videos row */}
          <div className="text-center mb-6">
            <span className="text-gray-500 text-sm">Student Success Stories</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative aspect-video rounded-xl overflow-hidden bg-[#111] border border-white/[0.06] group cursor-pointer hover:border-orange-500/30 transition-all"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <span className="text-sm ml-0.5">▶</span>
                  </div>
                  <p className="text-gray-600 text-xs mt-2">Story {i}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 text-xs mt-3">Add testimonial video URLs in the component</p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-24 bg-[#080808] overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[80px] pointer-events-none" />

        <div
          ref={skillsRef}
          className="max-w-6xl mx-auto px-4 sm:px-6 opacity-0 translate-y-8 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
        >
          <div className="text-center mb-14">
            <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">What You'll Learn</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-black text-white mb-4">
              Skills That Actually{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Make You Money
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              No outdated theory. Only real-world, in-demand skills that pay.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Tag */}
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-orange-500/15 border border-orange-500/20 text-orange-300 text-xs font-medium">
                  {skill.tag}
                </div>
                <div className="text-3xl mb-4">{skill.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{skill.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{skill.desc}</p>
                <div className="mt-4 h-px bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 group-hover:via-orange-500/60 transition-all duration-300" />
              </div>
            ))}
          </div>

          {/* Bottom message */}
          <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-orange-500/10 to-amber-500/5 border border-orange-500/20">
            <p className="text-xl sm:text-2xl font-bold text-white mb-2">
              You don't need to master everything.
            </p>
            <p className="text-orange-400 text-lg font-semibold">
              You just need to start with one. 🔥
            </p>
          </div>
        </div>
      </section>
    </>
  );
}