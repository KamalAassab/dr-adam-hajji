"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(13,27,75,0.06)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between gap-8">

          {/* Logo — smaller on mobile */}
          <Link 
            href="/" 
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="relative shrink-0 group" 
            aria-label="Dr. ADAM HAJJI Dental Clinic"
          >
            <Image
              src="/dental-logo.png"
              alt="Dr. ADAM HAJJI"
              width={148}
              height={44}
              className="h-7 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              priority
            />
          </Link>

          {/* Desktop nav — floating frosted pill (top) → flush inline (scrolled) */}
          <nav className="hidden lg:flex items-center">
            <motion.div
              layout
              className={`flex items-center gap-1 transition-all duration-500 ${
                scrolled
                  ? "gap-0.5"
                  : "bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(13,27,75,0.06)] rounded-full px-2 py-1.5"
              }`}
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative flex items-center px-4 py-2 rounded-full text-[14px] font-bold transition-all duration-300 group ${
                      isActive
                        ? "text-navy bg-blue/8"
                        : "text-slate-500 hover:text-navy hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue"
                        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                      />
                    )}
                  </Link>
                );
              })}
            </motion.div>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
          {/* Book CTA — primary action, leftmost */}
            <Link
              href="/contact"
              className="hidden sm:flex items-center gap-2 bg-blue text-white px-5 py-2.5 rounded-full text-[14px] font-bold hover:bg-navy transition-all duration-300 shadow-sm hover:shadow-[0_8px_20px_rgba(53,102,234,0.25)]"
            >
              Book Visit
            </Link>

            {/* SOS / Phone — primary highlighted action */}
            <motion.a
              href="tel:0710100605"
              initial={{ opacity: 0, x: 10 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                boxShadow: ["0 0 0px rgba(239, 68, 68, 0)", "0 0 15px rgba(239, 68, 68, 0.3)", "0 0 0px rgba(239, 68, 68, 0)"] 
              }}
              transition={{ 
                opacity: { duration: 0.5 },
                x: { duration: 0.5 },
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 border border-red-600 text-[13px] font-black text-white hover:bg-red-50/50 hover:text-red-600 hover:border-red-100/50 transition-all duration-300 group"
            >
              <span className="tracking-tight uppercase text-[11px] opacity-80">SOS</span>
              0710 100 605
            </motion.a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-9 h-9 sm:w-11 sm:h-11 flex flex-col items-center justify-center gap-1.5 rounded-full bg-white border border-slate-200 shadow-sm hover:border-blue/30 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-5 h-0.5 bg-navy rounded-full origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="block w-5 h-0.5 bg-navy rounded-full"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-5 h-0.5 bg-navy rounded-full origin-center"
              />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-navy/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Premium Mobile Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[min(88vw,400px)] bg-[#F8FAFF] shadow-[0_0_80px_rgba(13,27,75,0.18)] flex flex-col lg:hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 pt-5 pb-4">
                <Image src="/dental-logo.png" alt="Dr. ADAM HAJJI" width={120} height={36} className="h-7 w-auto object-contain" />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-navy shadow-sm active:scale-95 transition-transform"
                  aria-label="Close menu"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Divider */}
              <div className="mx-5 h-px bg-slate-200 mb-4" />

              {/* Nav Cards */}
              <div className="flex-1 overflow-y-auto px-4 flex flex-col gap-2">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={link.href}
                        className={`relative flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-200 overflow-hidden ${
                          isActive
                            ? "bg-blue text-white shadow-[0_8px_24px_rgba(53,102,234,0.25)]"
                            : "bg-white text-navy border border-slate-100 active:scale-[0.98]"
                        }`}
                      >
                        <span className="font-heading font-black text-[17px] tracking-tight">{link.name}</span>
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black ${
                          isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-400"
                        }`}>{String(i + 1).padStart(2, "0")}</span>
                        {isActive && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="px-4 py-5 flex flex-col gap-3"
              >
                <a
                  href="tel:0710100605"
                  className="flex items-center justify-center gap-2.5 py-4 px-5 rounded-2xl bg-red-600 text-white font-black text-[14px] shadow-[0_8px_24px_rgba(220,38,38,0.25)] active:scale-[0.98] transition-all"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  SOS · 0710 100 605
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center py-3.5 px-5 rounded-2xl bg-navy text-white font-bold text-[14px] active:scale-[0.98] transition-all"
                >
                  Book Appointment
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
