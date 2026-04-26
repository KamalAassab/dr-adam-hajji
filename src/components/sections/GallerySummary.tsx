"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const images = [
  { src: "/gallery/PIC1.jpg", alt: "Treatment Room", category: "Clinical", size: "large" },
  { src: "/gallery/PIC2.jpg", alt: "Consultation Area", category: "Comfort", size: "medium" },
  { src: "/gallery/PIC3.jpg", alt: "Digital Equipment", category: "Technology", size: "medium" },
  { src: "/gallery/PIC4.jpg", alt: "Patient Care", category: "Service", size: "small" },
  { src: "/gallery/PIC5.jpg", alt: "Clinic Interior", category: "Modern", size: "small" },
];

function GalleryItem({ item, index }: { item: typeof images[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative rounded-[24px] md:rounded-[32px] overflow-hidden bg-slate-50 group ${
        item.size === "large" ? "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto" : 
        item.size === "medium" ? "aspect-[4/5]" : "aspect-square"
      }`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover transition-transform duration-1000 group-hover:scale-110"
        sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
      />
      {/* Glass Tag */}
      <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hidden md:block">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl">
          <p className="text-[10px] font-black text-white/60 uppercase tracking-widest mb-0.5">{item.category}</p>
          <p className="text-[14px] font-bold text-white">{item.alt}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function GallerySummary({ hideLink = false }: { hideLink?: boolean }) {
  const { lang, dir } = useLanguage();

  const localT = {
    fr: {
      eyebrow: "Parcours Visuel",
      headline_1: "L'excellence dans",
      headline_2: "chaque détail.",
      btnExplore: "Explorer la Galerie"
    },
    en: {
      eyebrow: "Visual Journey",
      headline_1: "Excellence in",
      headline_2: "every detail.",
      btnExplore: "Explore Full Gallery"
    },
    ar: {
      eyebrow: "رحلة بصرية",
      headline_1: "التميز في",
      headline_2: "كل تفصيلة.",
      btnExplore: "استكشف المعرض"
    }
  }[lang];

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 ${dir === "rtl" ? "text-right" : "text-left"}`}>
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: dir === "rtl" ? 16 : -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex items-center gap-3 mb-5 md:justify-start justify-center ${dir === "rtl" ? "md:justify-end" : ""}`}
            >
              <div className="h-px w-8 bg-blue shrink-0" />
              <span className="text-[11px] font-black text-blue tracking-[0.22em] uppercase">{localT.eyebrow}</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`font-heading text-[clamp(28px,5vw,56px)] font-black text-navy leading-[1.05] tracking-tight text-center ${dir === "rtl" ? "md:text-right" : "md:text-left"}`}
            >
              {localT.headline_1} <br className="hidden md:block" />
              <span className="text-blue text-transparent bg-clip-text bg-gradient-to-r from-blue to-[#2854C8]">{localT.headline_2}</span>
            </motion.h2>
          </div>

          {!hideLink && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <Link
                href="/gallery"
                className={`group inline-flex items-center gap-3 bg-navy text-white px-8 py-4 rounded-full font-bold text-[15px] hover:bg-blue transition-all duration-300 shadow-xl shadow-navy/10 ${dir === "rtl" ? "flex-row-reverse" : ""}`}
              >
                {localT.btnExplore}
                <ArrowRight className={`w-5 h-5 transition-transform ${dir === "rtl" ? "group-hover:-translate-x-1 rotate-180" : "group-hover:translate-x-1"}`} />
              </Link>
            </motion.div>
          )}
        </div>

        {/* Unified Professional Grid — 2 columns on mobile, 3-4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {images.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.8 }}
              className="relative aspect-square rounded-[24px] overflow-hidden bg-slate-50 group border border-slate-100 shadow-sm"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              
              {/* Refined Metadata Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl">
                  <p className="text-[10px] font-bold text-white/80 uppercase tracking-widest leading-none mb-1">{item.category}</p>
                  <p className="text-[13px] font-black text-white leading-tight truncate">{item.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
