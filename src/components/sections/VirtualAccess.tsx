"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Video, 
  RotateCcw, 
  MessageSquare, 
  Users, 
  Lock, 
  Globe,
  Laptop,
  Headphones,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const virtualFeatures = [
  {
    icon: Video,
    title: "Live Stream Access",
    description: "Watch all main stage sessions in real-time with HD streaming. Multiple camera angles and professional production quality.",
    highlight: true,
  },
  {
    icon: RotateCcw,
    title: "Replay On-Demand",
    description: "Can't watch live? Access recordings of all sessions for 30 days after the event. Watch at your convenience.",
    highlight: false,
  },
  {
    icon: MessageSquare,
    title: "Virtual Networking",
    description: "Connect with other virtual attendees through structured networking sessions and discussion rooms.",
    highlight: true,
  },
  {
    icon: Users,
    title: "Interactive Q&A",
    description: "Submit questions during live sessions and participate in polls. Your voice matters, even from a distance.",
    highlight: false,
  },
  {
    icon: Laptop,
    title: "Digital Resources",
    description: "Download presentation slides, speaker materials, and exclusive resources available only to attendees.",
    highlight: false,
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "Dedicated support team available throughout the event to ensure seamless streaming experience.",
    highlight: false,
  },
];

const accessSteps = [
  {
    step: "01",
    title: "Register",
    description: "Choose Virtual Only or Hybrid access during registration.",
  },
  {
    step: "02",
    title: "Receive Access",
    description: "Get login credentials and platform link via email 48 hours before the event.",
  },
  {
    step: "03",
    title: "Join Live",
    description: "Log in on event days and enjoy full access to all virtual features.",
  },
];

export function VirtualAccess() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <FadeIn>
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Virtual Experience
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Attend From Anywhere
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Can&apos;t make it to Nairobi? Experience The Growth Summit virtually with 
              professional live streaming, interactive networking, and full replay access.
            </p>
          </FadeIn>
        </div>

        {/* Feature Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {virtualFeatures.map((feature) => (
            <StaggerItem key={feature.title}>
              <Card className={`h-full ${feature.highlight ? 'border-emerald-200 bg-emerald-50/50' : 'border-slate-200 bg-slate-50'} hover:border-emerald-500/50 hover:bg-white transition-all duration-300 hover:shadow-lg`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${feature.highlight ? 'bg-emerald-100' : 'bg-white'}`}>
                      <feature.icon className={`w-6 h-6 ${feature.highlight ? 'text-emerald-600' : 'text-slate-600'}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* How It Works */}
        <FadeIn delay={0.3}>
          <div className="bg-slate-900 rounded-2xl p-8 lg:p-12 mb-16">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-white mb-2">
                How Virtual Access Works
              </h3>
              <p className="text-slate-400">
                Simple, seamless, and professional
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {accessSteps.map((step, index) => (
                <div key={step.step} className="text-center">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-emerald-400">
                      {step.step}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-slate-400 text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* CTA Section */}
        <FadeIn delay={0.4}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-emerald-50 to-white border-emerald-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Global Accessibility
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Join from anywhere in the world. Our platform supports attendees 
                      across all time zones with session recordings available for 30 days.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <Globe className="w-4 h-4" />
                        Available Worldwide
                      </span>
                      <span className="flex items-center gap-1">
                        <Lock className="w-4 h-4" />
                        Secure Platform
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 border-slate-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center">
                    <Lock className="w-6 h-6 text-slate-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Member Portal (Coming Soon)
                    </h3>
                    <p className="text-slate-600 mb-4">
                      We&apos;re building an exclusive member portal for ongoing access 
                      to resources, community discussions, and year-round networking.
                    </p>
                    <Badge variant="outline" className="bg-amber-100 text-amber-700 border-amber-200">
                      Beta Launch Q2 2026
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </FadeIn>

        {/* Final CTA */}
        <FadeIn delay={0.5}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Join Virtually?
            </h3>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              Secure your virtual pass today and be part of The Growth Summit from anywhere 
              in the world.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold group"
            >
              <Link href="#register">
                Get Virtual Access
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
