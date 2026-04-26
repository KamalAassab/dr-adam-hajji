"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp, MapPin, Phone, Mail, ChevronRight, Home, Stethoscope, Image as ImageIcon, Info, MessageSquare, ShieldCheck, Sparkles, Baby, Activity, Shield, LayoutGrid } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const socialIcons = [
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@adamhajji04",
    bgColor: "bg-[#000000]",
    glowColor: "shadow-[#25F4EE]/20",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    )
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/p/Dr-ADM-HAJJI-61571341860651/",
    bgColor: "bg-[#1877F2]",
    glowColor: "shadow-[#1877F2]/20",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-1.11 9-5.41 9-10.95z" />
      </svg>
    )
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Mondentiste",
    bgColor: "bg-[#FF0000]",
    glowColor: "shadow-[#FF0000]/20",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    )
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/dr_adam_hajji",
    bgColor: "bg-gradient-to-tr from-[#F58529] via-[#D12D73] to-[#8134AF]",
    glowColor: "shadow-[#D12D73]/20",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    )
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/212710100605",
    bgColor: "bg-[#25D366]",
    glowColor: "shadow-[#25D366]/20",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    )
  },
];

export default function Footer() {
  const { t, dir } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-footer-bg text-white/70">
      <div className="container mx-auto px-5 sm:px-6 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-8 lg:gap-12">
        {/* Brand */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <button
            onClick={scrollToTop}
            className="mb-6 group"
            aria-label="Scroll to top"
          >
            <Image 
              src="/dental-logo.png" 
              alt="Dr. ADAM HAJJI" 
              width={180} 
              height={54} 
              className="h-10 sm:h-12 w-auto object-contain brightness-0 invert opacity-90 transition-all group-hover:opacity-100 group-hover:scale-[1.02]" 
            />
          </button>
          <p className={`text-[13px] sm:text-[14px] leading-relaxed mb-6 max-w-sm text-white/60 text-center lg:text-left ${dir === "rtl" ? "lg:text-right" : ""}`}>
            {t.footer.brandText}
          </p>
          <div className="flex gap-4 justify-center lg:justify-start pt-6">
            {socialIcons.map((icon, i) => (
              <a
                key={i}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon.name}
                className="group relative w-11 h-11 flex items-center justify-center transition-all duration-300"
              >
                {/* Static Glow Shadow */}
                <div className={`absolute inset-0 ${icon.glowColor} blur-xl opacity-40`} />
                
                {/* Primary Card */}
                <div className={`relative w-full h-full rounded-2xl ${icon.bgColor} flex items-center justify-center text-white shadow-lg`}>
                   {icon.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Links — Quick Links + Our Services side-by-side on mobile */}
        <div className={`grid grid-cols-2 lg:contents gap-6 ${dir === "rtl" ? "text-right" : "text-left"}`}>
          <div>
            <h6 className="font-heading text-[14px] sm:text-[16px] font-bold text-white mb-4 sm:mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue" />
              {t.footer.quickLinks}
            </h6>
            <ul className="flex flex-col gap-3 text-[13px] sm:text-[14px]">
              <li>
                <Link href="/" className="group flex items-center gap-2.5 hover:text-white transition-colors">
                  <Home size={14} className="text-white" />
                  {t.navbar.home}
                </Link>
              </li>
              <li>
                <Link href="/services" className="group flex items-center gap-2.5 hover:text-white transition-colors">
                  <Stethoscope size={14} className="text-white" />
                  {t.footer.ourServices}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="group flex items-center gap-2.5 hover:text-white transition-colors">
                  <ImageIcon size={14} className="text-white" />
                  {t.navbar.gallery}
                </Link>
              </li>
              <li>
                <Link href="/about" className="group flex items-center gap-2.5 hover:text-white transition-colors">
                  <Info size={14} className="text-white" />
                  {t.navbar.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="group flex items-center gap-2.5 hover:text-white transition-colors">
                  <MessageSquare size={14} className="text-white" />
                  {t.navbar.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h6 className="font-heading text-[14px] sm:text-[16px] font-bold text-white mb-4 sm:mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue" />
              {t.footer.ourServices}
            </h6>
            <ul className="flex flex-col gap-3 text-[13px] sm:text-[14px]">
              <li>
                <Link href="/services" className="group flex items-center gap-2.5 hover:text-white transition-colors">
                  <ShieldCheck size={14} className="text-white" />
                  {t.services.implantTitle}
                </Link>
              </li>
              <li>
                <Link href="/services" className="group flex items-center gap-2.5 hover:text-white transition-colors">
                  <Sparkles size={14} className="text-white" />
                  {t.services.prosthTitle}
                </Link>
              </li>
              <li>
                <Link href="/services" className="group flex items-center gap-2.5 hover:text-white transition-colors">
                  <Baby size={14} className="text-white" />
                  {t.services.childTitle}
                </Link>
              </li>
              <li>
                <Link href="/services" className="group flex items-center gap-2.5 hover:text-white transition-colors">
                  <Activity size={14} className="text-white" />
                  {t.services.orthoTitle}
                </Link>
              </li>
              <li>
                <Link href="/services" className="group flex items-center gap-2.5 hover:text-white transition-colors">
                  <Shield size={14} className="text-white" />
                  {t.services.perioTitle}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact */}        <div className={`flex flex-col ${dir === "rtl" ? "text-right" : "text-left"}`}>
          <h6 className="font-heading text-[16px] font-bold text-white mb-5">{t.footer.contactUs}</h6>
          <div className="flex flex-col gap-4 items-start">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-white/80 shrink-0" />
              <div className="flex flex-col">
                <strong className="text-white text-[14px]">{t.footer.clinicLocation}</strong>
                <span className={`text-[13px] ${dir === "rtl" ? "font-sans text-right" : ""}`} dir={dir === "rtl" ? "ltr" : "auto"}>{t.contact.location}</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-white/80 shrink-0" />
              <div className="flex flex-col">
                <strong className="text-white text-[14px]">{t.footer.callUs}</strong>
                <span className="text-[13px] font-sans" dir="ltr">0523 39 19 08</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-white/80 shrink-0" />
              <div className="flex flex-col">
                <strong className="text-white text-[14px]">{t.footer.sendMessage}</strong>
                <span className="text-[13px] font-sans">adamdentalcenter@gmail.com</span>
              </div>
            </div>

            {/* Emergency SOS Badge — Centered with side padding */}
            <div className="pt-4 w-full flex justify-center px-4">
              <div className={`inline-flex items-center gap-2.5 bg-red-600/95 backdrop-blur-lg border border-red-400/30 p-1.5 rounded-full group cursor-pointer transition-all hover:bg-red-600 hover:shadow-[0_10px_30px_rgba(220,38,38,0.3)] shadow-[0_4px_15px_rgba(0,0,0,0.1)] ${dir === "rtl" ? "pl-5" : "pr-5"}`}>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-inner shrink-0">
                  <Phone className="w-4 h-4 text-red-600 animate-pulse" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white/70 text-[8px] uppercase tracking-[0.12em] font-black leading-none mb-0.5">{t.footer.emergency}</span>
                  <a href="tel:0710100605" className="text-white text-[14px] font-black tracking-tight leading-none font-sans" dir="ltr">0710 100 605</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-5 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3">
          <div className={`flex flex-col items-center sm:items-start gap-1 ${dir === "rtl" ? "sm:items-end" : ""}`}>
            <span className="text-[12px] sm:text-[13px] text-center sm:text-left">{t.footer.rights}</span>
            <span className="text-[11px] sm:text-[12px] text-white/50">
              {t.footer.designedBy}{" "}
              <a href="https://kamal-aassab.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue transition-colors font-semibold">
                KAMAL AASSAB
              </a>
            </span>
          </div>
          {/* Scroll-to-top — hidden on mobile */}
          <button
            onClick={scrollToTop}
            className={`hidden sm:flex w-10 h-10 rounded-full bg-navy text-white items-center justify-center text-[14px] transition-all hover:bg-white hover:text-navy hover:-translate-y-1 ${
              showScrollTop ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
