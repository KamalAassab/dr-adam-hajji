"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "General Dentistry",
    desc: "Complete oral care for every smile with cleanings, exams, and preventive care routines.",
    details: [
      "Comprehensive oral exams",
      "Professional teeth cleaning",
      "Digital X-rays & diagnostics",
      "Cavity fillings & sealants"
    ],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="12" y="8" width="40" height="48" rx="6" />
        <path d="M20 20h24M20 28h24M20 36h16" />
        <circle cx="44" cy="44" r="8" fill="white" strokeWidth="2" />
        <path d="M41 44h6M44 41v6" stroke="currentColor" />
      </svg>
    ),
  },
  {
    title: "Cosmetic Dentistry",
    desc: "Enhance your smile's beauty with professional whitening, veneers, and aesthetic treatments.",
    details: [
      "Professional teeth whitening",
      "Custom porcelain veneers",
      "Invisalign & clear aligners",
      "Complete smile makeovers"
    ],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 8C20 8 14 18 14 26c0 6 4 12 8 16l10 14 10-14c4-4 8-10 8-16 0-8-6-18-18-18z" />
        <path d="M25 26l4 4 10-10" />
        <path d="M32 12v4M20 18l2.8 2.8M44 18l-2.8 2.8" />
      </svg>
    ),
  },
  {
    title: "Pediatric Dentistry",
    desc: "Gentle and fun dental care for kids to grow healthy, happy smiles from an early age.",
    details: [
      "Child-friendly environment",
      "Preventive care & fluoride",
      "Early orthodontic evaluation",
      "Painless treatment options"
    ],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="14" y="28" width="36" height="22" rx="6" />
        <path d="M14 34h36" />
        <path d="M22 28v-8a10 10 0 0120 0v8" />
        <circle cx="32" cy="42" r="4" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Restorative Dentistry",
    desc: "Repair and restore your teeth for lasting comfort, function, and a natural look.",
    details: [
      "Dental implants & crowns",
      "Bridges & dentures",
      "Root canal therapy",
      "Full mouth reconstruction"
    ],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 12c-8 0-14 6-14 14s6 14 14 14 14-6 14-14S40 12 32 12z" />
        <path d="M32 40v12M24 48h16" />
        <circle cx="32" cy="26" r="4" fill="currentColor" />
      </svg>
    ),
  },
];

const containerVariants: any = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function ServicesSummary({ hideLink = false }: { hideLink?: boolean }) {
  return (
    <section className="py-24 lg:py-32 bg-[#F8FAFF] relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(74,123,247,0.05)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(74,123,247,0.08)_0%,transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 lg:mb-20 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue/5 border border-blue/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue" />
            <span className="text-[13px] font-bold text-blue tracking-[0.06em] uppercase">Premium Services</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-heading text-[clamp(32px,5vw,48px)] font-black text-navy leading-[1.1] tracking-tight mb-6"
          >
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-[#2B5DE4]">Dental Care</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-[16px] text-[#475569] leading-[1.8] font-medium"
          >
            From routine checkups to advanced cosmetic procedures, we offer a full spectrum of dental services designed to keep your smile healthy and radiant.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 mb-16 lg:mb-20"
        >
          {services.map((service, idx) => {
            const CardWrapper = hideLink ? "div" : Link;
            const wrapperProps = hideLink ? {} : { href: "/services" };
            
            return (
              <motion.div key={idx} variants={itemVariants} className="h-full">
                <CardWrapper
                  {...wrapperProps as any}
                  className={`group flex flex-col h-full bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-[0_4px_20px_rgba(13,27,75,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(74,123,247,0.1)] relative overflow-hidden ${hideLink ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  {/* Hover Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-navy to-[#1a368f] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                  
                  {/* Large Background Icon */}
                  <div className="absolute right-[-10%] bottom-[-10%] w-48 h-48 text-blue/5 group-hover:text-white/5 transition-colors duration-500 z-0 pointer-events-none transform -rotate-12 group-hover:rotate-0 transition-transform">
                    {service.icon}
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-2xl bg-blue/10 flex items-center justify-center text-blue group-hover:bg-white/10 group-hover:text-white transition-colors duration-500 mb-8">
                      <div className="w-8 h-8">
                        {service.icon}
                      </div>
                    </div>
                    
                    <h3 className="font-heading text-[22px] font-bold text-navy group-hover:text-white transition-colors duration-500 mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-[15px] text-[#475569] group-hover:text-blue-pale leading-[1.7] transition-colors duration-500 mb-8 flex-1">
                      {service.desc}
                    </p>
                    
                    {hideLink ? (
                      <div className="mt-4 pt-6 border-t border-slate-100 group-hover:border-white/20 transition-colors duration-500">
                        <ul className="flex flex-col gap-3">
                          {service.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-3 text-[14px] text-slate-600 group-hover:text-white/90 transition-colors duration-500">
                              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue group-hover:bg-blue-light flex-shrink-0" />
                              <span className="leading-tight">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="mt-auto flex items-center text-[14px] font-bold text-blue group-hover:text-white transition-colors duration-500">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                      </div>
                    )}
                  </div>
                </CardWrapper>
              </motion.div>
            );
          })}
        </motion.div>

        {!hideLink && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              href="/services"
              className="group relative inline-flex items-center justify-center bg-navy text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all duration-300 hover:bg-blue hover:scale-105 hover:shadow-[0_12px_30px_rgba(74,123,247,0.25)] overflow-hidden"
            >
              <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:animate-[shine_1.5s_ease-out_infinite]" />
              <span className="relative z-10 flex items-center">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
