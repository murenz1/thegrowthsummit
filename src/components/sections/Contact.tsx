"use client";

import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter">
              Get in <span className="text-emerald-600">Touch</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Have questions about the summit? Our team is here to help you navigate 
              your journey to purposeful growth.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <FadeIn delay={0.1}>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-emerald-600 border border-emerald-100">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg uppercase tracking-tight">Email</h3>
                  <p className="text-slate-500 mb-1 text-sm font-medium">Drop us a line anytime</p>
                  <a href="mailto:murenzidan1@gmail.com" className="text-emerald-600 font-bold hover:underline">
                    contact@thegrowthsummit.net
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-emerald-600 border border-emerald-100">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg uppercase tracking-tight">Location</h3>
                  <p className="text-slate-500 mb-1 text-sm font-medium">Join us in person</p>
                  <p className="text-slate-600 font-medium">
                    University of Lagos,<br />
                    Akoka, Lagos, Nigeria
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />
                <MessageSquare className="w-8 h-8 text-emerald-500 mb-4" />
                <h4 className="text-xl font-bold mb-2">Want to Partner?</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Organizations looking to support the next generation of African 
                  leaders can reach out directly for priority onboarding.
                </p>
                <Button asChild variant="outline" className="border-emerald-500/50 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all w-full uppercase font-black tracking-widest text-[10px]">
                   <a href="#partners">View Prospectus</a>
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/50 p-8 lg:p-10">
                <form 
                  action="https://formspree.io/f/xpqkrloo" 
                  method="POST" 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="h-14 bg-slate-50 border-transparent focus:bg-white focus:border-emerald-500/30 transition-all rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="h-14 bg-slate-50 border-transparent focus:bg-white focus:border-emerald-500/30 transition-all rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      placeholder="How can we help you?"
                      className="h-14 bg-slate-50 border-transparent focus:bg-white focus:border-emerald-500/30 transition-all rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Share your thoughts or questions with us..."
                      className="min-h-[150px] bg-slate-50 border-transparent focus:bg-white focus:border-emerald-500/30 transition-all rounded-xl resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-16 bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-widest text-sm rounded-xl"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
