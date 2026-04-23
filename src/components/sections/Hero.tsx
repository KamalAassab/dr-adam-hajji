"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,123,247,0.06)_1px,transparent_1px)] bg-[size:24px_24px] opacity-70" />
        
        {/* Top subtle light overlay */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent" />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-8 lg:gap-12 py-12 lg:min-h-[calc(100vh-72px)] relative z-10">
        
        <div className="flex flex-col text-center lg:text-left pt-6 lg:pt-0 relative z-20 order-2 lg:order-1">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto lg:mx-0 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/60 border border-blue/10 text-navy font-semibold text-[13px] tracking-[0.06em] backdrop-blur-md shadow-sm mb-6 lg:mb-8 w-max"
          >
            <span className="relative flex w-2 h-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue opacity-60"></span>
              <span className="relative inline-flex rounded-full w-2 h-2 bg-blue"></span>
            </span>
            Welcome to Dr.ADAM Clinic
          </motion.div>

          {/* Staggered Headline */}
          <div className="font-heading text-[clamp(40px,9vw,130px)] font-black leading-[0.88] tracking-[-0.04em] text-navy mb-8 lg:mb-10 relative">
            <motion.div
              initial={{ opacity: 0, y: 40, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Exceptional
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue to-[#2B5DE4]">Dental</span> Care
            </motion.div>
          </div>

          {/* Refined Paragraph with Glassmorphic Line */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative lg:ml-[15%] xl:ml-[22%] mb-10 lg:mb-12 pl-4 lg:pl-8"
          >
            {/* Vertical Accent Line */}
            <div className="hidden lg:block absolute left-0 top-1 bottom-1 w-[3px] bg-gradient-to-b from-blue via-blue/50 to-transparent rounded-full" />
            
            <p className="text-[#475569] text-[15px] lg:text-[17px] max-w-[420px] leading-[1.7] lg:leading-[1.8] font-medium text-center lg:text-left mx-auto lg:mx-0">
              We offer high-quality dental care tailored for the whole family. From routine checkups to advanced treatments, our compassionate team ensures your smile stays healthy and confident.
            </p>
          </motion.div>

          {/* Interactive Actions Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8 justify-center lg:justify-start lg:ml-[15%] xl:ml-[22%]"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center bg-navy text-white px-8 py-4.5 rounded-full font-bold text-[16px] transition-all duration-300 hover:bg-blue hover:scale-105 hover:shadow-[0_12px_40px_rgba(74,123,247,0.3)] overflow-hidden w-full sm:w-auto"
            >
              {/* Button Shine Effect */}
              <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:animate-[shine_1.5s_ease-out_infinite]" />
              
              <span className="relative z-10 flex items-center">
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
              </span>
            </Link>

            <div className="flex items-center gap-4 bg-white/60 backdrop-blur-sm pr-6 p-2 rounded-full border border-white shadow-sm">
              <div className="flex -space-x-3 ml-1">
                {[
                  "https://randomuser.me/api/portraits/men/32.jpg",
                  "https://randomuser.me/api/portraits/men/44.jpg",
                  "https://randomuser.me/api/portraits/men/55.jpg",
                ].map((src, i) => (
                  <div key={i} className="relative w-10 h-10 rounded-full border-[2.5px] border-white overflow-hidden shadow-sm transition-transform hover:-translate-y-1 hover:z-10 cursor-pointer">
                    <Image src={src} alt="Customer" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-left py-1">
                <strong className="block font-heading font-extrabold text-[16px] leading-none text-navy mb-0.5 tracking-tight">23k+</strong>
                <span className="text-[12px] text-gray-500 font-medium">Happy Patients</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Image Composition */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex justify-center items-end order-1 lg:order-2 z-10 lg:-ml-12 xl:-ml-24 pt-4 lg:pt-0"
        >
          {/* Floating Decorative Elements */}
          <motion.div
            animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[5%] lg:top-[10%] left-[0%] lg:left-[5%] w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white/80 backdrop-blur-md shadow-xl border border-white flex items-center justify-center text-blue z-20 rotate-[-12deg]"
          >
            <Sparkles className="w-6 h-6 lg:w-7 lg:h-7" />
          </motion.div>

          <motion.div
            animate={{ y: [20, -20, 20], scale: [1, 1.05, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[20%] right-[5%] w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-tr from-blue to-blue-light opacity-90 shadow-lg blur-[2px] z-0"
          />

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative w-[70%] max-w-[400px] xl:max-w-[650px] aspect-[4/5] scale-100 xl:scale-105 transform-gpu lg:origin-bottom z-10 mx-auto"
          >
            <Image
              src={toothMascot}
              alt="Friendly tooth mascot holding a toothbrush"
              fill
              className="object-contain drop-shadow-[0_20px_40px_rgba(13,27,75,0.15)]"
              priority
              placeholder="blur"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
