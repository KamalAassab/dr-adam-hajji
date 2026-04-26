"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Years of practice" },
  { value: "4 000+", label: "Patients treated" },
  { value: "7", label: "Specialties offered" },
  { value: "100%", label: "Digital workflows" },
];

export default function AboutSummary({ hideLink = false }: { hideLink?: boolean }) {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center">

          {/* ── Right: Content — appears FIRST on mobile ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="pt-0 lg:pt-0 order-1 lg:order-2"
          >
          {/* ── Left: Image block — appears SECOND on mobile ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative order-2 lg:order-1"
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
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue" />
          </div>
        </motion.div>
            {/* Eyebrow */}
            <p className="text-[12px] font-bold text-blue tracking-[0.14em] uppercase mb-5 text-center lg:text-left">
              About the Clinic
            </p>

            {/* Headline */}
            <h2 className="font-heading text-[clamp(30px,4.5vw,50px)] font-black text-navy leading-[1.08] tracking-tight mb-6 text-center lg:text-left">
              Dental care that puts<br />
              <span className="text-blue">people first.</span>
            </h2>

            {/* Body - two short, honest paragraphs */}
            <p className="text-slate-600 text-[16px] leading-[1.75] mb-5 max-w-[520px]">
              Dr. ADAM HAJJI founded this clinic with one principle: every patient deserves a clear diagnosis, honest options, and treatment carried out with precision - not rushed, not oversold.
            </p>
            <p className="text-slate-600 text-[16px] leading-[1.75] mb-10 max-w-[520px]">
              Based in El Jadida, we combine over 15 years of clinical experience with fully digital workflows - from cone-beam 3D imaging to same-day prosthetics - so results are predictable and visits are efficient.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-10 pb-10 border-b border-slate-100">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  className="text-center lg:text-left"
                >
                  <p className="font-heading text-[26px] font-black text-navy leading-none mb-1">{s.value}</p>
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
                Book an Appointment
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {!hideLink && (
                <Link
                  href="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-navy font-bold text-[14px] border border-navy/20 rounded-full px-6 py-3.5 hover:bg-navy hover:text-white transition-all duration-200"
                >
                  Our story
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
