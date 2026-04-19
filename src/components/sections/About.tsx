"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Compass, Lightbulb, Users } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Leadership Development",
    description:
      "Master the principles of effective leadership. Learn from industry pioneers who have built and scaled successful organizations.",
  },
  {
    icon: TrendingUp,
    title: "Entrepreneurship Strategy",
    description:
      "Gain practical insights into launching, funding, and growing ventures. Discover proven frameworks for business success.",
  },
  {
    icon: Compass,
    title: "Career Clarity",
    description:
      "Define your professional path with precision. Get clarity on your next steps and develop a roadmap for sustained growth.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Future Opportunities",
    description:
      "Explore emerging trends and technologies shaping tomorrow. Position yourself at the forefront of industry transformation.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <FadeIn>
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              About The Summit
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6">
              A Strategic Environment for Growth
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              The Growth Summit brings together ambitious professionals, entrepreneurs, and 
              emerging leaders for two days of intensive learning, strategic networking, and 
              actionable insights.
            </p>
          </FadeIn>
        </div>

        {/* Feature Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <StaggerItem key={feature.title}>
              <Card className="group h-full bg-white border-slate-200 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300">
                        <feature.icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Stats Section */}
        <FadeIn delay={0.4}>
          <div className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Attendees" },
              { value: "20+", label: "Expert Speakers" },
              { value: "15+", label: "Workshops" },
              { value: "2", label: "Days of Impact" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-emerald-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
