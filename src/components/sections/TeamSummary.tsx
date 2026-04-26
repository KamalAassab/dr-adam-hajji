"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
  { label: "Happy Patients", value: 333, suffix: "+" },
  { label: "Teeth Whitened", value: 71, suffix: "+" },
  { label: "Dental Implants", value: 27, suffix: "+" },
  { label: "Years of Experience", value: 10, suffix: "+" },
];

const teamSocials = [
  { name: "TikTok", href: "https://www.tiktok.com/@adamhajji04", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.98a8.17 8.17 0 0 0 4.78 1.52V7.04a4.85 4.85 0 0 1-1.01-.35z"/>
    </svg>
  )},
  { name: "Facebook", href: "https://www.facebook.com/p/Dr-ADM-HAJJI-61571341860651/", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-1.11 9-5.41 9-10.95z" />
    </svg>
  )},
  { name: "Instagram", href: "https://www.instagram.com/dr_adam_hajji", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )},
  { name: "YouTube", href: "https://www.youtube.com/@Mondentiste", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )},
];

function Counter({ to, duration = 2.2 }: { to: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const tick = (now: number) => {
      if (!startTime) startTime = now;
      const p = Math.min((now - startTime) / (duration * 1000), 1);
      const ease = 1 - Math.pow(1 - p, 4);
      setCount(Math.floor(ease * to));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function TeamSummary() {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-10 lg:mb-16 justify-center lg:justify-start"
        >
          <div className="h-px w-8 bg-blue shrink-0" />
          <span className="text-[11px] font-black text-blue tracking-[0.22em] uppercase">Our Specialist</span>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[38%_1fr] gap-8 lg:gap-16 items-center">

          {/* RIGHT — Content: appears first on mobile */}
          <div className="flex flex-col gap-8 lg:gap-12 order-1 lg:order-2">

          {/* LEFT — Portrait: appears second on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative group order-2 lg:order-1"
          >
            {/* Image container */}
            <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] shadow-[0_24px_48px_-12px_rgba(13,27,75,0.16)] bg-slate-50">
              <Image
                src="/dr-adam.jpg"
                alt="Dr. HAJJI Adam – Lead Dentist"
                fill
                priority
                className="object-contain object-center transition-transform duration-[1.2s] group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/30 to-transparent transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-8 text-center">
                <p className="text-[11px] font-black text-blue tracking-[0.2em] uppercase mb-2">Founder &amp; Lead Dentist</p>
                <h3 className="font-heading text-[20px] lg:text-[26px] font-black text-white leading-tight mb-4">Dr. HAJJI Adam</h3>
                {/* Social icons — always visible on mobile, hover on desktop */}
                <div className="flex gap-3 justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 translate-y-0 lg:translate-y-3 lg:group-hover:translate-y-0 transition-all duration-500 delay-75">
                  {teamSocials.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-blue hover:border-blue hover:scale-110 transition-all duration-300 shadow-xl"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-[clamp(28px,4.5vw,52px)] font-black text-navy leading-[1.08] tracking-tight mb-4 text-center lg:text-left">
                Precision dentistry,<br />
                <span className="text-blue">personal care.</span>
              </h2>
              <p className="text-[15px] lg:text-[17px] text-slate-500 leading-[1.8] w-full text-center lg:text-left">
                Dr. Hajji founded the clinic with a single goal: to bring advanced, painless dental care to El Jadida — combining digital technology with a genuinely patient-first approach.
              </p>
            </motion.div>

            {/* Stats grid 2×2 */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.6 }}
                  className="p-5 lg:p-7 rounded-3xl bg-gray-100 border border-slate-100 hover:border-blue/20 hover:bg-blue-pale transition-all duration-400 group"
                >
                  <div className="font-heading text-[clamp(30px,4vw,48px)] font-black text-navy leading-none flex items-start justify-center mb-2">
                    <Counter to={s.value} />
                    <span className="text-blue text-[clamp(18px,2vw,28px)] font-bold mt-1 ml-0.5">{s.suffix}</span>
                  </div>
                  <p className="text-[11px] lg:text-[13px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-navy transition-colors text-center">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 bg-blue text-white px-8 py-4 rounded-full font-bold text-[15px] hover:bg-navy transition-all duration-300 shadow-lg shadow-blue/10"
              >
                About the Clinic
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
