"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { use } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { servicesData } from "../data";

const beforeAfterImages = [1,2,3,4,5,6].map(n => `/before-after/before-after${n}.webp`);

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { t, lang, dir } = useLanguage();
  
  const s = servicesData[lang][slug];
  if (!s) notFound();

  return (
    <main className="bg-white">

      {/* ── Hero ── */}
      <section className="relative h-[55vh] sm:h-[65vh] lg:h-[75vh] min-h-[400px] flex items-end overflow-hidden">
        <Image src={s.heroImage} alt={s.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
        
        {/* Absolute Return Button */}
        <div className="absolute top-28 lg:top-32 left-6 lg:left-12 z-30">
          <motion.div
            initial={{ opacity: 0, x: dir === "rtl" ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link
              href="/services"
              className={`inline-flex items-center gap-2 bg-blue text-white px-4 py-1.5 rounded-full shadow-lg shadow-blue/20 transition-all duration-300 text-[12px] font-bold group hover:bg-navy hover:scale-105 ${dir === "rtl" ? "flex-row-reverse" : ""}`}
            >
              <ArrowLeft size={14} className={`transition-transform duration-300 ${dir === "rtl" ? "group-hover:translate-x-1 rotate-180" : "group-hover:-translate-x-1"}`} />
              {t.services.backToServices}
            </Link>
          </motion.div>
        </div>

        <div className="relative z-10 container mx-auto px-6 pb-14">
          <p className="text-[11px] font-black text-blue tracking-[0.2em] uppercase mb-2">{s.num}</p>
          <h1 className="font-heading text-[clamp(32px,5vw,60px)] font-black text-white leading-tight max-w-2xl mb-3">{s.title}</h1>
          <p className="text-white/70 text-[16px] max-w-xl">{s.tagline}</p>
        </div>
      </section>

      {/* ── Intro + Benefits ── */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-[11px] font-black text-blue tracking-[0.18em] uppercase mb-4">{t.serviceDetail.overview}</p>
            <h2 className="font-heading text-[clamp(22px,3vw,34px)] font-black text-navy leading-tight mb-5">{t.serviceDetail.whatToExpect}</h2>
            <p className="text-slate-600 text-[16px] leading-[1.8]">{s.intro}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <p className="text-[11px] font-black text-blue tracking-[0.18em] uppercase mb-4">{t.serviceDetail.keyBenefits}</p>
            <ul className="flex flex-col gap-3">
              {s.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-navy font-medium">
                  <span className="w-5 h-5 rounded-full bg-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-blue" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── Process steps with photos ── */}
      <section className="py-16 lg:py-20 bg-[#F8FAFF]">
        <div className="container mx-auto px-6">
          <p className="text-[11px] font-black text-blue tracking-[0.18em] uppercase mb-4">{t.serviceDetail.theProcess}</p>
          <h2 className="font-heading text-[clamp(22px,3vw,36px)] font-black text-navy leading-tight mb-10">{t.serviceDetail.stepByStep}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {s.steps.map((step, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={step.photo} alt={step.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-[10px] font-black text-white/60 tracking-[0.2em] uppercase">{t.serviceDetail.stepLabel} {String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-[16px] font-black text-navy mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-[13px] leading-[1.65]">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Before / After — 9:16 portrait carousel ── */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-[11px] font-black text-blue tracking-[0.18em] uppercase mb-3">{t.serviceDetail.satisfiedClients}</p>
              <h2 className="font-heading text-[clamp(22px,3vw,36px)] font-black text-navy leading-tight">{t.serviceDetail.beforeAfter}</h2>
            </div>
            <p className="text-slate-400 text-[13px] font-medium">{t.serviceDetail.swipeResults}</p>
          </div>
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4" style={{ scrollbarWidth: "none" }}>
            {beforeAfterImages.map((src, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="snap-center shrink-0 w-[56vw] sm:w-[36%] lg:w-[22%] rounded-2xl overflow-hidden relative"
                style={{ aspectRatio: "9/16" }}
              >
                <Image src={src} alt={`Result ${i + 1}`} fill className="object-cover" sizes="30vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-black text-white/60 tracking-widest uppercase">Result {i + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-navy">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white/40 text-[11px] font-semibold tracking-widest uppercase mb-1">{t.serviceDetail.ready}</p>
            <h3 className="font-heading text-[clamp(20px,3vw,32px)] font-black text-white">{t.serviceDetail.bookConsultation.replace("{title}", s.title)}</h3>
          </div>
          <Link href="/contact" className="group shrink-0 inline-flex items-center gap-2 bg-blue text-white px-8 py-4 rounded-full font-bold text-[14px] hover:bg-white hover:text-navy transition-all duration-200">
            {t.serviceDetail.bookButton} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}
