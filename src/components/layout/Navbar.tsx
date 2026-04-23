"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, PhoneCall, HeartPulse } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Our Doctor", href: "/team" },
    { name: "Gallery", href: "/gallery" },
    { name: "About Clinic", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(13,27,75,0.06)] border-b border-white/40 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between gap-6 transition-all duration-500">
        <Link href="/" className="inline-flex items-center gap-2.5 font-heading text-[24px] font-extrabold text-navy group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue to-blue-light shadow-lg transition-transform duration-300 group-hover:scale-110">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="z-10">
              <path d="M16 4C12.5 4 9 7 9 11c0 2.5 1 4.5 2 6.5 1 2 2 4 2 6.5 0 1.5.5 2 1.5 2s1.5-1 2-3c.5 2 1 3 2 3s1.5-.5 1.5-2c0-2.5 1-4.5 2-6.5 1-2 2-4 2-6.5 0-4-3.5-7-7-7z" fill="white" />
              <path d="M13 10c0-1.6 1.3-3 3-3s3 1.4 3 3" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 bg-white/20 rounded-xl blur-md group-hover:opacity-100 opacity-0 transition-opacity" />
          </div>
          <span className="tracking-tight relative">
            Dr.ADAM HAJJI
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue transition-all duration-300 group-hover:w-full" />
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center justify-center gap-1.5 p-1.5 bg-white/50 backdrop-blur-md rounded-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.02)]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-[15px] font-semibold text-slate-600 px-4 py-2 rounded-xl transition-all hover:text-blue flex items-center gap-1 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1">
                {link.name}
              </span>
              <span className="absolute inset-0 bg-blue/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Emergency SOS Button */}
          <Link
            href="tel:0710100605"
            className="hidden md:flex items-center justify-center gap-2 bg-[#fee2e2] text-[#ef4444] px-5 py-3 rounded-2xl font-bold text-[14px] transition-all border-2 border-[#fecaca] hover:bg-[#fecaca] hover:-translate-y-0.5 shadow-sm group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:animate-[shine_1.5s_ease-out_infinite]" />
            <div className="relative flex items-center justify-center">
              <HeartPulse className="w-4 h-4 mr-2 animate-pulse" />
              <span className="tracking-wide">SOS 0710100605</span>
            </div>
          </Link>

          <Link
            href="/contact"
            className="hidden sm:flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-2xl font-bold text-[15px] transition-all duration-300 hover:bg-blue hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(74,123,247,0.3)] group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:animate-[shine_1.5s_ease-out_infinite]" />
            Book Visit
          </Link>

          <button
            className="xl:hidden w-12 h-12 rounded-2xl bg-white border border-slate-100 text-navy flex items-center justify-center shadow-sm active:scale-95 transition-transform"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-red-500" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="xl:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-2xl"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-3">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between text-[18px] font-semibold text-slate-700 py-3 px-4 rounded-xl hover:bg-blue-pale hover:text-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 flex flex-col gap-3"
              >
                <Link
                  href="tel:0710100605"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-[#fee2e2] text-[#ef4444] px-6 py-4 rounded-xl font-bold text-[16px] w-full"
                >
                  <HeartPulse className="w-5 h-5 animate-pulse" />
                  Emergency SOS: 0710100605
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center bg-blue text-white px-6 py-4 rounded-xl font-bold text-[16px] w-full shadow-[0_8px_25px_rgba(74,123,247,0.3)]"
                >
                  Book Appointment
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
