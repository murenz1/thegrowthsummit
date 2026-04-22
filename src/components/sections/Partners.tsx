"use client";

import { useState, useEffect } from "react";
import { FadeIn } from "@/components/shared/FadeIn";
import { Mail, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

function ProspectusForm() {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/xpqkrloo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (!mounted) {
    return (
      <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
        <div className="flex-1 relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <div className="w-full h-14 pl-12 pr-4 rounded-xl border border-slate-200 bg-slate-50" />
        </div>
        <div className="h-14 px-8 bg-slate-900 rounded-xl" />
      </div>
    );
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 max-w-xl mx-auto p-6 bg-emerald-50 rounded-xl border border-emerald-200">
        <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
          <Check className="w-6 h-6 text-white" />
        </div>
        <h4 className="text-xl font-bold text-emerald-800 uppercase tracking-tight">Success!</h4>
        <p className="text-emerald-700 text-center">Thank you! Check your email for the sponsorship prospectus.</p>
        <Button onClick={() => setStatus('idle')} variant="outline" className="border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white">
          Send Another
        </Button>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="flex flex-col items-center gap-4 max-w-xl mx-auto p-6 bg-red-50 rounded-xl border border-red-200">
        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
          <AlertCircle className="w-6 h-6 text-white" />
        </div>
        <h4 className="text-xl font-bold text-red-800 uppercase tracking-tight">Oops!</h4>
        <p className="text-red-700 text-center">Something went wrong. Please try again.</p>
        <Button onClick={() => setStatus('idle')} variant="outline" className="border-red-500 text-red-600 hover:bg-red-500 hover:text-white">
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
    >
      <div className="flex-1 relative">
        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === 'submitting'}
          placeholder="Enter your professional email"
          className="w-full h-14 pl-12 pr-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all disabled:opacity-50"
        />
      </div>
      <Button type="submit" disabled={status === 'submitting'} className="h-14 px-8 bg-slate-900 hover:bg-slate-800 text-white font-bold uppercase rounded-xl disabled:opacity-50">
        {status === 'submitting' ? 'Sending...' : 'Get Prospectus'}
      </Button>
    </form>
  );
}

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
            
            <ProspectusForm />

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
