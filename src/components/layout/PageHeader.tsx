"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  breadcrumb?: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <section className="relative pt-[140px] pb-[64px] bg-gradient-to-b from-blue-pale/80 to-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-light/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-[clamp(36px,5vw,56px)] font-black text-navy mb-0"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
