"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import toothMascot from "../../../public/tooth_mascot.png";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-[72px] bg-[#F8FAFF]">
      {/* Premium Background Layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft blur blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-light/10 blur-[120px] rounded-full mix-blend-multiply" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-blue/10 blur-[150px] rounded-full mix-blend-multiply" />
        
        {/* Subtle dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(53,102,234,0.06)_1px,transparent_1px)] bg-[size:24px_24px] opacity-70" />
        
        {/* Top subtle light overlay */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent" />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-12 lg:gap-20 py-12 lg:min-h-[calc(100vh-72px)] relative z-10">
        
        <div className="flex flex-col text-center lg:text-left pt-6 lg:pt-0 relative z-20 order-2 lg:order-1">

          {/* Dynamic Headline */}
          <div className="font-heading text-[clamp(40px,7vw,90px)] font-black leading-[0.85] tracking-[-0.05em] text-navy mb-10 lg:mb-14 relative">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Exceptional
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue to-[#1a44b8]">Dental</span> Care
            </motion.div>
          </div>

          {/* Refined Paragraph with Editorial Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-[12%] xl:ml-[18%] mb-12 lg:mb-16 pl-4 lg:pl-10"
          >
            {/* Vertical Accent Line */}
            <div className="hidden lg:block absolute left-0 top-1 bottom-1 w-[4px] bg-gradient-to-b from-blue via-blue/40 to-transparent rounded-full shadow-[0_0_15px_rgba(53,102,234,0.3)]" />
            
            <p className="text-[#475569] text-[16px] lg:text-[19px] max-w-[460px] leading-[1.7] lg:leading-[1.8] font-medium text-center lg:text-left mx-auto lg:mx-0">
              Personalized treatments meet digital precision. Experience a new standard of dental care where your comfort is our highest priority.
            </p>
          </motion.div>

          {/* Interactive Actions Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-6 lg:gap-10 justify-center lg:justify-start lg:ml-[12%] xl:ml-[18%]"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center bg-blue text-white px-10 py-5 rounded-full font-bold text-[16px] transition-all duration-500 hover:bg-navy hover:scale-105 hover:shadow-[0_20px_50px_rgba(53,102,234,0.4)] overflow-hidden w-full sm:w-auto"
            >
              {/* Button Shine Effect */}
              <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:animate-[shine_1.8s_ease-out_infinite]" />
              
              <span className="relative z-10 flex items-center">
                Book Appointment
                <ArrowRight className="w-5 h-5 ml-2.5 transition-transform duration-500 group-hover:translate-x-2" />
              </span>
            </Link>

            <div className="flex items-center gap-5 bg-white/40 backdrop-blur-md pr-7 p-2.5 rounded-full border border-white/50 shadow-xl transition-all hover:bg-white/60">
              <div className="flex -space-x-3.5 ml-1.5">
                {[
                  "https://randomuser.me/api/portraits/men/32.jpg",
                  "https://randomuser.me/api/portraits/men/44.jpg",
                  "https://randomuser.me/api/portraits/men/55.jpg",
                ].map((src, i) => (
                  <div key={i} className="relative w-11 h-11 rounded-full border-[3px] border-white overflow-hidden shadow-md transition-all hover:-translate-y-1.5 hover:z-10 cursor-pointer">
                    <Image src={src} alt="Customer" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-left py-1">
                <strong className="block font-heading font-black text-[18px] leading-none text-navy mb-0.5 tracking-tight">4.9/5 Rating</strong>
                <span className="text-[12px] text-gray-500 font-bold uppercase tracking-wider">Trusted by Patients</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Image Composition */}
        <div
          className="relative flex justify-center items-end order-1 lg:order-2 z-10 lg:-ml-12 xl:-ml-24 pt-4 lg:pt-0"
        >
          {/* Floating Decorative Element — Subtle glow instead of icon */}
          <div
            className="absolute top-[10%] lg:top-[15%] left-[-5%] w-32 h-32 bg-blue/15 blur-3xl rounded-full z-0"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[85%] max-w-[450px] xl:max-w-[700px] aspect-[4/5] scale-100 xl:scale-110 transform-gpu lg:origin-bottom z-10 mx-auto"
          >
            <Image
              src={toothMascot}
              alt="Friendly tooth mascot"
              fill
              className="object-contain drop-shadow-[0_30px_60px_rgba(13,27,75,0.2)]"
              priority
              placeholder="blur"
            />
            
            {/* Mascot floating animation (CSS or Motion) */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 pointer-events-none"
            />
          </motion.div>

          <div
            className="absolute bottom-[15%] right-[0%] w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-tr from-blue/20 to-blue-light/20 blur-xl z-0"
          />
        </div>
      </div>
    </section>
  );
}
