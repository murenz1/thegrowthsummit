"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#speakers", label: "Speakers" },
  { href: "#schedule", label: "Schedule" },
  { href: "#partners", label: "Sponsors" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl lg:text-2xl font-black tracking-tight text-slate-900">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">GROWTH</span>
              <span className="text-slate-800">SUMMIT</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              asChild
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold"
            >
              <Link href="#register">Register Now</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-slate-900" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4 border-b border-slate-200">
                  <span className="text-lg font-black tracking-tight">
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">GROWTH</span>
                    <span className="text-slate-800">SUMMIT</span>
                  </span>
                </div>
                <nav className="flex flex-col space-y-4 py-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-medium text-slate-700 hover:text-emerald-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto pb-6">
                  <Button
                    asChild
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold"
                  >
                    <Link href="#register" onClick={() => setIsOpen(false)}>
                      Register Now
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
