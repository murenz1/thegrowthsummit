"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/shared/FadeIn";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Check, Crown, Loader2 } from "lucide-react";

interface PricingTier {
  name: string;
  price: number;
  description: string;
  icon: React.ElementType;
  badge?: string;
  badgeColor?: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Full Access Pass",
    price: 0,
    description: "Your all-access pass to the Growth Summit experience (In-person & Virtual).",
    icon: Crown,
    badge: "150 spots left",
    badgeColor: "bg-emerald-100 text-emerald-700",
    features: [
      "1-day conference access",
      "All keynotes and panels",
      "Networking lunch",
      "VIP reserved seating",
      "Exclusive networking opportunities",
      "Conference materials & resources",
      "Digital certificate of attendance",
      "Post-event recording access",
    ],
    cta: "Register for Free",
    popular: true,
  },
];

interface RegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
}

function PricingCard({ tier, index, onSelect, spotsLeft }: { tier: PricingTier; index: number; onSelect: (tier: PricingTier) => void, spotsLeft: number }) {
  const Icon = tier.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="relative max-w-md mx-auto w-full"
    >
      <Card
        className="h-full flex flex-col border-emerald-500 shadow-xl bg-white scale-105"
      >
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
              <Icon className="w-6 h-6 text-emerald-600" />
            </div>
            <Badge variant="outline" className={tier.badgeColor}>
              {spotsLeft} spots left
            </Badge>
          </div>
          <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">{tier.name}</h3>
          <p className="text-slate-600 text-sm mt-1">{tier.description}</p>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col">
          <div className="mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black text-emerald-600">
                FREE
              </span>
            </div>
          </div>

          <div className="flex-1">
            <ul className="space-y-4 mb-8">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button
            onClick={() => onSelect(tier)}
            className="w-full mt-auto bg-slate-900 hover:bg-slate-800 text-white py-6 text-lg font-bold uppercase"
            size="lg"
          >
            {tier.cta}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function RegistrationDialog({
  isOpen,
  onClose,
  onSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [formData, setFormData] = useState<RegistrationFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check if email already registered
  const isEmailRegistered = (email: string): boolean => {
    const registeredUsers = JSON.parse(localStorage.getItem("summit_registered_users") || "[]");
    return registeredUsers.some((user: { email: string }) => 
      user.email.toLowerCase() === email.toLowerCase()
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Check for duplicate email
    if (isEmailRegistered(formData.email)) {
      setError("This email has already been registered. Please use a different email.");
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Formspree Integration
      const response = await fetch("https://formspree.io/f/xpqkrloo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Save registered user to localStorage
        const registeredUsers = JSON.parse(localStorage.getItem("summit_registered_users") || "[]");
        registeredUsers.push({
          email: formData.email.toLowerCase(),
          firstName: formData.firstName,
          lastName: formData.lastName,
          registeredAt: new Date().toISOString()
        });
        localStorage.setItem("summit_registered_users", JSON.stringify(registeredUsers));
        
        setIsSuccess(true);
        onSuccess();
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect. Check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
      setTimeout(() => {
        setIsSuccess(false);
        setError(null);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
        });
      }, 300);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] bg-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-900 text-center">
            {isSuccess ? "Registration Submitted!" : "Secure Your Spot"}
          </DialogTitle>
          <DialogDescription className="text-slate-600 text-center">
            {isSuccess 
              ? "We've sent a confirmation email with your event details." 
              : "Fill in your details below to join us at the Growth Summit."
            }
          </DialogDescription>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="py-8 text-center"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-emerald-600" />
              </div>
              <p className="text-slate-600 mb-2">
                Thank you for registering! Check your inbox for your digital pass 
                and event instructions.
              </p>
              <Button onClick={handleClose} className="mt-4 bg-emerald-600 hover:bg-emerald-700">
                Close
              </Button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-4 py-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">First Name *</label>
                  <Input
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">Last Name *</label>
                  <Input
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email *</label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">Phone Number *</label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+234 800 000 000"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">Company / University</label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="University of Lagos"
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm font-medium bg-red-50 p-2 rounded border border-red-100">
                  {error}
                </p>
              )}

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg font-bold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Registering...
                    </>
                  ) : (
                    "Confirm Free Registration"
                  )}
                </Button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}

export function Registration() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [spotsRemaining, setSpotsRemaining] = useState(150);

  // Load spots from localStorage if available
  useEffect(() => {
    const savedSpots = localStorage.getItem("summit_spots");
    if (savedSpots) {
      setSpotsRemaining(parseInt(savedSpots));
    }
  }, []);

  const handleSelectTier = () => {
    setIsDialogOpen(true);
  };

  const updateSpots = () => {
    const newSpots = Math.max(0, spotsRemaining - 1);
    setSpotsRemaining(newSpots);
    localStorage.setItem("summit_spots", newSpots.toString());
  };

  return (
    <section id="register" className="py-24 bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 text-sm font-bold uppercase tracking-wider">
                {spotsRemaining} Spots Remaining
              </span>
            </div>
            
            <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">
              Join the <span className="text-emerald-500">Movement</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              We believe growth should be accessible. This year, registration is free 
              for all qualified attendees. <strong>Only 150 spots available.</strong>
            </p>
          </FadeIn>
        </div>

        <div className="flex justify-center mb-12">
          {pricingTiers.map((tier, index) => (
            <PricingCard 
              key={tier.name} 
              tier={tier} 
              index={index} 
              onSelect={handleSelectTier}
              spotsLeft={spotsRemaining}
            />
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="text-center">
            <p className="text-slate-500 text-xs mt-3 uppercase tracking-widest font-black">
              First come first served • Registration closes May 20
            </p>
          </div>
        </FadeIn>
      </div>

      <RegistrationDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSuccess={updateSpots}
      />
    </section>
  );
}
