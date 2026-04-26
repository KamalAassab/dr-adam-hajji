"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer: "We recommend visiting the dentist every six months for a routine checkup and cleaning. Regular visits help detect potential issues early and keep your oral health in top condition.",
  },
  {
    question: "What should I do in a dental emergency?",
    answer: "In a dental emergency, contact our office immediately. We offer emergency appointments to address urgent issues like severe pain, broken teeth, or knocked-out teeth as quickly as possible.",
  },
  {
    question: "Do you offer services for kids?",
    answer: "Yes! We offer specialized pediatric dentistry services in a friendly, comfortable environment designed to make children feel at ease during their dental visits.",
  },
  {
    question: "What are my options for replacing missing teeth?",
    answer: "We offer several options including dental implants, bridges, and dentures. During your consultation, we'll discuss which option best suits your needs, budget, and oral health goals.",
  },
  {
    question: "Is teeth whitening safe?",
    answer: "Yes, professional teeth whitening is safe when performed or supervised by a dental professional. We use clinically approved whitening agents that effectively brighten your smile without harming your enamel.",
  },
];


const youtubeShorts = [
  "7auqgpTxnII",
  "0V6AhZ-h2pU",
  "WTRO7k5pkGM",
  "Puw_C8wJVvA",
  "5P-HizFW4FU",
];

function VideoCard({ videoId, index }: { videoId: string; index: number }) {
  const [active, setActive] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="snap-center shrink-0 w-[260px] sm:w-[280px] rounded-[32px] overflow-hidden bg-transparent shadow-2xl group transition-all duration-500 hover:-translate-y-2"
      style={{ aspectRatio: "9/16" }}
    >
      {!active ? (
        <div className="relative w-full h-full cursor-pointer" onClick={() => setActive(true)}>
          <Image
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt="Dental video thumbnail"
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
            sizes="280px"
          />
          {/* Premium Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-blue group-hover:scale-110 transition-all duration-500 shadow-2xl">
              <Play className="w-6 h-6 ml-1 fill-current" />
            </div>
          </div>
 
          {/* Label */}
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-[10px] font-black text-blue tracking-[0.2em] uppercase mb-1">Educational</p>
            <p className="text-white font-bold text-sm leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">Watch Procedure</p>
          </div>
        </div>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&modestbranding=1&rel=0&playsinline=1`}
          title="Dental short"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0 bg-white"
        />
      )}
    </motion.div>
  );
}

export default function FAQSummary() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">

        {/* ━━━━━━━ FAQ ━━━━━━━ */}
        <div className="grid grid-cols-1 lg:grid-cols-[38%_1fr] gap-12 lg:gap-20 items-start">

          {/* Left — Sticky editorial header */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-blue shrink-0" />
              <span className="text-[11px] font-black text-blue tracking-[0.22em] uppercase">FAQ</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-[clamp(32px,4.5vw,52px)] font-black text-navy leading-[1.08] tracking-tight mb-6"
            >
              Your questions,<br />
              <span className="text-blue">answered.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-[15px] lg:text-[16px] text-slate-500 leading-[1.75] max-w-xs"
            >
              Honest, clear answers to the questions our patients ask before their first visit.
            </motion.p>
          </div>

          {/* Right — Numbered accordion */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="divide-y divide-slate-100"
          >
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className={`transition-colors duration-300 ${isOpen ? "bg-blue-pale" : "hover:bg-[#F8FAFF]"} -mx-4 px-4 rounded-2xl`}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center gap-5 py-5 text-left focus:outline-none group"
                  >
                    {/* Index number */}
                    <span className={`shrink-0 font-heading text-[13px] font-black w-8 transition-colors duration-300 ${isOpen ? "text-blue" : "text-slate-300 group-hover:text-slate-400"}`}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    {/* Question text */}
                    <span className={`flex-1 font-heading text-[15px] lg:text-[17px] font-black leading-snug transition-colors duration-300 ${isOpen ? "text-navy" : "text-navy/80 group-hover:text-navy"}`}>
                      {faq.question}
                    </span>

                    {/* Toggle icon */}
                    <span className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-400 ${isOpen ? "bg-blue border-blue text-white rotate-45" : "border-slate-200 text-slate-400 group-hover:border-blue group-hover:text-blue"}`}>
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-3.5 h-3.5">
                        <line x1="8" y1="2" x2="8" y2="14" />
                        <line x1="2" y1="8" x2="14" y2="8" />
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-[14px] lg:text-[15px] text-slate-500 leading-[1.8] pb-5 pl-13 pr-12"
                           style={{ paddingLeft: "3.25rem" }}>
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* ━━━━━━━ DENTAL SHORTS ━━━━━━━ */}
        <div className="mt-24 lg:mt-32 pt-16 border-t border-slate-100">

          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-blue shrink-0" />
                <span className="text-[11px] font-black text-blue tracking-[0.22em] uppercase">Educational Content</span>
              </div>
              <h3 className="font-heading text-[clamp(26px,3.5vw,42px)] font-black text-navy leading-[1.08]">
                Knowledge is the first step to <br />
                <span className="text-blue">a healthier smile.</span>
              </h3>
            </div>

            <a
              href="https://www.youtube.com/@Mondentiste"
              target="_blank"
              rel="noreferrer"
              className="group shrink-0 inline-flex items-center gap-2.5 bg-[#FF0000] text-white px-8 py-4 rounded-full font-bold text-[14px] hover:bg-[#cc0000] transition-all duration-300 shadow-xl shadow-red-600/20"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Explore Channel
            </a>
          </div>

          {/* Video strip */}
          <div
            className="flex gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory pb-8 no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0"
            style={{ scrollbarWidth: "none" }}
          >
            {youtubeShorts.map((id, i) => (
              <VideoCard key={id} videoId={id} index={i} />
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mt-6 hidden lg:block"
          >
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">
              Scroll horizontally to explore more videos
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
