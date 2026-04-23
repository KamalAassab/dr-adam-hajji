"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

export default function FAQSummary({ hideLink = false }: { hideLink?: boolean }) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[14px] font-semibold text-blue tracking-[0.04em] mb-3 uppercase">
              Everything You Need to Know
            </p>
            <h2 className="font-heading text-[clamp(28px,4vw,44px)] font-bold text-navy leading-[1.15] mb-6">
              Frequently Asked Questions
            </h2>
            {!hideLink && (
              <Link
                href="/faq"
                className="inline-flex items-center justify-center bg-blue text-white px-7 py-3.5 rounded-xl font-semibold text-[15px] border-2 border-blue transition-all hover:bg-navy hover:border-navy hover:-translate-y-1 shadow-md hover:shadow-xl"
              >
                See All FAQs
              </Link>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Accordion className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-slate-200 py-2">
                  <AccordionTrigger className="text-left font-medium text-[15px] text-navy hover:text-blue hover:no-underline [&[data-state=open]]:text-blue">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px] text-gray-600 leading-[1.7] pb-4 pr-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative h-[380px] sm:h-[480px] lg:h-[540px] w-full rounded-[20px] overflow-hidden group cursor-pointer shadow-xl"
        >
          <Image
            src="/dental_faq_video.png"
            alt="Dental procedure in progress"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-blue shadow-lg transition-all duration-300 group-hover:bg-blue group-hover:text-white group-hover:scale-110 border-[3px] border-white/80">
            <Play className="w-7 h-7 ml-1 fill-current" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
