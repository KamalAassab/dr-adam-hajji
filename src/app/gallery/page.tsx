"use client";

import GallerySummary from "@/components/sections/GallerySummary";
import TestimonialsSummary from "@/components/sections/TestimonialsSummary";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function GalleryPage() {
  const { t, lang } = useLanguage();

  const pageT = {
    fr: {
      cta_headline: "Vivez l'excellence de nos soins",
      cta_desc: "Venez nous rendre visite et constatez la différence par vous-même. Prenez rendez-vous dès aujourd'hui.",
      cta_btn: "Prendre Rendez-vous",
      title: "Notre Galerie",
      breadcrumb: "Galerie",
    },
    en: {
      cta_headline: "Experience Our Premium Care",
      cta_desc: "Visit us and see the difference for yourself. Book your consultation today and experience dental care like never before.",
      cta_btn: "Book an Appointment",
      title: "Our Clinic Gallery",
      breadcrumb: "Gallery",
    },
  }[lang] ?? {
    cta_headline: "Experience Our Premium Care",
    cta_desc: "Visit us and see the difference for yourself.",
    cta_btn: "Book an Appointment",
    title: "Our Clinic Gallery",
    breadcrumb: "Gallery",
  };

  return (
    <>
      {/* ── Hero banner ── */}
      <section className="relative h-[28vh] min-h-[180px] bg-navy flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(53,102,234,0.25),transparent_70%)]" />
        <div className="container mx-auto px-6 pt-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-black text-blue tracking-[0.22em] uppercase mb-2"
          >
            {pageT.breadcrumb}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="font-heading text-[clamp(28px,5vw,52px)] font-black text-white leading-tight"
          >
            {pageT.title}
          </motion.h1>
        </div>
      </section>

      <GallerySummary hideLink={true} />

      <TestimonialsSummary hideLink={true} />

      {/* ── CTA ── */}
      <section className="py-20 lg:py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue/20 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white mx-auto mb-8"
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-5xl font-black text-white mb-6 max-w-2xl mx-auto leading-tight"
          >
            {pageT.cta_headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg mb-10 max-w-xl mx-auto"
          >
            {pageT.cta_desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center bg-blue text-white px-8 py-4 rounded-full font-bold text-[16px] transition-all duration-300 hover:bg-white hover:text-navy hover:scale-105 hover:shadow-[0_12px_30px_rgba(53,102,234,0.3)]"
            >
              {pageT.cta_btn}
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
