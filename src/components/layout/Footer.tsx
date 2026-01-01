"use client";

import Link from "next/link";
import { Shield, TrendingUp, MapPin, Calculator } from "lucide-react";

const navLinks = [
  { href: "/quiz", label: "Course Finder", icon: Calculator },
  { href: "/compare", label: "Compare RTOs", icon: Shield },
  { href: "/pricing", label: "Pricing Guide", icon: TrendingUp },
  { href: "/states", label: "State Guides", icon: MapPin },
];

const states = [
  { code: "NSW", href: "/nsw" },
  { code: "VIC", href: "/vic" },
  { code: "QLD", href: "/qld" },
  { code: "WA", href: "/wa" },
  { code: "SA", href: "/sa" },
  { code: "TAS", href: "/tas" },
  { code: "NT", href: "/nt" },
  { code: "ACT", href: "/act" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 overflow-x-hidden">
      {/* Trust Bar */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-brand-500" />
              <span className="text-sm font-semibold text-brand-700">
                Independent Analysis | 100% Transparent | Not an RTO
              </span>
            </div>
            <Link
              href="/methodology"
              className="text-sm text-brand-500 hover:text-brand-700 font-medium"
            >
              See Our Methodology
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-700 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-brand-700">FNS50322</h3>
                <span className="text-xs text-green-600">Australia&apos;s #1 Guide</span>
              </div>
            </div>
            <p className="text-sm text-slate-600">
              Independent comparison platform for the Diploma of Finance and Mortgage Broking Management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-brand-700 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-brand-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-brand-700 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-sm text-slate-600 hover:text-brand-700">Blog</Link></li>
              <li><Link href="/guides" className="text-sm text-slate-600 hover:text-brand-700">Guides</Link></li>
              <li><Link href="/modules" className="text-sm text-slate-600 hover:text-brand-700">FNS50322 Modules</Link></li>
              <li><Link href="/faq" className="text-sm text-slate-600 hover:text-brand-700">FAQ</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-sm font-semibold text-brand-700 mb-4">About</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-slate-600 hover:text-brand-700">About Us</Link></li>
              <li><Link href="/methodology" className="text-sm text-slate-600 hover:text-brand-700">Methodology</Link></li>
              <li><Link href="/privacy-policy" className="text-sm text-slate-600 hover:text-brand-700">Privacy</Link></li>
              <li><Link href="/contact" className="text-sm text-slate-600 hover:text-brand-700">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* States */}
        <div className="bg-slate-50 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-brand-700 mb-4 text-center">FNS50322 by State</h3>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
            {states.map((state) => (
              <Link
                key={state.code}
                href={state.href}
                className="bg-white rounded-lg p-3 text-center border border-slate-200 hover:border-brand-500 hover:shadow-sm transition-all"
              >
                <span className="font-bold text-brand-700">{state.code}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
          <p className="text-xs text-amber-800 text-center">
            <strong>Disclaimer:</strong> This is an independent comparison platform. We are not a Registered Training Organisation (RTO)
            and are not affiliated with ASQA, MFAA, FBAA, or any government body. Information is provided for guidance only.
            Always verify course details and regulatory requirements directly with providers.
          </p>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} FNS50322.com.au - Diploma of Finance Course Comparison</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/privacy-policy" className="hover:text-brand-700">Privacy</Link>
              <Link href="/terms" className="hover:text-brand-700">Terms</Link>
              <Link href="/sitemap.xml" className="hover:text-brand-700">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
