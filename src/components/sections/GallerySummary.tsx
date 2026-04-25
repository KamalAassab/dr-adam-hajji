"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative rounded-[32px] overflow-hidden bg-slate-50 ${
        item.size === "large" ? "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto" : 
        item.size === "medium" ? "aspect-[4/5]" : "aspect-square"
      }`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </motion.div>
  );
}

export default function GallerySummary({ hideLink = false }: { hideLink?: boolean }) {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="h-px w-8 bg-blue shrink-0" />
              <span className="text-[11px] font-black text-blue tracking-[0.22em] uppercase">Visual Journey</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-heading text-[clamp(32px,5vw,56px)] font-black text-navy leading-[1.05] tracking-tight"
            >
              Excellence in <br />
              <span className="text-blue text-transparent bg-clip-text bg-gradient-to-r from-blue to-[#2854C8]">every detail.</span>
            </motion.h2>
          </div>

          {!hideLink && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/gallery"
                className="group inline-flex items-center gap-3 bg-navy text-white px-8 py-4 rounded-full font-bold text-[15px] hover:bg-blue transition-all duration-300 shadow-xl shadow-navy/10"
              >
                Explore Full Gallery
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          )}
        </div>

        {/* Professional Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {images.map((item, i) => (
            <GalleryItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
