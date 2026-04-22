"use client";

import { useState, useEffect } from "react";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, MessageSquare, Check, AlertCircle } from "lucide-react";

function ContactForm() {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('https://formspree.io/f/xpqkrloo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (!mounted) {
    return (
      <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/50 p-8 lg:p-10">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</div>
              <div className="h-14 bg-slate-50 rounded-xl" />
            </div>
            <div className="space-y-2">
              <div className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</div>
              <div className="h-14 bg-slate-50 rounded-xl" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Subject</div>
            <div className="h-14 bg-slate-50 rounded-xl" />
          </div>
          <div className="space-y-2">
            <div className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Your Message</div>
            <div className="min-h-[150px] bg-slate-50 rounded-xl" />
          </div>
          <div className="w-full h-16 bg-emerald-600 rounded-xl" />
        </div>
      </div>
    );
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/50 p-8 lg:p-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
            <Check className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-emerald-800 uppercase tracking-tight">Message Sent!</h3>
          <p className="text-emerald-700 max-w-md">Thank you for reaching out. Our team will get back to you shortly.</p>
          <Button onClick={() => setStatus('idle')} variant="outline" className="border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white mt-4">
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/50 p-8 lg:p-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-red-800 uppercase tracking-tight">Oops!</h3>
          <p className="text-red-700 max-w-md">Something went wrong sending your message. Please try again.</p>
          <Button onClick={() => setStatus('idle')} variant="outline" className="border-red-500 text-red-600 hover:bg-red-500 hover:text-white mt-4">
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/50 p-8 lg:p-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={status === 'submitting'}
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
              value={formData.email}
              onChange={handleChange}
              required
              disabled={status === 'submitting'}
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
            value={formData.subject}
            onChange={handleChange}
            required
            disabled={status === 'submitting'}
            placeholder="How can we help you?"
            className="h-14 bg-slate-50 border-transparent focus:bg-white focus:border-emerald-500/30 transition-all rounded-xl"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={status === 'submitting'}
            placeholder="Share your thoughts or questions with us..."
            className="min-h-[150px] bg-slate-50 border-transparent focus:bg-white focus:border-emerald-500/30 transition-all rounded-xl resize-none"
          />
        </div>

        <Button 
          type="submit" 
          disabled={status === 'submitting'}
          className="w-full h-16 bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-widest text-sm rounded-xl disabled:opacity-50"
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
}

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
                  <a href="mailto:info@thegrowthssummit.com" className="text-emerald-600 font-bold hover:underline">
                    info.thegrowthssummit.com
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
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
