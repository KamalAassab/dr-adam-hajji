"use client";

import PageHeader from "@/components/layout/PageHeader";
import AboutSummary from "@/components/sections/AboutSummary";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Honest diagnosis, always.",
    body: "We tell patients what they need to know - not what they want to hear. Every treatment plan is explained clearly, with options, timelines, and real costs.",
  },
  {
    number: "02",
    title: "No unnecessary procedures.",
    body: "We only recommend treatment that is clinically indicated. If watchful waiting is the right choice, we say so. Your trust is more valuable than any invoice.",
  },
  {
    number: "03",
    title: "Precision over speed.",
    body: "We use digital workflows, 3D imaging, and guided protocols because accuracy matters. A well-placed implant or a well-fitted crown lasts a lifetime.",
  },
  {
    number: "04",
    title: "Comfort is not optional.",
    body: "Anxiety and pain are legitimate concerns. We take them seriously - with proper anaesthesia, calm communication, and enough time per appointment.",
  },
];

const milestones = [
  { year: "2009", text: "Clinic founded in El Jadida" },
  { year: "2013", text: "Introduced digital panoramic radiology" },
  { year: "2017", text: "Launched implantology & bone grafting unit" },
  { year: "2021", text: "Integrated CBCT 3D cone-beam imaging" },
  { year: "2024", text: "Opened orthodontics & clear aligners service" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About the Clinic" breadcrumb="About Us" />
      <AboutSummary hideLink={true} />

      {/* -- Principles section -- */}
      <section className="py-24 lg:py-32 bg-[#F8FAFF]">
        <div className="container mx-auto px-6">

          {/* Header */}
          <div className="max-w-xl mb-16">
            <p className="text-[12px] font-bold text-blue tracking-[0.14em] uppercase mb-4">
              How we work
            </p>
            <h2 className="font-heading text-[clamp(28px,4vw,44px)] font-black text-navy leading-[1.1] tracking-tight">
              Four principles we never compromise on.
            </h2>
          </div>

          {/* Principles list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
            {principles.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white p-8 lg:p-10 group hover:bg-navy transition-colors duration-300"
              >
                <span className="block font-heading text-[11px] font-black text-blue group-hover:text-blue-300 tracking-[0.16em] uppercase mb-4 transition-colors">
                  {p.number}
                </span>
                <h3 className="font-heading text-[20px] lg:text-[22px] font-black text-navy group-hover:text-white mb-3 transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-slate-500 group-hover:text-white/70 text-[15px] leading-[1.7] transition-colors duration-300">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Timeline section -- */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">

            {/* Left sticky label */}
            <div className="lg:sticky lg:top-32">
              <p className="text-[12px] font-bold text-blue tracking-[0.14em] uppercase mb-4">Timeline</p>
              <h2 className="font-heading text-[clamp(28px,4vw,42px)] font-black text-navy leading-[1.1] tracking-tight mb-6">
                15 years,<br />step by step.
              </h2>
              <p className="text-slate-500 text-[15px] leading-[1.75] max-w-[340px]">
                Each upgrade we made was driven by one goal: better outcomes and a more comfortable experience for every patient.
              </p>
            </div>

            {/* Right timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-slate-200" />

              <div className="flex flex-col gap-10">
                {milestones.map((m, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-start gap-6 pl-8 relative"
                  >
                    {/* Dot */}
                    <div className="absolute left-0 top-[5px] w-[22px] h-[22px] rounded-full border-2 border-blue bg-white flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-blue" />
                    </div>
                    <div>
                      <p className="font-heading text-[13px] font-black text-blue tracking-widest mb-1">{m.year}</p>
                      <p className="text-navy font-semibold text-[16px]">{m.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- CTA strip -- */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-white/50 text-[13px] font-semibold tracking-widest uppercase mb-2">Ready to start?</p>
            <h3 className="font-heading text-[clamp(22px,3vw,34px)] font-black text-white leading-tight">
              Book your first consultation.
            </h3>
          </div>
          <Link
            href="/contact"
            className="group shrink-0 inline-flex items-center gap-2 bg-blue text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all duration-300 hover:bg-white hover:text-navy"
          >
            Book Appointment
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
