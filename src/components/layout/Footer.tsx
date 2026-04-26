"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp, MapPin, Phone, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const socialIcons = [
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@adamhajji04",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    )
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/p/Dr-ADM-HAJJI-61571341860651/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-1.11 9-5.41 9-10.95z" />
      </svg>
    )
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Mondentiste",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    )
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/dr_adam_hajji",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    )
  },
];

export default function Footer() {
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
          <p className="text-[13px] sm:text-[14px] leading-relaxed mb-6 max-w-sm text-white/60 text-center lg:text-left">
            At Dr.ADAM HAJJI Dental Clinic, we're dedicated to providing high-quality, personalized dental care. Our skilled team uses the latest technology to ensure comfortable, efficient treatments and beautiful, healthy smiles for life.
          </p>
          <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
            {socialIcons.map((icon, i) => (
              <a
                key={i}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon.name}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center transition-all hover:bg-white hover:text-blue hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
              >
                {icon.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links — Quick Links + Our Services side-by-side on mobile */}
        <div className="grid grid-cols-2 lg:contents gap-6">
          <div>
            <h6 className="font-heading text-[14px] sm:text-[16px] font-bold text-white mb-4 sm:mb-5">Quick Links</h6>
            <ul className="flex flex-col gap-2.5 sm:gap-3 text-[13px] sm:text-[14px]">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h6 className="font-heading text-[14px] sm:text-[16px] font-bold text-white mb-4 sm:mb-5">Our Services</h6>
            <ul className="flex flex-col gap-2.5 sm:gap-3 text-[13px] sm:text-[14px]">
              <li><Link href="/services" className="hover:text-white transition-colors">General Dentistry</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Cosmetic Dentistry</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Pediatric Dentistry</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Restorative</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Preventive</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Orthodontics</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h6 className="font-heading text-[16px] font-bold text-white mb-5">Contact Us</h6>
          <div className="flex flex-col gap-4">
            {/* Emergency SOS Badge — Creative Compact Design */}
            <div className="inline-flex items-center gap-3 bg-red-600/90 backdrop-blur-lg border border-red-400/30 p-2.5 pr-5 rounded-full mb-4 group cursor-pointer transition-all hover:bg-red-600 hover:shadow-[0_10px_30px_rgba(220,38,38,0.3)] shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:-translate-y-1">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-inner group-hover:rotate-[15deg] transition-transform duration-300">
                <Phone className="w-4.5 h-4.5 text-red-600 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-white/70 text-[9px] uppercase tracking-[0.15em] font-black leading-none mb-1">SOS 24/7</span>
                <a href="tel:0710100605" className="text-white text-[16px] font-black tracking-tight leading-none">0710 100 605</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-white/80 shrink-0" />
              <div className="flex flex-col">
                <strong className="text-white text-[14px]">Clinic Location</strong>
                <span className="text-[13px]">rond point LES CERISES, 12 lot zouhour salma 2, El Jadida 24000</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-white/80 shrink-0" />
              <div className="flex flex-col">
                <strong className="text-white text-[14px]">Call Us</strong>
                <span className="text-[13px]">0523391908</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-white/80 shrink-0" />
              <div className="flex flex-col">
                <strong className="text-white text-[14px]">Send a Message</strong>
                <span className="text-[13px]">adamdentalcenter@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-5 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="text-[12px] sm:text-[13px] text-center sm:text-left">© 2026 – Dr.ADAM HAJJI Dental Clinic. All rights reserved.</span>
            <span className="text-[11px] sm:text-[12px] text-white/50">
              Designed with love by{" "}
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
