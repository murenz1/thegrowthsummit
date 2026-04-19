"use client";

import { useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Linkedin, Twitter, User } from "lucide-react";

interface Speaker {
  id: number;
  name: string;
  title: string;
  company: string;
  bio: string;
  topic: string;
  image: string;
  imagePosition?: string; // Optional custom positioning
  linkedin?: string;
  twitter?: string;
}

const speakers: Speaker[] = [
  {
    id: 1,
    name: "Okunato Daniel",
    title: "Real Estate Consultant | Sales Executive",
    company: "GoRealty & Homes",
    bio: "Okunato Eniola Daniel is a real estate consultant and sales executive at GoRealty & Homes, where he drives strategic property investments and works with clients across Africa’s evolving real estate landscape. Beyond business, he is a youth development advocate and the convener of 25 Under 25, an initiative targeted to gather greatminds between 18 to 25 years. People who are intentional about their growth, who wants to lead passionately and make impacts within and outside their environment. He is also the convener of THE INNER ROOM, a platform centred on powerful storytelling and transformative conversations. Daniel is known for building platforms, fostering meaningful partnerships, and helping young people move from confusion to clarity and from potential to impact.",
    topic: "Strategic Property Investments",
    image: "/Okunato Daniel.jpeg",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Chika Ibobo",
    title: "Founder & CEO",
    company: "CI Luxe Homes | Cheey Signatures",
    bio: "Chika Ibobo is a visionary entrepreneur, real estate strategist, and community development leader whose work seamlessly blends enterprise, leadership, and impact. She is the Founder of Cheey Signatures, a thriving beauty and hair brand built on the belief that confidence is not optional for women; it is essential. Through quality, stylish, and accessible hair solutions, she has created a brand that empowers women to show up boldly in every space they occupy. What began as a passion has grown into a respected enterprise driven by excellence, consistency, and a deep understanding of client experience. She is also the Founder and Chief Executive Officer of CI Luxe Homes, a premium real estate brand redefining modern luxury through integrity, strategic investment insight, and clientcentered service. Under her leadership, the company has built a reputation for delivering refined property solutions anchored on trust, long-term value, and sustainable growth. Her influence in the real estate sector reflects her strength in structure-building, negotiation, and strategic positioning. Chika is a multiple award-winning business leader, recognized for excellence, loyalty, and outstanding contributions to enterprise and community development. Her recognitions reflect not just performance, but consistency, resilience, and values-driven leadership. With over a decade of active service in Junior Chamber International (JCI), she has held several strategic leadership roles at both local and national levels. She served as the 2025 National Director of Communications, JCI Nigeria, leading national storytelling and strategic brand visibility. In 2026, she’s serving as Chairperson, Alumni – JCI Nigeria, where she is focused on strengthening alumni engagement, building sustainable institutional partnerships, and fostering intergenerational leadership continuity. Her service extends to Rotary International, where she serves as Assistant Club Secretary and Secretary Service Chair of the Rotary Club of Akowonjo, contributing to impactful initiatives in youth development, education, and community empowerment. Chika’s leadership philosophy is anchored on vision, structure, and intentional growth. She believes that true success is measured not only by what we build, but by the people we empower and the systems we leave behind. A woman of faith and purpose, she continues to build institutions, inspire leaders, and redefine what it means to lead with excellence and heart.",
    topic: "Enterprise & Impact",
    image: "/chika ibobo.jpeg",
    imagePosition: "object-[center_top]", // Fix cut-off by moving image down relative to top
    linkedin: "#",
  },
  {
    id: 3,
    name: "Megwara Favour",
    title: "Photojournalist | Media Director",
    company: "LinkedIn Local | Evolv Africa",
    bio: "Megwara Favour is a 22-year-old photojournalist accredited by APJD and a Political Science student at the University of Lagos, known for his passion for visual storytelling and music. He is a Lagos Youth Ambassador (Ibile Youth) whose strong faith in God shapes both his personal and professional journey. A serial creative, he has been featured on platforms such as 54ruum, The Guardian Newspaper, BusinessDay Newspaper, and Notesphere Blog, among others. He serves as a Director at CYDF and Evolv Africa, and as Media Director for LinkedIn Local. As a TEDx speaker and social media influencer, Favour has worked with top brands and individuals across politics, corporate spaces, and the entertainment industry.",
    topic: "Visual Storytelling",
    image: "/Megwara Favour.jpeg",
    imagePosition: "object-[center_top]", // Fix cut-off
    linkedin: "#",
  },
  {
    id: 4,
    name: "Lateef Adebayo",
    title: "Investment Advisor | Financial Analyst",
    company: "Meristem Nigeria",
    bio: "Lateef Adebayo is an investment professional and financial analyst driven by a passion for growth, value creation, and helping individuals unlock their financial potential. As an Investment Advisor at Meristem Nigeria, he provides strategic guidance that empowers clients to make informed investment decisions and build sustainable wealth. With a background that spans platform management, trading operations, and financial advisory, Lateef embodies the journey of continuous learning and becoming—leveraging data, discipline, and market insight to navigate complex financial landscapes. A graduate of Pan-Atlantic University and a certified Associate Chartered Stockbroker (ACS) and Authorized Dealing Clerk, he represents the new generation of professionals transforming knowledge into impact.",
    topic: "Financial Potential",
    image: "/Lateef Adebayo.jpeg",
    linkedin: "#",
  },
];

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  const [imgError, setImgError] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group cursor-pointer bg-white border-slate-200 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg overflow-hidden">
          <CardContent className="p-0">
            <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
              {!imgError ? (
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className={`object-cover transition-transform duration-500 group-hover:scale-105 ${speaker.imagePosition || "object-center"}`}
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400">
                  <div className="text-center">
                    <User className="w-12 h-12 mx-auto mb-2 opacity-20" />
                    <span className="text-xl font-bold">
                      {speaker.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-xs font-medium px-2 py-1 bg-emerald-500 rounded">
                  {speaker.topic}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors uppercase tracking-tight">
                {speaker.name}
              </h3>
              <p className="text-slate-600 text-xs mt-1 font-medium line-clamp-1">
                {speaker.title}
              </p>
              <p className="text-emerald-600 text-[10px] font-bold mt-0.5">
                {speaker.company}
              </p>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className="sm:max-w-xl bg-white p-0 overflow-hidden border-none shadow-2xl">
        <div className="relative h-64 bg-slate-900">
           {!imgError ? (
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className={`object-cover opacity-60 ${speaker.imagePosition || "object-center"}`}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-800">
                   <span className="text-4xl font-bold text-slate-600">
                    {speaker.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
              )}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
        </div>
        
        <div className="px-6 pb-8 -mt-20 relative z-10">
          <div className="bg-white rounded-xl p-8 shadow-xl border border-slate-100 max-h-[60vh] overflow-y-auto custom-scrollbar">
            <div className="flex justify-between items-start mb-6">
              <div>
                <DialogTitle className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
                  {speaker.name}
                </DialogTitle>
                <DialogDescription className="text-emerald-600 font-bold ml-1 text-sm mt-1 uppercase">
                  {speaker.title}
                </DialogDescription>
                <div className="text-slate-500 text-xs font-medium ml-1">
                  {speaker.company}
                </div>
              </div>
              <div className="flex gap-2">
                {speaker.linkedin && (
                  <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all">
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 text-[11px] font-black uppercase rounded-full tracking-widest border border-emerald-100">
                Keynote: {speaker.topic}
              </div>
              <div className="text-slate-700 text-sm leading-relaxed antialiased space-y-4">
                 {speaker.bio}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function Speakers() {
  return (
    <section id="speakers" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter">
              The Growth <span className="text-emerald-600">Voices</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              An elite lineup of visionaries, builders, and strategists ready to 
              show you the roadmap to your next level.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker) => (
            <StaggerItem key={speaker.id}>
              <SpeakerCard speaker={speaker} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
