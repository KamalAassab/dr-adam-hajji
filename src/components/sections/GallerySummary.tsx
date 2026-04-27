"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const images = [
  { src: "/gallery/PIC1.jpg", alt: "Treatment Room",    category: "Clinical" },
  { src: "/gallery/PIC2.jpg", alt: "Consultation Area", category: "Comfort" },
  { src: "/gallery/PIC3.jpg", alt: "Digital Equipment", category: "Technology" },
  { src: "/gallery/PIC4.jpg", alt: "Patient Care",      category: "Service" },
  { src: "/gallery/PIC5.jpg", alt: "Clinic Interior",   category: "Modern" },
];

const localT = {
  fr: {
    eyebrow: "Parcours Visuel",
    headline_1: "L'excellence dans",
    headline_2: "chaque détail.",
    btnExplore: "Explorer la Galerie",
    of: "sur",
  },
  en: {
    eyebrow: "Visual Journey",
    headline_1: "Excellence in",
    headline_2: "every detail.",
    btnExplore: "Explore Full Gallery",
    of: "of",
  },
  ar: {
    eyebrow: "رحلة بصرية",
    headline_1: "التميز في",
    headline_2: "كل تفصيلة.",
    btnExplore: "استكشف المعرض",
    of: "من",
  },
};

export default function GallerySummary({ hideLink = false }: { hideLink?: boolean }) {
  const { lang, dir } = useLanguage();
  const t = localT[lang as keyof typeof localT] ?? localT.fr;
  const [active, setActive] = useState(0);

  const prev = useCallback(() => setActive(i => (i - 1 + images.length) % images.length), []);
  const next = useCallback(() => setActive(i => (i + 1) % images.length), []);

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">

        {/* ── Header ── */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 ${dir === "rtl" ? "text-right" : "text-left"}`}>
          <div>
            <motion.div
              initial={{ opacity: 0, x: dir === "rtl" ? 16 : -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex items-center gap-3 mb-4 ${dir === "rtl" ? "justify-end md:justify-end" : "justify-center md:justify-start"}`}
            >
              <div className="h-px w-8 bg-blue shrink-0" />
              <span className="text-[11px] font-black text-blue tracking-[0.22em] uppercase">{t.eyebrow}</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`font-heading text-[clamp(28px,4.5vw,52px)] font-black text-navy leading-[1.07] tracking-tight text-center ${dir === "rtl" ? "md:text-right" : "md:text-left"}`}
            >
              {t.headline_1}{" "}
              <span className="text-blue">{t.headline_2}</span>
            </motion.h2>
          </div>

          {!hideLink && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="flex justify-center"
            >
              <Link
                href="/gallery"
                className={`group inline-flex items-center gap-2.5 border-2 border-navy text-navy px-7 py-3 rounded-full font-bold text-[14px] hover:bg-navy hover:text-white transition-all duration-300 ${dir === "rtl" ? "flex-row-reverse" : ""}`}
              >
                {t.btnExplore}
                <ArrowRight className={`w-4 h-4 transition-transform ${dir === "rtl" ? "group-hover:-translate-x-1 rotate-180" : "group-hover:translate-x-1"}`} />
              </Link>
            </motion.div>
          )}
        </div>

        {/* ── Carousel ── */}
        <div className="relative">

          {/* Main Stage */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden bg-slate-100 shadow-2xl shadow-navy/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0"
              >
                <Image
                  src={images[active].src}
                  alt={images[active].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 85vw"
                  priority
                />
                {/* Bottom vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

                {/* Caption */}
                <div className={`absolute bottom-6 ${dir === "rtl" ? "right-7" : "left-7"}`}>
                  <span className="block text-[10px] font-black text-white/50 tracking-[0.25em] uppercase mb-1">
                    {images[active].category}
                  </span>
                  <span className="block text-[18px] md:text-[22px] font-black text-white leading-tight">
                    {images[active].alt}
                  </span>
                </div>

                {/* Counter */}
                <div className={`absolute bottom-6 ${dir === "rtl" ? "left-7" : "right-7"} flex items-baseline gap-1`}>
                  <span className="font-heading text-[28px] font-black text-white leading-none">
                    {String(active + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white/40 text-[13px] font-semibold">/ {String(images.length).padStart(2, "0")}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-6 gap-4">
            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to image ${i + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    i === active
                      ? "w-8 h-2.5 bg-blue"
                      : "w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>

            {/* Arrow controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={dir === "rtl" ? next : prev}
                aria-label="Previous image"
                className="w-11 h-11 rounded-full border-2 border-slate-200 flex items-center justify-center text-navy hover:border-blue hover:text-blue hover:bg-blue/5 transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={dir === "rtl" ? prev : next}
                aria-label="Next image"
                className="w-11 h-11 rounded-full bg-navy flex items-center justify-center text-white hover:bg-blue transition-all duration-200"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex gap-3 mt-5 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`View ${img.alt}`}
                className={`relative shrink-0 rounded-xl overflow-hidden transition-all duration-300 ${
                  i === active
                    ? "ring-2 ring-blue ring-offset-2 opacity-100"
                    : "opacity-50 hover:opacity-80"
                }`}
                style={{ width: 80, height: 56 }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
