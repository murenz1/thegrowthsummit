"use client";

import { Mic2, Target, Users, MessageSquare } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/FadeIn";
const scheduleBlocks = [
  {
    time: "11:00 - 12:00",
    label: "Check-in",
    title: "Red Carpet & Arrivals",
    description: "Welcome reception, registration, and formal red carpet photography.",
    icon: Users,
  },
  {
    time: "12:00 - 13:00",
    label: "Main Stage",
    title: "Keynote & Panels",
    description: "Opening address and high-impact panel discussions on strategic growth.",
    icon: Mic2,
  },
  {
    time: "13:00 - 14:00",
    label: "Deep Dive",
    title: "Masterclass & Breakouts",
    description: "Intensive learning sessions focused on practical execution strategies.",
    icon: Target,
  },
  {
    time: "14:00 - 15:00",
    label: "Experience",
    title: "Fireside Chat & Storytelling",
    description: "Intimate conversations with builders sharing their authentic journeys.",
    icon: MessageSquare,
  },
  {
    time: "15:00 - 16:00",
    label: "Connections",
    title: "Networking & Close",
    description: "Structured networking to foster partnerships and final closing remarks.",
    icon: Users,
  },
];

export function Schedule() {
  return (
    <section id="schedule" className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Schedule Overview
            </h2>
            <p className="text-slate-600 font-bold uppercase tracking-widest text-sm">
              May 27, 2026 • High-Impact Single Day Programming
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 hidden sm:block" />
          
          <div className="space-y-6">
            {scheduleBlocks.map((block) => (
              <StaggerItem key={block.label}>
                <div className="relative flex gap-4 sm:gap-8 items-start">
                  {/* Icon circle */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm">
                    <block.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  
                  {/* Content card */}
                  <div className="flex-1 bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <span className="text-sm font-medium text-emerald-600">{block.label}</span>
                      <span className="text-sm text-slate-500 font-mono">{block.time}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      {block.title}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {block.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="mt-10 text-center">
            <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">
              Full day intensive programming • All times WAT (UTC+1)
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
