"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { use } from "react";

const data: Record<string, {
  title: string; num: string; tagline: string; intro: string; heroImage: string;
  steps: { title: string; body: string; photo: string }[];
  benefits: string[];
}> = {
  "dental-implants": {
    title: "Dental Implants", num: "01",
    tagline: "A permanent solution that feels completely natural.",
    intro: "A dental implant is a titanium post placed in the jawbone that acts as an artificial root. Once integrated, it supports a custom zirconia crown — indistinguishable from natural teeth and built to last a lifetime.",
    heroImage: "https://images.pexels.com/photos/6502305/pexels-photo-6502305.jpeg?auto=compress&cs=tinysrgb&w=1600",
    steps: [
      { title: "3D Assessment", body: "A CBCT cone-beam scan evaluates bone volume and ideal implant positioning before any treatment.", photo: "https://images.pexels.com/photos/6501853/pexels-photo-6501853.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { title: "Implant Placement", body: "The titanium fixture is placed under local anaesthesia. Integration with the bone takes 8–12 weeks.", photo: "https://images.pexels.com/photos/3779713/pexels-photo-3779713.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { title: "Crown Fitting", body: "A custom zirconia crown is fabricated and permanently fixed to the implant abutment.", photo: "https://images.pexels.com/photos/18662954/pexels-photo-18662954.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { title: "Long-Term Follow-Up", body: "Annual check-ups ensure implant stability and gum health for decades of reliable function.", photo: "https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg?auto=compress&cs=tinysrgb&w=800" },
    ],
    benefits: ["Feels like a natural tooth", "Preserves jawbone structure", "No adhesives required", "90–95% 10-year success rate", "Protects adjacent teeth"],
  },
  "dental-prosthetics": {
    title: "Dental Prosthetics", num: "02",
    tagline: "Custom-crafted restorations built to last.",
    intro: "Every prosthetic — crown, bridge, or denture — is precision-fabricated in a certified laboratory using the finest ceramic and zirconia materials, matched exactly to your natural teeth.",
    heroImage: "https://images.pexels.com/photos/18662954/pexels-photo-18662954.jpeg?auto=compress&cs=tinysrgb&w=1600",
    steps: [
      { title: "Clinical Evaluation", body: "We assess the damaged tooth, occlusion, and aesthetics before choosing the ideal prosthetic solution.", photo: "https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { title: "Preparation & Impression", body: "The tooth is prepared and a digital impression guides laboratory fabrication.", photo: "https://images.pexels.com/photos/3779713/pexels-photo-3779713.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { title: "Temporary Restoration", body: "You leave with a temporary crown while your definitive prosthetic is being crafted.", photo: "https://images.pexels.com/photos/6627574/pexels-photo-6627574.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { title: "Final Fitting", body: "The definitive restoration is cemented with meticulous attention to bite, colour, and contour.", photo: "https://images.pexels.com/photos/6627604/pexels-photo-6627604.jpeg?auto=compress&cs=tinysrgb&w=800" },
    ],
    benefits: ["Exact colour and shape match", "Porcelain & zirconia materials", "Restores full chewing function", "15–20 year lifespan", "Fixed or removable options"],
  },
  "orthodontics": {
    title: "Orthodontics", num: "03",
    tagline: "A straight smile, delivered with precision.",
    intro: "From traditional metal brackets to ceramic braces and fully invisible clear aligners — we offer the full spectrum of orthodontic solutions tailored to your anatomy and lifestyle.",
    heroImage: "https://images.pexels.com/photos/19328507/pexels-photo-19328507.jpeg?auto=compress&cs=tinysrgb&w=1600",
    steps: [
      { title: "Diagnostic Records", body: "Panoramic X-ray, cephalometric analysis, and digital photos form the basis of your plan.", photo: "https://images.pexels.com/photos/6501853/pexels-photo-6501853.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { title: "Treatment Planning", body: "We map the full tooth movement sequence and treatment duration before you commit.", photo: "https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { title: "Active Treatment", body: "Adjustment appointments every 4–6 weeks ensure teeth move safely and on schedule.", photo: "https://images.pexels.com/photos/3762435/pexels-photo-3762435.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { title: "Retention", body: "Custom retainers preserve your results long after active treatment ends.", photo: "https://images.pexels.com/photos/6627604/pexels-photo-6627604.jpeg?auto=compress&cs=tinysrgb&w=800" },
    ],
    benefits: ["Corrects crowding, spacing & bite", "Invisible aligner option", "Suitable for teens and adults", "Digital treatment preview", "Early interceptive for children"],
  },
  "teeth-whitening": {
    title: "Teeth Whitening", num: "04",
    tagline: "Up to 8 shades brighter in a single visit.",
    intro: "Our professional whitening protocol uses clinic-grade bleaching agents activated by LED — far more effective and safer than any over-the-counter product.",
    heroImage: "https://images.pexels.com/photos/6627604/pexels-photo-6627604.jpeg?auto=compress&cs=tinysrgb&w=1600",
    steps: [
      { title: "Shade Assessment", body: "We record your current shade with a standardised guide to objectively measure results.", photo: "https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { title: "Gum Protection", body: "A protective barrier is applied to gum tissue before any bleaching agent contacts the teeth.", photo: "https://images.pexels.com/photos/3779713/pexels-photo-3779713.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { title: "Whitening Session", body: "Professional gel is applied in two or three 15-minute cycles with LED activation.", photo: "https://images.pexels.com/photos/6627572/pexels-photo-6627572.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { title: "Take-Home Kit", body: "Custom trays with maintenance gel extend and preserve your results at home.", photo: "https://images.pexels.com/photos/6627604/pexels-photo-6627604.jpeg?auto=compress&cs=tinysrgb&w=800" },
    ],
    benefits: ["Up to 8 shades lighter", "Safe for enamel", "Results visible immediately", "Lasts 1–3 years", "Sensitivity-free protocol"],
  },
  "periodontal-treatment": {
    title: "Periodontal Treatment", num: "05",
    tagline: "Protecting the foundation of your smile.",
    intro: "Gum disease is the leading cause of adult tooth loss — largely silent until advanced. Our team diagnoses and treats all stages with the precision required to halt bone loss and restore gum health.",
    heroImage: "https://images.pexels.com/photos/3779713/pexels-photo-3779713.jpeg?auto=compress&cs=tinysrgb&w=1600",
    steps: [
      { title: "Periodontal Charting", body: "Pocket depths, bleeding sites, and bone levels are recorded at every visit.", photo: "https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { title: "Deep Cleaning", body: "Scaling and root planing removes calculus from below the gumline under local anaesthesia.", photo: "https://images.pexels.com/photos/6627572/pexels-photo-6627572.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { title: "Surgical Phase", body: "Advanced cases may need flap surgery or regenerative procedures to restore lost bone.", photo: "https://images.pexels.com/photos/3779713/pexels-photo-3779713.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { title: "Maintenance", body: "Regular 3–4 month maintenance visits prevent recurrence and stabilise results.", photo: "https://images.pexels.com/photos/6627604/pexels-photo-6627604.jpeg?auto=compress&cs=tinysrgb&w=800" },
    ],
    benefits: ["Halts bone and tooth loss", "Reduces bleeding and inflammation", "Improves breath", "Non-surgical options available", "Evidence-based protocol"],
  },
  "radiology": {
    title: "Radiology", num: "06",
    tagline: "Precision imaging for accurate diagnoses.",
    intro: "Our fully digital radiology suite — including CBCT 3D cone-beam technology — lets us visualise bone, roots, sinuses, and soft tissue with a fraction of the radiation of traditional film X-rays.",
    heroImage: "https://images.pexels.com/photos/6501853/pexels-photo-6501853.jpeg?auto=compress&cs=tinysrgb&w=1600",
    steps: [
      { title: "Clinical Indication", body: "Images are only taken when clinically justified — never unnecessarily.", photo: "https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { title: "Digital Capture", body: "Sensors capture instantly with up to 90% less radiation than traditional film.", photo: "https://images.pexels.com/photos/6501853/pexels-photo-6501853.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { title: "On-Screen Analysis", body: "Images are reviewed with you on a calibrated monitor during your appointment.", photo: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { title: "Secure Storage", body: "All records are stored digitally and available for referral or second opinion.", photo: "https://images.pexels.com/photos/3779713/pexels-photo-3779713.jpeg?auto=compress&cs=tinysrgb&w=800" },
    ],
    benefits: ["90% less radiation than film", "Instant on-screen results", "CBCT 3D volumetric imaging", "Panoramic & cephalometric views", "Secure digital records"],
  },
  "childrens-treatments": {
    title: "Children's Treatments", num: "07",
    tagline: "Building healthy habits from the very first visit.",
    intro: "Our approach puts prevention first — building trust with young patients so that dental visits feel calm, safe, and even enjoyable from the very beginning.",
    heroImage: "https://images.pexels.com/photos/4185330/pexels-photo-4185330.jpeg?auto=compress&cs=tinysrgb&w=1600",
    steps: [
      { title: "First Visit", body: "A gentle familiarisation — visual check only, no instruments, building trust and comfort.", photo: "https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { title: "Preventive Care", body: "Professional cleaning, fluoride, and fissure sealants to protect erupting permanent teeth.", photo: "https://images.pexels.com/photos/4185330/pexels-photo-4185330.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { title: "Early Orthodontic Screening", body: "We monitor jaw development from age 7 to intercept issues early.", photo: "https://images.pexels.com/photos/19328507/pexels-photo-19328507.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { title: "Restorative Treatment", body: "Child-appropriate techniques and anaesthesia ensure a pain-free, positive experience.", photo: "https://images.pexels.com/photos/6627604/pexels-photo-6627604.jpeg?auto=compress&cs=tinysrgb&w=800" },
    ],
    benefits: ["Low-anxiety environment", "Fluoride & sealant protection", "Early interceptive orthodontics", "Parent-present option", "Preventive-first philosophy"],
  },
};

const beforeAfterImages = [1,2,3,4,5,6].map(n => `/before-after/before-after${n}.webp`);

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const s = data[slug];
  if (!s) notFound();

  return (
    <main className="bg-white">


      {/* ── Hero ── */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <Image src={s.heroImage} alt={s.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 pb-14">
          <p className="text-[11px] font-black text-blue tracking-[0.2em] uppercase mb-2">{s.num}</p>
          <h1 className="font-heading text-[clamp(32px,5vw,60px)] font-black text-white leading-tight max-w-2xl mb-3">{s.title}</h1>
          <p className="text-white/70 text-[16px] max-w-xl">{s.tagline}</p>
        </div>
      </section>

      {/* ── Intro + Benefits ── */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-[11px] font-black text-blue tracking-[0.18em] uppercase mb-4">Overview</p>
            <h2 className="font-heading text-[clamp(22px,3vw,34px)] font-black text-navy leading-tight mb-5">What to expect</h2>
            <p className="text-slate-600 text-[16px] leading-[1.8]">{s.intro}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <p className="text-[11px] font-black text-blue tracking-[0.18em] uppercase mb-4">Key Benefits</p>
            <ul className="flex flex-col gap-3">
              {s.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-navy font-medium">
                  <span className="w-5 h-5 rounded-full bg-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-blue" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── Process steps with photos ── */}
      <section className="py-16 lg:py-20 bg-[#F8FAFF]">
        <div className="container mx-auto px-6">
          <p className="text-[11px] font-black text-blue tracking-[0.18em] uppercase mb-4">The Process</p>
          <h2 className="font-heading text-[clamp(22px,3vw,36px)] font-black text-navy leading-tight mb-10">Step by step</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {s.steps.map((step, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={step.photo} alt={step.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-[10px] font-black text-white/60 tracking-[0.2em] uppercase">Step {String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-[16px] font-black text-navy mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-[13px] leading-[1.65]">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Before / After — 9:16 portrait carousel ── */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-[11px] font-black text-blue tracking-[0.18em] uppercase mb-3">Satisfied Clients</p>
              <h2 className="font-heading text-[clamp(22px,3vw,36px)] font-black text-navy leading-tight">Before &amp; After</h2>
            </div>
            <p className="text-slate-400 text-[13px] font-medium">Swipe to see results →</p>
          </div>
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4" style={{ scrollbarWidth: "none" }}>
            {beforeAfterImages.map((src, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="snap-center shrink-0 w-[56vw] sm:w-[36%] lg:w-[22%] rounded-2xl overflow-hidden relative"
                style={{ aspectRatio: "9/16" }}
              >
                <Image src={src} alt={`Result ${i + 1}`} fill className="object-cover" sizes="30vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-black text-white/60 tracking-widest uppercase">Result {i + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-navy">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white/40 text-[11px] font-semibold tracking-widest uppercase mb-1">Ready?</p>
            <h3 className="font-heading text-[clamp(20px,3vw,32px)] font-black text-white">Book your {s.title} consultation.</h3>
          </div>
          <Link href="/contact" className="group shrink-0 inline-flex items-center gap-2 bg-blue text-white px-8 py-4 rounded-full font-bold text-[14px] hover:bg-white hover:text-navy transition-all duration-200">
            Book Appointment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}
