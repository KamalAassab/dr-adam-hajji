"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, ArrowRight, CheckCircle2, ChevronRight, Tag } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    label: "Implants", title: "Dental Implants",
    from: "6 500 MAD",
    blurb: "Permanent, titanium-anchored tooth replacements built for a lifetime of function and aesthetics.",
    items: [
      { name: "Titanium Implant Fixture", price: "6 500 MAD", desc: "Surgical placement of a premium titanium post." },
      { name: "Zirconia Implant Crown", price: "2 800 MAD", desc: "Custom-milled crown matched to your adjacent teeth." },
      { name: "Bone Grafting", price: "2 500 MAD", desc: "Guided regeneration for sufficient bone volume." },
      { name: "Full Implant Package", price: "9 000 MAD", desc: "Fixture + zirconia crown - all inclusive." },
      { name: "Implant-Supported Bridge", price: "From 18 000 MAD", desc: "3-unit fixed bridge on two implants." },
    ],
  },
  {
    label: "Prosthetics", title: "Dental Prosthetics",
    from: "1 800 MAD",
    blurb: "Custom-crafted crowns, bridges and dentures designed for precision fit and natural look.",
    items: [
      { name: "Ceramic Crown", price: "1 800 MAD", desc: "Tooth-colored porcelain crown for damaged teeth." },
      { name: "Zirconia Crown", price: "2 800 MAD", desc: "High-strength monolithic zirconia crown." },
      { name: "Fixed Bridge (3 units)", price: "From 4 500 MAD", desc: "Cemented porcelain bridge replacing a missing tooth." },
      { name: "Complete Removable Denture", price: "From 3 500 MAD", desc: "Full arch custom acrylic denture." },
      { name: "Partial Removable Denture", price: "From 2 500 MAD", desc: "Metal-framed partial denture." },
    ],
  },
  {
    label: "Orthodontics", title: "Orthodontics",
    from: "800 MAD",
    blurb: "Modern alignment solutions including braces, ceramic brackets, and invisible aligners.",
    items: [
      { name: "Metal Braces (Full Treatment)", price: "From 8 000 MAD", desc: "Full fixed metal bracket therapy - both arches." },
      { name: "Ceramic Braces", price: "From 12 000 MAD", desc: "Tooth-colored ceramic brackets, discreet correction." },
      { name: "Clear Aligner Therapy", price: "From 18 000 MAD", desc: "Invisible removable aligners with digital planning." },
      { name: "Retainer (per arch)", price: "800 MAD", desc: "Fixed or removable retention after treatment." },
      { name: "Early Interceptive Orthodontics", price: "From 4 000 MAD", desc: "Phase-1 treatment for children's jaw development." },
    ],
  },
  {
    label: "Whitening", title: "Teeth Whitening",
    from: "250 MAD",
    blurb: "Safely brighten your smile by up to 8 shades with our professional-grade whitening protocols.",
    items: [
      { name: "In-Office Laser Whitening", price: "1 800 MAD", desc: "Single-session professional whitening." },
      { name: "Take-Home Whitening Kit", price: "800 MAD", desc: "Custom trays with professional-grade gel." },
      { name: "Combined Whitening", price: "2 200 MAD", desc: "In-office session + home maintenance kit." },
      { name: "Stain Removal & Polish", price: "250 MAD", desc: "Air-flow prophylaxis - coffee, tea, tobacco stains." },
    ],
  },
  {
    label: "Periodontal", title: "Periodontal Treatment",
    from: "350 MAD",
    blurb: "Specialized care for gum health to protect the foundation of your teeth and overall wellbeing.",
    items: [
      { name: "Full Scaling & Polishing", price: "350 MAD", desc: "Supragingival removal of plaque and tartar." },
      { name: "Deep Scaling & Root Planing", price: "600 MAD / quadrant", desc: "Subgingival curettage for active periodontal pockets." },
      { name: "Periodontal Surgery", price: "From 2 000 MAD", desc: "Flap surgery for advanced gum disease." },
      { name: "Gum Graft", price: "From 2 500 MAD", desc: "Connective tissue graft for recession coverage." },
      { name: "Periodontal Maintenance", price: "400 MAD", desc: "Quarterly supportive therapy session." },
    ],
  },
  {
    label: "Radiology", title: "Radiology",
    from: "60 MAD",
    blurb: "Advanced digital imaging providing accurate diagnostics with minimal radiation exposure.",
    items: [
      { name: "Periapical X-Ray", price: "60 MAD", desc: "Digital intraoral X-ray per film." },
      { name: "Bitewing X-Rays (set of 4)", price: "200 MAD", desc: "Interproximal view for detecting cavities." },
      { name: "Panoramic Radiograph (OPG)", price: "250 MAD", desc: "Full-arch panoramic view - teeth, jaws, sinuses." },
      { name: "Cephalometric X-Ray", price: "300 MAD", desc: "Lateral skull view for orthodontic planning." },
      { name: "CBCT 3D Cone-Beam Scan", price: "From 1 200 MAD", desc: "3D scan for implant planning and complex diagnoses." },
    ],
  },
  {
    label: "Other", title: "Other Treatments",
    from: "200 MAD",
    blurb: "Comprehensive dental care for patients of all ages, from routine checkups to emergency visits.",
    items: [
      { name: "Initial Consultation", price: "200 MAD", desc: "Full oral exam, diagnosis, and personalized plan." },
      { name: "Simple Extraction", price: "300 MAD", desc: "Routine removal of a non-impacted tooth." },
      { name: "Surgical Extraction", price: "800 MAD", desc: "Surgical removal of impacted or multi-rooted teeth." },
      { name: "Composite Filling (per tooth)", price: "400 MAD", desc: "Tooth-colored resin for cavities." },
      { name: "Root Canal Treatment", price: "From 1 200 MAD", desc: "Endodontic therapy to save a damaged tooth." },
      { name: "Children's Preventive Visit", price: "250 MAD", desc: "Exam, fluoride, and fissure sealants for children." },
    ],
  },
];

export default function PricingSummary() {
  const [active, setActive] = useState(0);
  const cat = categories[active];

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue/5 blur-[120px] rounded-full pointer-events-none -mr-48 -mt-48" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-blue" />
            <span className="text-[11px] font-black text-blue tracking-[0.2em] uppercase">Invest in your Smile</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading text-[clamp(32px,5vw,56px)] font-black text-navy leading-[1.05] tracking-tight mb-8"
          >
            Transparent Pricing <br/>
            <span className="text-blue">Without Compromise.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-[17px] text-slate-500 leading-relaxed font-medium max-w-xl"
          >
            We believe in honest, upfront costs. Every clinical procedure is detailed so you can focus on your recovery, not the bill.
          </motion.p>
        </div>

        {/* ── MOBILE: Compact tab + accordion layout ── */}
        <div className="block xl:hidden">
          {/* Category pill selector */}
          <div className="flex gap-2 overflow-x-auto pb-3 mb-5 snap-x no-scrollbar" style={{ scrollbarWidth: "none" }}>
            {categories.map((c, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`snap-start shrink-0 px-4 py-2 rounded-xl font-bold text-[13px] transition-all duration-200 relative overflow-hidden ${
                  active === i
                    ? "bg-navy text-white shadow-lg"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Active category header card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`mobile-header-${active}`}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="bg-navy rounded-[28px] p-5 mb-4 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue/20 blur-[40px] rounded-full pointer-events-none" />
              <div className="relative z-10">
                <p className="text-[10px] font-black text-white/40 tracking-[0.2em] uppercase mb-1">From</p>
                <p className="font-heading text-[28px] font-black text-blue leading-none mb-2">{cat.from}</p>
                <h3 className="font-heading text-[18px] font-black leading-tight mb-1">{cat.title}</h3>
                <p className="text-white/60 text-[13px] leading-relaxed">{cat.blurb}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Item list */}
          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {cat.items.map((item, i) => (
                <motion.div
                  key={`${active}-${i}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle2 size={14} className="text-blue/40 shrink-0" />
                        <h4 className="font-heading text-[15px] font-black text-navy leading-tight">{item.name}</h4>
                      </div>
                      <p className="text-slate-400 text-[12px] leading-relaxed ml-5">{item.desc}</p>
                    </div>
                    <span className="font-heading text-[16px] font-black text-blue tracking-tight shrink-0">{item.price}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile CTA */}
          <Link
            href="/contact"
            className="mt-5 flex items-center justify-center gap-2 bg-blue text-white py-4 rounded-2xl font-bold text-[14px] shadow-lg shadow-blue/20 w-full"
          >
            Get a Quote <ArrowRight size={16} />
          </Link>
        </div>

        {/* ── DESKTOP: Original tab layout ── */}
        <div className="hidden xl:block">
          {/* Tab Selection Strip */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-8 snap-x no-scrollbar" style={{ scrollbarWidth: "none" }}>
          {categories.map((c, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`snap-start shrink-0 px-7 py-3.5 rounded-2xl font-bold text-[14px] transition-all duration-300 relative overflow-hidden ${
                active === i
                  ? "text-white shadow-xl shadow-blue/20"
                  : "bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-navy"
              }`}
            >
              {active === i && (
                <motion.div
                  layoutId="pricingTabActive"
                  className="absolute inset-0 bg-navy z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{c.label}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Pricing Board */}
        <div className="grid grid-cols-1 xl:grid-cols-[400px_1fr] gap-8 lg:gap-16 items-start">
          
          {/* Left: Category Showcase Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="xl:sticky xl:top-32"
            >
              <div className="bg-navy rounded-[40px] p-10 lg:p-12 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue/20 blur-[60px] rounded-full pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
                      <Tag size={20} className="text-blue" />
                    </div>
                    <span className="text-[11px] font-black text-white/40 tracking-[0.2em] uppercase">Category {String(active + 1).padStart(2, "0")}</span>
                  </div>
                  
                  <h3 className="font-heading text-[28px] lg:text-[34px] font-black leading-tight mb-6">{cat.title}</h3>
                  <p className="text-white/60 text-[15px] leading-relaxed mb-8">{cat.blurb}</p>
                  
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
                    <p className="text-[11px] text-white/30 uppercase tracking-[0.2em] font-black mb-2">Packages Start From</p>
                    <p className="font-heading text-[36px] font-black text-blue">{cat.from}</p>
                  </div>
                  
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 bg-blue text-white w-full justify-center py-5 rounded-2xl font-bold text-[15px] hover:bg-white hover:text-navy transition-all duration-300 shadow-lg shadow-blue/20"
                  >
                    Get a Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right: Detailed Price List */}
          <div className="space-y-4 lg:space-y-5">
            <AnimatePresence mode="popLayout">
              {cat.items.map((item, i) => (
                <motion.div
                  key={`${active}-${i}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  className="group relative p-4 lg:p-5 rounded-[28px] bg-white border border-slate-100 hover:border-blue/20 hover:shadow-[0_20px_40px_-12px_rgba(13,27,75,0.08)] transition-all duration-500"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CheckCircle2 size={16} className="text-blue/30 group-hover:text-blue transition-colors" />
                        <h4 className="font-heading text-[18px] lg:text-[20px] font-black text-navy leading-tight">{item.name}</h4>
                      </div>
                      <p className="text-slate-400 text-[14px] leading-relaxed ml-7 max-w-lg">{item.desc}</p>
                    </div>
                    
                    <div className="flex items-center gap-4 md:text-right pl-7 md:pl-0">
                      <div className="h-px w-8 bg-slate-100 hidden md:block" />
                      <div className="flex flex-col items-start md:items-end">
                        <span className="font-heading text-[22px] lg:text-[24px] font-black text-blue tracking-tight">{item.price}</span>
                        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mt-1">Starting Price</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Accent */}
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 hidden lg:block">
                    <ChevronRight size={24} className="text-blue/20" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Price Disclaimer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 flex items-start gap-4 p-6 lg:p-8 rounded-[32px] bg-slate-50 border border-slate-100"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                <Info size={18} className="text-blue" />
              </div>
              <p className="text-[14px] text-slate-500 leading-relaxed">
                <span className="font-bold text-navy">Please Note:</span> Our prices are transparent but may vary based on clinical complexity and material choice. A comprehensive medical quote will be provided after your initial scan and physical examination.
              </p>
            </motion.div>
          </div>

        </div>{/* end desktop xl:block */}
      </div>
    </section>
  );
}
