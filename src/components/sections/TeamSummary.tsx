"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const team = [
  { 
    name: "Dr. HAJJI Adam", 
    role: "Founder & Lead Dentist", 
    image: "/dental_team_sarah.png", // Keep a placeholder if needed, or update if we have a specific image. Wait, the user has mascot but we don't have a picture. I'll use the placeholder.
    description: "Dr. HAJJI Adam is a highly skilled dental professional dedicated to providing painless, advanced dental care with a focus on cosmetic and restorative treatments."
  }
];

const stats = [
  { label: "Happy Patients", value: 333, suffix: "+" },
  { label: "Teeth Whitened", value: 71, suffix: "+" },
  { label: "Dental Implants", value: 27, suffix: "+" },
  { label: "Years of Experience", value: 10, suffix: "+" },
];

function Counter({ from, to, duration = 2.5 }: { from: number; to: number; duration?: number }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        const ease = 1 - Math.pow(1 - progress, 4); // easeOutQuart
        setCount(Math.floor(ease * (to - from) + from));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function TeamSummary({ hideLink = false }: { hideLink?: boolean }) {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-100/30 blur-[100px] rounded-full mix-blend-multiply pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue/5 border border-blue/10 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue" />
              <span className="text-[13px] font-bold text-blue tracking-[0.06em] uppercase">Medical Experts</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="font-heading text-[clamp(32px,5vw,48px)] font-black text-navy leading-[1.1] tracking-tight mb-6"
            >
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-[#2B5DE4]">Specialists</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-[16px] text-[#475569] leading-[1.8] font-medium"
            >
              Our experienced dental team is here to make every visit positive and personalized. With gentle hands and caring hearts, we deliver exceptional results.
            </motion.p>
          </div>
          
          {!hideLink && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="shrink-0"
            >
              <Link
                href="/team"
                className="group relative inline-flex items-center justify-center bg-navy text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all duration-300 hover:bg-blue hover:scale-105 hover:shadow-[0_12px_30px_rgba(74,123,247,0.25)] overflow-hidden"
              >
                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:animate-[shine_1.5s_ease-out_infinite]" />
                <span className="relative z-10 flex items-center">
                  View Full Team
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          )}
        </div>

        <div className="flex justify-center mb-24">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[40px] overflow-hidden bg-slate-50 w-full max-w-md shadow-2xl"
            >
              {/* Editorial Image Style */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#F0F4FA]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105 filter group-hover:brightness-105"
                  sizes="(max-width: 640px) 100vw, 500px"
                />
                {/* Glassmorphic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent flex items-end justify-center p-8">
                  
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="font-heading text-2xl lg:text-3xl font-black text-white mb-2 tracking-tight drop-shadow-md">{member.name}</h4>
                    <p className="text-[14px] font-bold text-blue uppercase tracking-widest mb-6 drop-shadow-sm">{member.role}</p>
                    
                    <div className="flex gap-4 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-blue hover:scale-110 transition-all cursor-pointer border border-white/30 shadow-lg">
                        <InstagramIcon />
                      </div>
                      <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-blue hover:scale-110 transition-all cursor-pointer border border-white/30 shadow-lg">
                        <LinkedinIcon />
                      </div>
                      <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-blue hover:scale-110 transition-all cursor-pointer border border-white/30 shadow-lg">
                        <TwitterIcon />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Counter Stats */}
        <div className="relative p-8 lg:p-12 bg-navy rounded-[40px] overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue/30 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue/20 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                className="text-center relative"
              >
                {idx !== 0 && <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/10 -ml-6" />}
                
                <strong className="font-heading text-[clamp(44px,6vw,64px)] font-black text-white leading-none flex justify-center items-start tracking-tighter drop-shadow-md">
                  <Counter from={0} to={stat.value} />
                  <sup className="text-[clamp(24px,3vw,36px)] font-bold text-blue ml-1 mt-1">{stat.suffix}</sup>
                </strong>
                <span className="block mt-4 text-[14px] lg:text-[15px] text-blue-100 font-medium tracking-wide">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
