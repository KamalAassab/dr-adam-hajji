"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ImageIcon } from "lucide-react";
import { motion } from "framer-motion";

const galleryImages = [
  { src: "/dental_about1.png", style: "col-span-2 md:col-span-2 row-span-2 aspect-[4/3] md:aspect-auto" },
  { src: "/dental_about2.png", style: "col-span-2 md:col-span-1 aspect-[4/3]" },
  { src: "/dental_team_james.png", style: "col-span-1 aspect-square md:aspect-[4/5]" },
  { src: "/dental_team_maya.png", style: "col-span-1 aspect-square md:aspect-[4/5]" },
  { src: "/dental_team_michael.png", style: "col-span-2 md:col-span-1 aspect-[4/3] md:aspect-auto" },
];

export default function GallerySummary({ hideLink = false }: { hideLink?: boolean }) {
  return (
    <section className="py-24 lg:py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue/5 border border-blue/10 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue" />
              <span className="text-[13px] font-bold text-blue tracking-[0.06em] uppercase">Clinic Tour</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="font-heading text-[clamp(32px,5vw,48px)] font-black text-navy leading-[1.1] tracking-tight"
            >
              Our State-of-the-Art <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-[#2B5DE4]">Facilities</span>
            </motion.h2>
          </div>
          
          {!hideLink && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="shrink-0"
            >
              <Link
                href="/gallery"
                className="group relative inline-flex items-center justify-center bg-navy text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all duration-300 hover:bg-blue hover:scale-105 hover:shadow-[0_12px_30px_rgba(74,123,247,0.25)] overflow-hidden"
              >
                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:animate-[shine_1.5s_ease-out_infinite]" />
                <span className="relative z-10 flex items-center">
                  View Full Gallery
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:h-[600px] mb-12">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
              className={`relative overflow-hidden rounded-3xl group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 ${img.style}`}
            >
              <Image
                src={img.src}
                alt={`Gallery image ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-100 border border-white/30 shadow-lg">
                  <ImageIcon className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
