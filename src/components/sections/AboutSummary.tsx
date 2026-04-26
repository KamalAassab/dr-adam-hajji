"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { useLanguage } from "@/i18n/LanguageContext";

export default function AboutSummary({ hideLink = false }: { hideLink?: boolean }) {
  const { t, dir } = useLanguage();

  const dynamicStats = [
    t.about.stats.years,
    t.about.stats.patients,
    t.about.stats.specialties,
    t.about.stats.digital,
  ];

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center">

          {/* ── Mobile-Only Title (Appears before picture) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden text-center mb-[-1rem]"
          >
            <p className="text-[12px] font-bold text-blue tracking-[0.14em] uppercase mb-4">
              {t.about.eyebrow}
            </p>
            <h2 className="font-heading text-[clamp(30px,7.5vw,50px)] font-black text-navy leading-[1.08] tracking-tight">
              {t.about.headline_1}<br />
              <span className="text-blue">{t.about.headline_2}</span>
            </h2>
          </motion.div>

          {/* ── Left: Image block ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {/* Main photo — single, clean */}
            <div className="relative rounded-[40px] overflow-hidden aspect-[4/5] w-full max-w-[480px] mx-auto lg:mx-0 shadow-[0_32px_64px_-16px_rgba(13,27,75,0.15)]">
              <Image
                src="/gallery/PIC1.jpg"
                alt="Dr. ADAM HAJJI Dental Clinic"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 45vw"
                priority
              />
              {/* Thin left accent */}
              <div className={`absolute top-0 bottom-0 w-1 bg-blue ${dir === "rtl" ? "right-0" : "left-0"}`} />
            </div>
          </motion.div>

          {/* ── Right: Content (Description, Stats, CTAs) ── */}
          <motion.div
            initial={{ opacity: 0, x: dir === "rtl" ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="pt-2 lg:pt-0"
          >
            {/* ── Desktop-Only Title ── */}
            <div className={`hidden lg:block ${dir === "rtl" ? "text-right" : "text-left"}`}>
              <p className="text-[12px] font-bold text-blue tracking-[0.14em] uppercase mb-5">
                {t.about.eyebrow}
              </p>
              <h2 className="font-heading text-[clamp(30px,4.5vw,50px)] font-black text-navy leading-[1.08] tracking-tight mb-6">
                {t.about.headline_1}<br />
                <span className="text-blue">{t.about.headline_2}</span>
              </h2>
            </div>

            {/* Body - two short, honest paragraphs */}
            <p className={`text-slate-600 text-[16px] leading-[1.75] mb-5 max-w-[520px] text-center lg:text-start mx-auto lg:mx-0`}>
              {t.about.p1}
            </p>
            <p className={`text-slate-600 text-[16px] leading-[1.75] mb-10 max-w-[520px] text-center lg:text-start mx-auto lg:mx-0`}>
              {t.about.p2}
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-10 pb-10 border-b border-slate-100">
              {dynamicStats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  className="text-center lg:text-start"
                >
                  <p className={`font-heading text-[26px] font-black text-navy leading-none mb-1 ${dir === "rtl" ? "font-sans" : ""}`}>{s.value}</p>
                  <p className="text-[12px] text-slate-500 font-medium leading-snug">{s.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 bg-blue text-white px-6 py-3.5 rounded-full font-bold text-[14px] transition-all duration-300 hover:bg-navy hover:shadow-[0_8px_24px_rgba(53,102,234,0.3)]"
              >
                {t.about.btnBook}
                <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${dir === "rtl" ? "group-hover:-translate-x-1 rotate-180" : "group-hover:translate-x-1"}`} />
              </Link>

              {!hideLink && (
                <Link
                  href="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-navy font-bold text-[14px] border border-navy/20 rounded-full px-6 py-3.5 hover:bg-navy hover:text-white transition-all duration-200"
                >
                  {t.about.btnStory}
                  <ArrowRight className={`w-3.5 h-3.5 ${dir === "rtl" ? "rotate-180" : ""}`} />
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
