"use client";

import Link from "next/link";
import { ArrowUp, MapPin, Phone, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const socialIcons = [
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@adamhajji04",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    )
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/p/Dr-ADM-HAJJI-61571341860651/",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-1.11 9-5.41 9-10.95z" />
      </svg>
    )
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Mondentiste",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    )
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/dr_adam_hajji",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
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
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12">
        {/* Brand */}
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5 font-heading text-[22px] font-extrabold text-white mb-5">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 4C12.5 4 9 7 9 11c0 2.5 1 4.5 2 6.5 1 2 2 4 2 6.5 0 1.5.5 2 1.5 2s1.5-1 2-3c.5 2 1 3 2 3s1.5-.5 1.5-2c0-2.5 1-4.5 2-6.5 1-2 2-4 2-6.5 0-4-3.5-7-7-7z" fill="#4A7BF7" />
              <path d="M13 10c0-1.6 1.3-3 3-3s3 1.4 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span>Dr.ADAM HAJJI</span>
          </Link>
          <p className="text-[13px] leading-relaxed mb-7 max-w-sm">
            At Dr.ADAM HAJJI Dental Clinic, we're dedicated to providing high-quality, personalized dental care. Our skilled team uses the latest technology to ensure comfortable, efficient treatments and beautiful, healthy smiles for life.
          </p>
          <div className="flex gap-3">
            {socialIcons.map((icon, i) => (
              <a
                key={i}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon.name}
                className="w-[38px] h-[38px] rounded-lg bg-white/10 flex items-center justify-center text-[15px] transition-colors hover:bg-blue hover:text-white"
              >
                {icon.svg}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h6 className="font-heading text-[16px] font-bold text-white mb-5">Quick Links</h6>
          <ul className="flex flex-col gap-3 text-[14px]">
            <li><Link href="/" className="hover:text-blue transition-colors">Home</Link></li>
            <li><Link href="/services" className="hover:text-blue transition-colors">Our Services</Link></li>
            <li><Link href="/gallery" className="hover:text-blue transition-colors">Gallery</Link></li>
            <li><Link href="/about" className="hover:text-blue transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-blue transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h6 className="font-heading text-[16px] font-bold text-white mb-5">Our Services</h6>
          <ul className="flex flex-col gap-3 text-[14px]">
            <li><Link href="/services" className="hover:text-blue transition-colors">General Dentistry</Link></li>
            <li><Link href="/services" className="hover:text-blue transition-colors">Cosmetic Dentistry</Link></li>
            <li><Link href="/services" className="hover:text-blue transition-colors">Pediatric Dentistry</Link></li>
            <li><Link href="/services" className="hover:text-blue transition-colors">Restorative Dentistry</Link></li>
            <li><Link href="/services" className="hover:text-blue transition-colors">Preventive Dentistry</Link></li>
            <li><Link href="/services" className="hover:text-blue transition-colors">Orthodontics</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h6 className="font-heading text-[16px] font-bold text-white mb-5">Contact Us</h6>
          <div className="flex flex-col gap-4">
            {/* Emergency SOS Badge */}
            <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/20 p-3.5 rounded-xl mb-2 group cursor-pointer transition-colors hover:bg-red-500/20">
              <div className="bg-red-500/20 p-2 rounded-lg group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-red-500 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <strong className="text-red-400 text-[11px] uppercase tracking-wider font-bold mb-0.5">Emergency SOS</strong>
                <a href="tel:0710100605" className="text-white text-[16px] font-bold tracking-wide">0710100605</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue shrink-0" />
              <div className="flex flex-col">
                <strong className="text-white text-[14px]">Clinic Location</strong>
                <span className="text-[13px]">rond point LES CERISES, 12 lot zouhour salma 2, El Jadida 24000</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-blue shrink-0" />
              <div className="flex flex-col">
                <strong className="text-white text-[14px]">Call Us</strong>
                <span className="text-[13px]">0523391908</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-blue shrink-0" />
              <div className="flex flex-col">
                <strong className="text-white text-[14px]">Send a Message</strong>
                <span className="text-[13px]">adamdentalcenter@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-[13px]">© 2026 – Dr.ADAM HAJJI Dental Clinic. All rights reserved.</span>
            <span className="text-[12px] text-white/50">
              Designed with love by{" "}
              <a href="https://kamal-aassab.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue transition-colors font-semibold">
                KAMAL AASSAB
              </a>
            </span>
          </div>
          <div className="flex gap-6">
            <Link href="/about" className="text-[13px] text-white/50 transition-colors hover:text-white">
              About Clinic
            </Link>
          </div>
          <button
            onClick={scrollToTop}
            className={`w-10 h-10 rounded-full bg-blue text-white flex items-center justify-center text-[14px] transition-all hover:bg-blue-light hover:-translate-y-1 ${
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
