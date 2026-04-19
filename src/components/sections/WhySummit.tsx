"use client";

import { FadeIn } from "@/components/shared/FadeIn";
import { Target, Scale, Settings, Compass, Share2 } from "lucide-react";

const values = [
  { 
    title: "Growth Strategy", 
    desc: "Build a practical roadmap that moves you intentionally from your current level to your next.",
    icon: Target,
    color: "emerald"
  },
  { 
    title: "Leadership Development", 
    desc: "Develop the mindset, confidence, and strategic thinking required to lead yourself and others effectively.",
    icon: Scale,
    color: "blue"
  },
  { 
    title: "Entrepreneurial Structure", 
    desc: "Learn how to turn ideas into sustainable systems that drive long-term business growth.",
    icon: Settings,
    color: "amber"
  },
  { 
    title: "Career Direction", 
    desc: "Gain clarity on your path and position your skills strategically for real opportunities.",
    icon: Compass,
    color: "purple"
  },
  { 
    title: "Community & Network", 
    desc: "Surround yourself with ambitious minds, mentors, and collaborators who accelerate your growth.",
    icon: Share2,
    color: "rose"
  },
];

export function WhySummit() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter">
              Why The Growth <span className="text-emerald-600">Summit</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              A carefully curated experience designed to provide the specific tools 
              and connections you need to scale your impact.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div 
                  key={value.title} 
                  className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 bg-slate-50 group-hover:bg-emerald-50 text-slate-400 group-hover:text-emerald-600`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-bold text-slate-900 mb-4 text-xl tracking-tight leading-tight uppercase">
                    {value.title}
                  </h3>
                  
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {value.desc}
                  </p>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
