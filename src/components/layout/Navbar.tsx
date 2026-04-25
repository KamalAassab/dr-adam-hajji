"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, Phone } from "lucide-react";

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

          {/* Logo */}
          <Link href="/" className="relative shrink-0 group" aria-label="Dr. ADAM HAJJI Dental Clinic">
            <div className={`transition-all duration-500 ${scrolled ? "opacity-100" : "opacity-100"}`}>
              <Image
                src="/dental-logo.png"
                alt="Dr. ADAM HAJJI"
                width={148}
                height={44}
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                priority
              />
            </div>
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

            {/* Phone — secondary, text style */}
            <a
              href="tel:0710100605"
              className="hidden md:flex items-center gap-1.5 text-[13px] font-bold text-slate-500 hover:text-navy transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 1.25h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.21a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z"/>
              </svg>
              0710 100 605
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-full bg-white border border-slate-200 shadow-sm hover:border-blue/30 transition-all duration-300"
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

            {/* Drawer panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[min(85vw,380px)] bg-white shadow-[0_0_60px_rgba(13,27,75,0.15)] flex flex-col lg:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
                <span className="font-heading font-black text-navy text-[18px]">Navigation</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-navy hover:bg-blue hover:text-white transition-all duration-200"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex-1 overflow-y-auto px-5 py-8 flex flex-col gap-1">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between px-5 py-4 rounded-2xl font-heading font-black text-[18px] transition-all duration-200 ${
                          isActive
                            ? "bg-blue text-white"
                            : "text-navy hover:bg-[#F8FAFF]"
                        }`}
                      >
                        <span>{link.name}</span>
                        {isActive && <span className="w-2 h-2 rounded-full bg-blue" />}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Drawer CTA footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="px-5 py-6 border-t border-slate-100 flex flex-col gap-3"
              >
                <a
                  href="tel:0710100605"
                  className="flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-2xl bg-red-50 border border-red-100 text-red-600 font-bold text-[15px]"
                >
                  <Phone size={17} className="animate-pulse" />
                  SOS: 0710 100 605
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center py-3.5 px-5 rounded-2xl bg-blue text-white font-bold text-[15px] hover:bg-navy transition-all duration-200 shadow-sm"
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
