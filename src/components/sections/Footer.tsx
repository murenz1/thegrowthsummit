"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <Link href="/" className="text-lg font-bold text-white">
              The Growth Summit
            </Link>
            <p className="text-slate-500 text-sm mt-1">
              May 23, 2026 • Lagos, Nigeria
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="mailto:info@thegrowthssummit.com" className="flex items-center gap-1 hover:text-emerald-400 transition-colors">
              <Mail className="w-4 h-4" />
              <span>info.thegrowthssummit.com</span>
            </a>
          </div>

          <p className="text-slate-600 text-sm">
            © 2026 The Growth Summit
          </p>
        </div>
      </div>
    </footer>
  );
}
