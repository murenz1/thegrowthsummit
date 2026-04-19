"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  type: "attendee" | "speaker" | "partner";
}

const testimonials: Testimonial[] = [
  {
    quote: "The Growth Summit completely transformed my approach to leadership. The actionable strategies I learned helped me secure a promotion within three months of attending.",
    author: "Grace Muthoni",
    role: "Product Manager",
    company: "Safaricom",
    type: "attendee",
  },
  {
    quote: "As a founder, I found the networking invaluable. I connected with my current lead investor during one of the networking sessions. This event pays for itself.",
    author: "Brian Ochieng",
    role: "Founder & CEO",
    company: "LipaLater",
    type: "attendee",
  },
  {
    quote: "The quality of speakers and attendees at The Growth Summit is unmatched. It's become a must-attend event for anyone serious about professional growth in Africa.",
    author: "Dr. Njoroge Kamau",
    role: "Keynote Speaker",
    company: "Former Central Bank Governor",
    type: "speaker",
  },
  {
    quote: "We've sponsored The Growth Summit for three years because it consistently delivers value. The ROI from connecting with emerging talent has been exceptional.",
    author: "Susan Wanjiku",
    role: "Head of Talent",
    company: "Equity Bank",
    type: "partner",
  },
  {
    quote: "The workshop format is excellent. Instead of just listening, you're actually working through problems with experts. That's where the real learning happens.",
    author: "Peter Okello",
    role: "Operations Director",
    company: "Twiga Foods",
    type: "attendee",
  },
  {
    quote: "I attended virtually and still felt fully engaged. The platform is seamless, and the virtual networking was surprisingly effective. Well worth the investment.",
    author: "Aisha Mohammed",
    role: "Strategy Consultant",
    company: "McKinsey & Company",
    type: "attendee",
  },
];

const typeLabels = {
  attendee: "Past Attendee",
  speaker: "Past Speaker",
  partner: "Partner Organization",
};

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full bg-white border-slate-200 hover:border-emerald-500/30 transition-all duration-300">
      <CardContent className="p-6 lg:p-8">
        <Quote className="w-8 h-8 text-emerald-200 mb-4" />
        
        <p className="text-slate-700 leading-relaxed mb-6">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
            <span className="text-lg font-semibold text-slate-600">
              {testimonial.author.split(" ").map(n => n[0]).join("")}
            </span>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">
              {testimonial.author}
            </h4>
            <p className="text-sm text-slate-500">
              {testimonial.role}, {testimonial.company}
            </p>
            <span className="text-xs text-emerald-600 font-medium">
              {typeLabels[testimonial.type]}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <FadeIn>
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6">
              What Attendees Say
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Hear from past attendees, speakers, and partners about their experience 
              at The Growth Summit and the impact it had on their professional journey.
            </p>
          </FadeIn>
        </div>

        {/* Testimonials Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <TestimonialCard testimonial={testimonial} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Stats Bar */}
        <FadeIn delay={0.4}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-white rounded-xl border border-slate-200">
            {[
              { value: "95%", label: "Would Recommend" },
              { value: "4.8/5", label: "Average Rating" },
              { value: "85%", label: "Return Attendees" },
              { value: "60+", label: "Countries Represented" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
