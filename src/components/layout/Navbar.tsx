"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ArrowRight, Calendar, Phone, HeartPulse } from "lucide-react";
import { useLanguage, Language } from "@/i18n/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { name: t.navbar.home, href: "/" },
    { name: t.navbar.services, href: "/services" },
    { name: t.navbar.gallery, href: "/gallery" },
    { name: t.navbar.about, href: "/about" },
    { name: t.navbar.contact, href: "/contact" },
  ];

  const langs: { id: Language; label: string }[] = [
    { id: "fr", label: "Français" },
    { id: "en", label: "English" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ── DESKTOP HEADER (Hidden on Mobile) ── */}
      <header
        className={`hidden lg:block fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          scrolled || (pathname.startsWith("/services/") && pathname !== "/services")
            ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(13,27,75,0.06)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-5 sm:px-6 flex items-center justify-between gap-4 sm:gap-8">
          {/* Logo */}
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

          {/* Desktop Nav Links */}
          <nav className="flex items-center">
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
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-blue text-white px-5 py-2.5 rounded-full text-[14px] font-bold hover:bg-navy transition-all duration-300 shadow-sm hover:shadow-[0_8px_20px_rgba(53,102,234,0.25)] whitespace-nowrap"
            >
              {t.navbar.bookVisit}
            </Link>

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
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 border border-red-600 text-[13px] font-black text-white hover:bg-red-50/50 hover:text-red-600 hover:border-red-100/50 transition-all duration-300 group whitespace-nowrap"
            >
              <span className="tracking-tight uppercase text-[11px] opacity-80">{t.navbar.sos}</span>
              0710 100 605
            </motion.a>

            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center bg-white shadow-sm hover:border-blue/30 hover:bg-slate-50 transition-all duration-200 group"
                aria-label="Change language"
              >
                <Globe size={16} className="text-navy group-hover:text-blue transition-colors" />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 z-40"
                      onClick={() => setLangOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full mt-2 right-0 bg-white rounded-2xl shadow-[0_10px_40px_rgba(13,27,75,0.12)] border border-slate-100 p-2 min-w-[140px] z-50"
                    >
                      {langs.map((l) => (
                        <button
                          key={l.id}
                          onClick={() => {
                            setLang(l.id);
                            setLangOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-[14px] transition-all duration-200 ${
                            lang === l.id
                              ? "bg-blue/10 text-blue font-black"
                              : "text-slate-600 hover:bg-slate-50 font-bold hover:text-navy"
                          }`}
                        >
                          <span>{l.label}</span>
                          {lang === l.id && <div className="w-1.5 h-1.5 rounded-full bg-blue" />}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </header>

      {/* ── MOBILE NAVBAR (Unified Expanding Island) ── */}
      {/* Background Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-navy/20 backdrop-blur-sm z-[55] lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <header
        className={`lg:hidden fixed left-4 right-4 z-[60] top-4 rounded-[24px] sm:rounded-[28px] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled || menuOpen || (pathname.startsWith("/services/") && pathname !== "/services")
            ? "bg-white/95 backdrop-blur-2xl shadow-[0_12px_40px_rgba(13,27,75,0.12)] border border-slate-100"
            : "bg-transparent border border-transparent"
        }`}
        style={{
          maxHeight: menuOpen ? "80vh" : "64px",
        }}
      >
        {/* Top Bar (Always Visible) */}
        <div className="flex items-center justify-between h-[64px] px-5 sm:px-6 relative z-10 bg-inherit">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="relative shrink-0 group"
            aria-label="Dr. ADAM HAJJI Dental Clinic"
          >
            <Image
              src="/dental-logo.png"
              alt="Dr. ADAM HAJJI"
              width={130}
              height={36}
              className={`h-6 sm:h-7 w-auto object-contain transition-all duration-500 ${scrolled || menuOpen ? 'brightness-100' : ''}`}
            />
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative rounded-full hover:bg-slate-50 transition-colors"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7, backgroundColor: "#0D1B4B" } : { rotate: 0, y: 0, backgroundColor: "#0D1B4B" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="block w-5 h-[2px] rounded-full origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-[2px] bg-navy rounded-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7, backgroundColor: "#0D1B4B" } : { rotate: 0, y: 0, backgroundColor: "#0D1B4B" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="block w-5 h-[2px] rounded-full origin-center"
            />
          </button>
        </div>

        {/* Expanding Content */}
        <div 
          className={`transition-opacity duration-300 ease-out ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <div className="px-5 sm:px-6 pb-6 pt-2 flex flex-col overflow-y-auto" style={{ maxHeight: "calc(80vh - 64px)" }}>
            
            {/* Nav Links */}
            <nav className="flex flex-col gap-1 mb-6">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`group flex items-center justify-between p-3.5 rounded-2xl transition-all duration-300 ${
                      isActive ? "bg-blue/5 border border-blue/10 shadow-sm" : "hover:bg-slate-50 border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-[10px] font-black tracking-widest uppercase transition-colors w-5 ${isActive ? "text-blue" : "text-slate-300"}`}>
                        0{i + 1}
                      </span>
                      <span className={`font-heading text-[18px] sm:text-[20px] font-black leading-none tracking-tight transition-colors ${isActive ? "text-blue" : "text-navy"}`}>
                        {link.name}
                      </span>
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? "text-blue" : "text-slate-300 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`} />
                  </Link>
                );
              })}
            </nav>

            <div className="w-full h-px bg-slate-100 mb-6" />

            {/* Bottom Actions */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="bg-blue/5 p-4 rounded-2xl border border-blue/10 flex flex-col items-center justify-center gap-2 active:scale-95 transition-all group hover:bg-blue hover:text-white"
              >
                <Calendar className="w-5 h-5 text-blue group-hover:text-white transition-colors" />
                <span className="font-bold text-[13px] text-navy group-hover:text-white transition-colors">{t.navbar.bookVisit}</span>
              </Link>

              <a
                href="tel:0710100605"
                className="bg-red-50 p-4 rounded-2xl border border-red-100 flex flex-col items-center justify-center gap-2 active:scale-95 transition-transform group"
              >
                <HeartPulse className="w-5 h-5 text-red-600 animate-pulse" />
                <span className="font-bold text-[13px] text-red-600 tracking-tight">{t.navbar.sos}</span>
              </a>
            </div>

            {/* Segmented Language Switcher */}
            <div className="bg-slate-100/80 p-1.5 rounded-xl flex items-center shadow-inner">
              {langs.map((l) => (
                <button
                  key={l.id}
                  onClick={() => {
                    setLang(l.id);
                    setMenuOpen(false);
                  }}
                  className={`flex-1 py-2.5 text-[12px] font-black rounded-lg transition-all duration-300 ${
                    lang === l.id
                      ? "bg-white text-navy shadow-sm border border-slate-200/50"
                      : "text-slate-500 hover:text-navy"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

          </div>
        </div>
      </header>
    </>
  );
}
