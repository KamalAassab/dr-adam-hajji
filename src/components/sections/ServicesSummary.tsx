"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const services = [
  { slug: "dental-implants", num: "01", title: "Dental Implants", desc: "Permanent titanium-anchored replacements that look, feel, and function like natural teeth.", details: ["Titanium fixture", "Zirconia crown", "Bone grafting", "Long-term follow-up"], image: "https://images.pexels.com/photos/6502305/pexels-photo-6502305.jpeg?auto=compress&cs=tinysrgb&w=1200", imageAlt: "Dental implant model" },
  { slug: "dental-prosthetics", num: "02", title: "Dental Prosthetics", desc: "Custom crowns, bridges, and dentures restoring form and natural aesthetics.", details: ["Zirconia crowns", "Fixed bridges", "Full dentures", "Implant prosthetics"], image: "https://images.pexels.com/photos/18662954/pexels-photo-18662954.jpeg?auto=compress&cs=tinysrgb&w=1200", imageAlt: "Dental technician" },
  { slug: "orthodontics", num: "03", title: "Orthodontics", desc: "Precise alignment with braces or invisible clear aligners.", details: ["Metal & ceramic braces", "Clear aligners", "Retainers", "Early interceptive"], image: "https://images.pexels.com/photos/19328507/pexels-photo-19328507.jpeg?auto=compress&cs=tinysrgb&w=1200", imageAlt: "Jaw model with braces" },
  { slug: "teeth-whitening", num: "04", title: "Teeth Whitening", desc: "Professional whitening - up to 8 shades brighter in one session.", details: ["Laser whitening", "Take-home trays", "Stain removal", "Sensitivity-free"], image: "https://images.pexels.com/photos/6627604/pexels-photo-6627604.jpeg?auto=compress&cs=tinysrgb&w=1200", imageAlt: "Bright white teeth" },
  { slug: "periodontal-treatment", num: "05", title: "Periodontal Treatment", desc: "Comprehensive gum disease therapy protecting your teeth's foundation.", details: ["Scaling & root planing", "Periodontal surgery", "Gum grafting", "Maintenance"], image: "https://images.pexels.com/photos/3779713/pexels-photo-3779713.jpeg?auto=compress&cs=tinysrgb&w=1200", imageAlt: "Gum treatment" },
  { slug: "radiology", num: "06", title: "Radiology", desc: "Digital X-rays and 3D cone-beam imaging with minimal radiation.", details: ["Digital X-rays", "Panoramic OPG", "CBCT 3D scan", "Instant analysis"], image: "https://images.pexels.com/photos/6501853/pexels-photo-6501853.jpeg?auto=compress&cs=tinysrgb&w=1200", imageAlt: "Dental X-ray" },
  { slug: "childrens-treatments", num: "07", title: "Children's Treatments", desc: "Gentle, child-friendly care that builds healthy habits from the first visit.", details: ["Preventive exams", "Fluoride & sealants", "Painless fillings", "Early screening"], image: "https://images.pexels.com/photos/4185330/pexels-photo-4185330.jpeg?auto=compress&cs=tinysrgb&w=1200", imageAlt: "Child at dentist" },
];

function Card({ service, className = "", titleCls = "text-[19px]", pad = "p-6", delay = 0 }: {
  service: typeof services[0]; className?: string; titleCls?: string; pad?: string; delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`group relative overflow-hidden rounded-3xl cursor-pointer ${className}`}
    >
      {/* Full-card link overlay */}
      <Link href={`/services/${service.slug}`} className="absolute inset-0 z-30" aria-label={service.title} />

      {/* Photo */}
      <Image src={service.image} alt={service.imageAlt} fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 50vw" />

      {/* Base gradient - always on */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Base title - anchored bottom, always visible */}
      <div className={`absolute inset-x-0 bottom-0 ${pad} z-10 transition-opacity duration-300 group-hover:opacity-0`}>
        <p className="text-[10px] font-black text-white/40 tracking-[0.22em] uppercase mb-1.5">{service.num}</p>
        <h3 className={`font-heading font-black text-white leading-tight ${titleCls}`}>{service.title}</h3>
      </div>

      {/* Hover reveal layer - stronger gradient + full content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-400">
        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/50 to-transparent" />
        <div className={`relative ${pad}`}>
          <p className="text-[10px] font-black text-white/40 tracking-[0.22em] uppercase mb-1.5">{service.num}</p>
          <h3 className={`font-heading font-black text-white leading-tight mb-3 ${titleCls}`}>{service.title}</h3>
          <p className="text-white/65 text-[13px] leading-[1.6] mb-3">{service.desc}</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {service.details.map((d, i) => (
              <span key={i} className="text-[11px] font-semibold text-white/85 bg-white/[0.12] backdrop-blur-sm rounded-full px-3 py-[5px] border border-white/[0.12]">{d}</span>
            ))}
          </div>
          <span className="inline-flex items-center gap-1.5 text-[12px] font-black text-white uppercase tracking-wide">
            Learn more <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSummary({ hideLink = false }: { hideLink?: boolean }) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-[11px] font-black text-blue tracking-[0.18em] uppercase mb-3">Our Services</p>
            <h2 className="font-heading text-[clamp(28px,4.5vw,48px)] font-black text-navy leading-[1.06] tracking-tight">
              Every treatment, <span className="text-blue">under one roof.</span>
            </h2>
          </div>
          {!hideLink && (
            <Link href="/services" className="group hidden sm:inline-flex items-center gap-2 font-bold text-[13px] text-navy border-b-2 border-navy pb-0.5 hover:text-blue hover:border-blue transition-all shrink-0 mb-1">
              View all <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>

        <div className="flex flex-col gap-4">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row gap-4">
            <Card service={services[0]} className="h-[320px] lg:h-[500px] lg:flex-[1.55]" pad="p-8" titleCls="text-[clamp(20px,2.2vw,28px)]" delay={0} />
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:flex-1">
              <Card service={services[1]} className="h-[240px] sm:flex-1 lg:flex-1" delay={0.07} />
              <Card service={services[2]} className="h-[240px] sm:flex-1 lg:flex-1" delay={0.12} />
            </div>
          </div>
          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card service={services[3]} className="h-[260px]" delay={0.08} />
            <Card service={services[4]} className="h-[260px]" delay={0.13} />
            <Card service={services[5]} className="h-[260px]" delay={0.18} />
            <Card service={services[6]} className="h-[260px]" delay={0.23} />
          </div>
        </div>

        {!hideLink && (
          <div className="sm:hidden mt-8">
            <Link href="/services" className="group flex items-center justify-center gap-2 bg-blue text-white px-7 py-4 rounded-full font-bold text-[14px] hover:bg-navy transition-colors duration-200">
              View All Services <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
