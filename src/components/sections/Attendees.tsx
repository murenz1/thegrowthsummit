"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Rocket, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const attendeeTypes = [
  {
    icon: GraduationCap,
    title: "Students",
    description:
      "Gain early exposure to leadership principles and entrepreneurship fundamentals. Build your network before graduation and gain clarity on your career direction.",
    benefits: [
      "Internship opportunities with summit partners",
      "Mentorship matching program",
      "Student pricing available",
      "Career pathway workshops",
    ],
  },
  {
    icon: Briefcase,
    title: "Graduates",
    description:
      "Navigate the transition from academia to professional life with confidence. Learn from those who have successfully made the journey.",
    benefits: [
      "Job placement support",
      "Resume and interview workshops",
      "Professional networking events",
      "Industry-specific sessions",
    ],
  },
  {
    icon: Rocket,
    title: "Entrepreneurs",
    description:
      "Whether you're pre-launch or scaling, get the strategies and connections needed to accelerate your venture's growth.",
    benefits: [
      "Investor networking opportunities",
      "Scaling strategy workshops",
      "Co-founder matching",
      "Legal and financial advisory sessions",
    ],
  },
  {
    icon: Users,
    title: "Professionals",
    description:
      "Elevate your leadership capabilities and expand your influence. Develop the skills needed for your next career milestone.",
    benefits: [
      "Executive coaching sessions",
      "Leadership development tracks",
      "Cross-industry networking",
      "Professional certification pathways",
    ],
  },
];

export function Attendees() {
  return (
    <section id="attendees" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <FadeIn>
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Who Should Attend
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Built for Growth-Minded Individuals
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Whether you're charting your first career steps or scaling your third venture, 
              The Growth Summit provides the insights, connections, and strategies you need 
              to accelerate your journey.
            </p>
          </FadeIn>
        </div>

        {/* Attendee Types Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {attendeeTypes.map((type) => (
            <StaggerItem key={type.title}>
              <Card className="group h-full bg-slate-50 border-slate-200 hover:border-emerald-500/50 hover:bg-white transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300">
                        <type.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                        {type.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-4">
                        {type.description}
                      </p>
                      <ul className="space-y-2">
                        {type.benefits.map((benefit, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-sm text-slate-600"
                          >
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-slate-600 mb-6">
              Not sure which track is right for you? Contact us for guidance.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold group"
            >
              <Link href="#register">
                Reserve Your Spot
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
