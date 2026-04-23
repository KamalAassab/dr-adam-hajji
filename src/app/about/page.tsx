"use client";

import PageHeader from "@/components/layout/PageHeader";
import AboutSummary from "@/components/sections/AboutSummary";
import { motion } from "framer-motion";
import { Shield, Heart, Zap, Award } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-blue" />,
      title: "Trust & Safety",
      description: "We strictly adhere to the highest international standards of sterilization and hygiene.",
    },
    {
      icon: <Heart className="w-8 h-8 text-blue" />,
      title: "Compassionate Care",
      description: "We treat every patient like family, ensuring a pain-free and comfortable experience.",
    },
    {
      icon: <Zap className="w-8 h-8 text-blue" />,
      title: "Advanced Technology",
      description: "Utilizing 3D imaging, laser dentistry, and digital impressions for precise results.",
    },
    {
      icon: <Award className="w-8 h-8 text-blue" />,
      title: "Clinical Excellence",
      description: "Our specialists continuously update their skills to offer the best modern treatments.",
    },
  ];

  return (
    <>
      <PageHeader title="About Dr.ADAM HAJJI Clinic" breadcrumb="About Us" />
      <AboutSummary hideLink={true} />

      <section className="py-20 lg:py-32 bg-[#F8FAFF]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue/5 border border-blue/10 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue" />
              <span className="text-[13px] font-bold text-blue tracking-[0.06em] uppercase">Our Philosophy</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-3xl md:text-5xl font-black text-navy mb-6"
            >
              Excellence in <span className="text-blue">Every Detail</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 leading-relaxed text-lg"
            >
              Dr. ADAM HAJJI Dental Clinic was founded with a single mission: to redefine the dental experience in El Jadida by combining elite medical expertise with a luxurious, stress-free environment.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-3">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed text-[15px]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
