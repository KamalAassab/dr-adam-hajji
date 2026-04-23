"use client";

import PageHeader from "@/components/layout/PageHeader";
import GallerySummary from "@/components/sections/GallerySummary";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function GalleryPage() {
  return (
    <>
      <PageHeader title="Our Clinic Gallery" breadcrumb="Gallery" />
      <GallerySummary hideLink={true} />
      
      <section className="py-20 lg:py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue/20 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white mx-auto mb-8"
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-5xl font-black text-white mb-6 max-w-2xl mx-auto leading-tight"
          >
            Experience Our Premium Care
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg mb-10 max-w-xl mx-auto"
          >
            Visit us and see the difference for yourself. Book your consultation today and experience dental care like never before.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center bg-blue text-white px-8 py-4 rounded-full font-bold text-[16px] transition-all duration-300 hover:bg-white hover:text-navy hover:scale-105 hover:shadow-[0_12px_30px_rgba(74,123,247,0.3)]"
            >
              Book an Appointment
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
