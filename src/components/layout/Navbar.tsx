"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Globe, ChevronDown } from "lucide-react";
import { useLanguage, Language } from "@/i18n/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t, dir } = useLanguage();

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
    { id: "ar", label: "العربية" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

          {/* Desktop nav */}
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
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Desktop CTAs */}
            <Link
              href="/contact"
              className="hidden sm:flex items-center gap-2 bg-blue text-white px-5 py-2.5 rounded-full text-[14px] font-bold hover:bg-navy transition-all duration-300 shadow-sm hover:shadow-[0_8px_20px_rgba(53,102,234,0.25)] whitespace-nowrap"
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
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 border border-red-600 text-[13px] font-black text-white hover:bg-red-50/50 hover:text-red-600 hover:border-red-100/50 transition-all duration-300 group whitespace-nowrap"
            >
              <span className="tracking-tight uppercase text-[11px] opacity-80">{t.navbar.sos}</span>
              0710 100 605
            </motion.a>

            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200 flex items-center justify-center bg-white shadow-sm hover:border-blue/30 hover:bg-slate-50 transition-all duration-200 group"
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
                      className={`absolute top-full mt-2 bg-white rounded-2xl shadow-[0_10px_40px_rgba(13,27,75,0.12)] border border-slate-100 p-2 min-w-[140px] z-50 ${dir === "rtl" ? "left-0" : "right-0"}`}
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
                          <span className={l.id === "ar" ? "font-arabic" : "font-sans"}>{l.label}</span>
                          {lang === l.id && <div className="w-1.5 h-1.5 rounded-full bg-blue" />}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-9 h-9 sm:w-11 sm:h-11 flex flex-col items-center justify-center gap-1.5 rounded-full bg-white border border-slate-200 shadow-sm hover:border-blue/30 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-4 sm:w-5 h-0.5 bg-navy rounded-full origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="block w-4 sm:w-5 h-0.5 bg-navy rounded-full"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-4 sm:w-5 h-0.5 bg-navy rounded-full origin-center"
              />
            </button>
          </div>
        </div>
      </header>

      {/* ── Premium Full-Screen Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
              animate={{ clipPath: "circle(160% at calc(100% - 44px) 44px)" }}
              exit={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
              transition={{ type: "spring", damping: 28, stiffness: 180 }}
              className="fixed inset-0 z-50 bg-navy lg:hidden flex flex-col overflow-hidden"
            >
              {/* Decorative blobs */}
              <div className="absolute top-[-20%] right-[-10%] w-[65vw] h-[65vw] bg-blue/20 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-[-10%] left-[-15%] w-[55vw] h-[55vw] bg-blue/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] bg-blue/4 rounded-full blur-[130px] pointer-events-none" />

              {/* Top bar */}
              <div className="flex items-center justify-between px-6 pt-6 pb-4 relative z-10">
                <motion.div
                  initial={{ opacity: 0, x: dir === "rtl" ? 16 : -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.18, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image
                    src="/dental-logo.png"
                    alt="Dr. ADAM HAJJI"
                    width={130}
                    height={40}
                    className="h-7 w-auto object-contain brightness-0 invert opacity-80"
                  />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.18, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center text-white active:scale-90 transition-transform"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </motion.button>
              </div>

              {/* Separator */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.22, duration: 0.5 }}
                className="mx-6 h-px bg-white/10 origin-left"
              />

              {/* Nav items — large editorial */}
              <nav className="flex-1 flex flex-col justify-center px-6 gap-0 relative z-10">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: dir === "rtl" ? 28 : -28 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.22 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={link.href}
                        className={`group flex items-center justify-between py-3.5 border-b transition-all duration-300 ${
                          isActive ? "border-blue/40" : "border-white/8"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        <div className="flex items-baseline gap-4">
                          <span className={`text-[11px] font-black tracking-[0.2em] tabular-nums transition-colors duration-300 ${
                            isActive ? "text-blue" : "text-white/25"
                          }`}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className={`font-heading font-black text-[clamp(26px,7.5vw,38px)] leading-tight tracking-tight transition-all duration-300 ${
                            isActive
                              ? `text-blue ${dir === "rtl" ? "-translate-x-1" : "translate-x-1"}`
                              : "text-white group-active:text-blue"
                          }`}>
                            {link.name}
                          </span>
                        </div>

                        <motion.span
                          animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.5 }}
                          transition={{ duration: 0.25 }}
                          className="w-2 h-2 rounded-full bg-blue shrink-0"
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bottom section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.52, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="px-6 pb-8 pt-4 relative z-10 flex flex-col gap-3"
              >
                {/* Social row */}
                <div className="flex items-center gap-2.5 mb-1">
                  {[
                    { name: "TikTok", href: "https://www.tiktok.com/@adamhajji04", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.98a8.17 8.17 0 0 0 4.78 1.52V7.04a4.85 4.85 0 0 1-1.01-.35z" /></svg> },
                    { name: "Instagram", href: "https://www.instagram.com/dr_adam_hajji", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg> },
                    { name: "Facebook", href: "https://www.facebook.com/p/Dr-ADM-HAJJI-61571341860651/", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-1.11 9-5.41 9-10.95z" /></svg> },
                    { name: "YouTube", href: "https://www.youtube.com/@Mondentiste", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg> },
                  ].map((s, i) => (
                    <motion.a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.56 + i * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="w-9 h-9 rounded-xl bg-white/8 border border-white/12 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/15 active:scale-90 transition-all duration-200"
                    >
                      {s.icon}
                    </motion.a>
                  ))}
                </div>

                {/* CTAs */}
                <a
                  href="tel:0710100605"
                  className="flex items-center justify-center gap-2.5 py-4 rounded-2xl bg-red-600 text-white font-black text-[14px] tracking-tight shadow-[0_8px_32px_rgba(220,38,38,0.28)] active:scale-[0.97] transition-transform"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  {t.navbar.sos} · 0710 100 605
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center py-4 rounded-2xl bg-blue text-white font-bold text-[14px] shadow-[0_8px_32px_rgba(53,102,234,0.28)] active:scale-[0.97] transition-transform"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.navbar.bookVisit}
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
