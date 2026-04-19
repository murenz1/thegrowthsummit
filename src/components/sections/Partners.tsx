"use client";

import { FadeIn } from "@/components/shared/FadeIn";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Partners() {
  return (
    <section id="partners" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter">
              Partner with <span className="text-emerald-600">Growth</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              We are currently looking for visionary organizations to partner with us 
              in empowering the next generation of leaders.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-12 shadow-xl max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tighter">Become a Sponsor</h3>
              <p className="text-slate-500 uppercase text-xs font-black tracking-widest">
                Enter your email to receive our sponsorship prospectus
              </p>
            </div>
            
            <form 
              action="https://formspree.io/f/xpqkrloo" 
              method="POST"
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            >
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="Enter your professional email"
                  className="w-full h-14 pl-12 pr-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                />
              </div>
              <Button type="submit" className="h-14 px-8 bg-slate-900 hover:bg-slate-800 text-white font-bold uppercase rounded-xl">
                Get Prospectus
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-slate-100 flex justify-center gap-8 opacity-50">
               <div className="bg-slate-50 rounded-xl p-6 italic text-slate-500 text-sm text-center">
                &quot;Investing in leadership today is the best strategy for a 
                prosperous tomorrow. Join us in shaping Africa&apos;s business future.&quot;
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
