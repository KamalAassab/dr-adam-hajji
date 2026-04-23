"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutSummary({ hideLink = false }: { hideLink?: boolean }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [40, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  const features = [
    "Personalized Treatment Plans",
    "State-of-the-Art Technology",
    "Gentle Care for Kids and Adults",
    "Flexible Appointment Scheduling",
  ];

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F8FAFF] rounded-l-[100px] opacity-60 pointer-events-none" />
      <div className="absolute top-[20%] left-[-5%] w-72 h-72 bg-blue-100/40 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center relative z-10">
        
        {/* Parallax Images Grid */}
        <div className="relative max-w-[550px] mx-auto lg:mx-0 w-full h-[550px] sm:h-[600px]">
          {/* Decorative Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full border border-blue-100 bg-white shadow-2xl opacity-50 pointer-events-none" />
          
          <motion.div
            style={{ y: y1, scale }}
            className="absolute left-0 top-[10%] w-[65%] h-[60%] rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(13,27,75,0.12)] border-[8px] border-white z-20"
          >
            <div className="absolute inset-0 bg-blue/10 mix-blend-overlay z-10" />
            <Image
              src="/dental_about1.png"
              alt="Dentist examining patient"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 80vw, 40vw"
            />
          </motion.div>
          
          <motion.div
            style={{ y: y2 }}
            className="absolute right-0 bottom-[10%] w-[55%] h-[55%] rounded-[30px] overflow-hidden shadow-[0_30px_60px_rgba(13,27,75,0.15)] border-[8px] border-white z-30"
          >
            <Image
              src="/dental_about2.png"
              alt="Dentist with young patient"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 60vw, 30vw"
            />
            {/* Experience Badge */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-white">
              <div className="flex items-center gap-2">
                <span className="font-heading font-black text-[24px] text-blue leading-none">15+</span>
                <span className="text-[11px] font-bold text-navy leading-tight uppercase tracking-wider">Years<br/>Experience</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left relative"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue/5 border border-blue/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue" />
            <span className="text-[13px] font-bold text-blue tracking-[0.06em] uppercase">About Our Clinic</span>
          </div>
          
          <h2 className="font-heading text-[clamp(32px,5vw,52px)] font-black text-navy leading-[1.1] mb-6 tracking-tight">
            Professional & Personalized <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-[#2B5DE4]">Dental Excellence</span>
          </h2>
          
          <p className="text-[#475569] text-[16px] lg:text-[17px] leading-[1.8] mb-8 max-w-[540px] mx-auto lg:mx-0 font-medium">
            We offer high-quality dental care tailored for the whole family. From routine checkups to advanced treatments, our compassionate team ensures your smile stays healthy and confident using the latest medical technology.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10 text-left max-w-[540px] mx-auto lg:mx-0">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                className="flex items-start gap-3 group"
              >
                <div className="w-6 h-6 rounded-full bg-blue/10 flex items-center justify-center shrink-0 mt-0.5 transition-colors group-hover:bg-blue">
                  <Check className="w-3.5 h-3.5 text-blue transition-colors group-hover:text-white" strokeWidth={3} />
                </div>
                <span className="text-[15px] font-semibold text-navy/80">{feature}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center bg-navy text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all duration-300 hover:bg-blue hover:scale-105 hover:shadow-[0_12px_30px_rgba(74,123,247,0.25)] overflow-hidden"
            >
              <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:animate-[shine_1.5s_ease-out_infinite]" />
              <span className="relative z-10 flex items-center">
                Book Appointment
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
            
            {!hideLink && (
              <Link
                href="/about"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-[15px] text-navy bg-white border-2 border-slate-200 transition-all duration-300 hover:border-blue hover:text-blue hover:shadow-lg hover:-translate-y-1"
              >
                Learn More About Us
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
