"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Send, MapPin, Phone, Mail, Clock, HeartPulse, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ContactSummary() {
  const { t, dir, lang } = useLanguage();
  const [formData, setFormData] = useState({ name: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Construct WhatsApp message
    const text = `*New Inquiry from Website*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/212710100605?text=${encodeURIComponent(text)}`;
    
    setTimeout(() => {
      setStatus("success");
      window.open(whatsappUrl, '_blank');
      setFormData({ name: "", phone: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 500);
  };

  return (
    <section className="pt-8 pb-24 lg:pb-32 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <Image src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000&auto=format&fit=crop" alt="Contact Background" fill className="object-cover opacity-[0.03] pointer-events-none" />
      </div>
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue/5 rounded-full blur-[100px] opacity-80 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue/5 rounded-full blur-[80px] opacity-80 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Unified Section Header */}
        <div className="text-center mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 justify-center mb-4"
          >
            <div className="h-[1px] w-10 bg-blue" />
            <span className="text-[11px] font-black text-blue tracking-[0.3em] uppercase">{t.contact.formHeadline_1} {t.contact.formHeadline_2}</span>
            <div className="h-[1px] w-10 bg-blue" />
          </motion.div>
          <h2 className="font-heading text-[clamp(36px,5vw,56px)] font-black text-navy leading-[1.1] tracking-tight">
            {lang === "fr" ? "Nous sommes à votre " : "We are at your "}
            <span className="text-blue">{lang === "fr" ? "Écoute" : "Service"}</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group/main-card max-w-7xl mx-auto"
        >
          {/* Main Container Card */}
          <div className="relative bg-white/60 backdrop-blur-3xl rounded-[48px] border border-white/40 shadow-[0_40_120px_-20px_rgba(13,27,75,0.12)] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr]">
              
              {/* Info Panel */}
              <div className="px-4 py-4 md:px-8 md:py-6 bg-gray-50/50 border-r border-slate-100 flex flex-col gap-6">
                <div className="flex flex-col gap-4 w-full mx-auto lg:mx-0">
                  {/* Location */}
                  <div className="w-full flex items-start gap-4 p-5 rounded-3xl bg-white shadow-sm border border-slate-100 transition-all hover:shadow-md">
                    <div className="w-10 h-10 rounded-2xl bg-blue/10 text-blue flex items-center justify-center shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-black text-navy mb-1 uppercase tracking-wider">{t.contact.locationTitle}</h4>
                      <p className="text-[13px] text-slate-500 font-medium leading-snug">{t.contact.location}</p>
                    </div>
                  </div>

                  {/* Call */}
                  <a href="tel:0523391908" className="w-full flex items-start gap-4 p-5 rounded-3xl bg-white shadow-sm border border-slate-100 hover:border-blue/30 transition-all hover:shadow-md">
                    <div className="w-10 h-10 rounded-2xl bg-blue/10 text-blue flex items-center justify-center shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-black text-navy mb-1 uppercase tracking-wider">{t.contact.callTitle}</h4>
                      <p className="text-[13px] text-slate-500 font-sans font-medium">0523 39 19 08</p>
                    </div>
                  </a>

                  {/* Hours */}
                  <div className="w-full flex items-start gap-4 p-5 rounded-3xl bg-white shadow-sm border border-slate-100 transition-all hover:shadow-md">
                    <div className="w-10 h-10 rounded-2xl bg-blue/10 text-blue flex items-center justify-center shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-black text-navy mb-1 uppercase tracking-wider">{t.contact.hoursTitle}</h4>
                      <p className="text-[13px] text-slate-500 font-medium leading-snug">{t.contact.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Panel */}
              <div className="p-4 md:p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-[0.03] pointer-events-none" />
                
                <div className="relative z-10 flex flex-col gap-4">
                  <form onSubmit={handleSubmit} className={`flex flex-col gap-6 ${dir === "rtl" ? "text-right" : "text-left"}`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="flex flex-col gap-2.5 group">
                      <label className="text-[10px] font-black text-navy/40 uppercase tracking-[0.2em] px-1 group-focus-within:text-blue transition-colors">
                        {t.contact.nameLabel}
                      </label>
                      <div className="relative">
                        <input
                          required
                          type="text"
                          placeholder={t.contact.namePlaceholder}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={`w-full bg-white border border-slate-100 rounded-xl px-5 py-3.5 text-[15px] font-bold text-navy shadow-sm focus:outline-none focus:border-blue focus:ring-4 focus:ring-blue/5 transition-all ${dir === "rtl" ? "text-right" : "text-left"}`}
                        />
                      </div>
                    </div>

                    {/* Phone Input */}
                    <div className="flex flex-col gap-2.5 group">
                      <label className="text-[10px] font-black text-navy/40 uppercase tracking-[0.2em] px-1 group-focus-within:text-blue transition-colors">
                        {t.contact.phoneLabel}
                      </label>
                      <div className="relative">
                        <input
                          required
                          type="tel"
                          placeholder={t.contact.phonePlaceholder}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full bg-white border border-slate-100 rounded-xl px-5 py-3.5 text-[15px] font-bold text-navy shadow-sm focus:outline-none focus:border-blue focus:ring-4 focus:ring-blue/5 transition-all ${dir === "rtl" ? "text-right" : "text-left"}`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject Dropdown — Professional Design */}
                  <div className="relative flex flex-col gap-2.5 z-30">
                    <label className="text-[10px] font-black text-navy/40 uppercase tracking-[0.2em] px-1 transition-all group-focus-within:text-blue">
                      {t.contact.subjectLabel}
                    </label>
                    
                    <div className="relative group/select">
                      <button
                        type="button"
                        onClick={() => setIsSubjectOpen(!isSubjectOpen)}
                        className={`w-full flex items-center justify-between bg-white/40 border border-slate-100 rounded-2xl px-6 py-4 text-[15px] font-bold text-navy transition-all duration-300 hover:border-blue/30 focus:border-blue focus:bg-white shadow-sm ${isSubjectOpen ? "ring-2 ring-blue/10 border-blue" : ""}`}
                      >
                        <span className={formData.subject ? "text-navy" : "text-slate-400"}>
                          {formData.subject || (lang === "fr" ? "Sélectionnez un sujet" : "Select a subject")}
                        </span>
                        <div className={`transition-transform duration-300 ${isSubjectOpen ? "rotate-180" : ""}`}>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-navy/40">
                            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </button>

                      {/* Dropdown Menu */}
                      <div className={`absolute top-full left-0 w-full mt-2 bg-white rounded-2xl border border-slate-100 shadow-[0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden transition-all duration-300 z-50 ${isSubjectOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                        <div className="p-2 flex flex-col gap-1">
                          {t.contact.subjectOptions.map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, subject: option });
                                setIsSubjectOpen(false);
                              }}
                              className={`w-full text-left px-4 py-3 rounded-xl text-[14px] font-bold transition-all ${
                                formData.subject === option 
                                ? "bg-blue text-white" 
                                : "text-navy/60 hover:bg-slate-50 hover:text-navy"
                              } ${dir === "rtl" ? "text-right" : "text-left"}`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Backdrop to close dropdown */}
                    {isSubjectOpen && (
                      <div 
                        className="fixed inset-0 z-[-1]" 
                        onClick={() => setIsSubjectOpen(false)}
                      />
                    )}
                  </div>

                  {/* Message Area */}
                  <div className="relative group flex flex-col gap-2.5">
                    <label className="text-[10px] font-black text-navy/40 uppercase tracking-[0.2em] px-1 transition-all group-focus-within:text-blue">
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      required
                      placeholder={t.contact.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className={`w-full bg-white/30 rounded-[24px] p-6 text-[16px] font-bold text-navy border border-slate-100 placeholder:text-slate-300 focus:outline-none focus:border-blue focus:bg-white transition-all duration-500 resize-none ${dir === "rtl" ? "text-right" : "text-left"}`}
                    />
                    <div className="absolute bottom-4 right-6 text-[11px] font-black text-slate-300 uppercase tracking-widest">
                      {formData.message.length} / 500
                    </div>
                  </div>

                  {/* Submit Button — Simple & Professional */}
                  <button
                    type="submit"
                    disabled={status === "submitting" || status === "success"}
                    className={`group relative h-14 w-full rounded-xl font-black text-[15px] uppercase tracking-[0.2em] transition-all duration-300 overflow-hidden ${
                      status === "success" ? "bg-green-500 text-white" : "bg-blue text-white hover:bg-navy shadow-lg shadow-blue/20"
                    }`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {status === "idle" ? (
                        <>
                          {t.contact.submit}
                          <Send size={16} className={`transition-transform duration-300 group-hover:translate-x-1 ${dir === "rtl" ? "rotate-180" : ""}`} />
                        </>
                      ) : status === "submitting" ? (
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          {t.contact.submitting}
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <HeartPulse className="w-5 h-5 animate-pulse" />
                          {t.contact.success}
                        </div>
                      )}
                    </span>
                  </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full h-[350px] md:h-[450px] rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(13,27,75,0.08)] border-4 border-white relative group"
        >
          {/* Transparent overlay to prevent accidental scroll trapping, except for clicking the map button */}
          <div className="absolute inset-0 z-10 pointer-events-none" />
          
          <iframe
            src="https://maps.google.com/maps?q=33.236556,-8.5237257&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, pointerEvents: "none" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="filter grayscale-[20%] contrast-[110%] transition-all duration-700 group-hover:grayscale-0 group-hover:contrast-100"
          ></iframe>

          {/* Floating Get Directions Button */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20">
            <a
              href="https://maps.app.goo.gl/sJ7U6NhBz3K7bLYCA"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center justify-center gap-2 bg-blue text-white px-5 py-2.5 md:px-8 md:py-4 rounded-full font-bold text-[13px] md:text-[16px] shadow-[0_10px_30px_rgba(53,102,234,0.3)] border border-white/20 whitespace-nowrap ${dir === "rtl" ? "flex-row-reverse" : ""}`}
            >
              <Navigation className="w-3.5 h-3.5 md:w-5 md:h-5" />
              {t.contact.directions}
            </a>
          </div>
        </motion.div>

        {/* Emergency Red Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 relative overflow-hidden bg-gradient-to-br from-red-600 to-red-700 rounded-[32px] p-8 md:p-12 shadow-[0_20px_60px_rgba(220,38,38,0.2)] border-2 border-red-500"
        >
          <div className="absolute top-[-50%] right-[-10%] w-[400px] h-[400px] bg-red-500/30 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-[-50%] left-[-10%] w-[300px] h-[300px] bg-black/10 blur-[80px] rounded-full pointer-events-none" />
          
          <div className={`relative z-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center ${dir === "rtl" ? "text-right" : "text-left"}`}>
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold text-[13px] tracking-widest uppercase mb-6 backdrop-blur-sm shadow-sm">
                <HeartPulse className="w-4 h-4 animate-pulse" />
                {t.contact.emergency.tag}
              </div>
              <h3 className="font-heading text-[clamp(18px,5vw,42px)] font-black text-white leading-tight mb-4 tracking-tight whitespace-nowrap" dir={dir}>
                {t.contact.emergency.headline}
              </h3>
              <p className="text-red-50 text-[16px] md:text-[18px] leading-relaxed mb-6 max-w-2xl">
                {t.contact.emergency.desc}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-black/10 rounded-2xl p-4 border border-white/10">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" /> 
                    {t.contact.emergency.box1Title}
                  </h4>
                  <p className="text-red-100 text-[13px] leading-relaxed">{t.contact.emergency.box1Desc}</p>
                </div>
                <div className="bg-black/10 rounded-2xl p-4 border border-white/10">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" /> 
                    {t.contact.emergency.box2Title}
                  </h4>
                  <p className="text-red-100 text-[13px] leading-relaxed">{t.contact.emergency.box2Desc}</p>
                </div>
              </div>
            </div>
            
            <div className={`flex flex-col items-center justify-center md:px-10 ${dir === "rtl" ? "md:border-r" : "md:border-l"} border-white/20`}>
              <span className="text-red-100 text-[14px] font-bold uppercase tracking-widest mb-3">{t.contact.emergency.callSOS}</span>
              <a href="tel:0710100605" className={`group relative overflow-hidden bg-white text-red-600 px-8 py-5 rounded-full font-black text-[28px] tracking-tight transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] flex items-center gap-3 ${dir === "rtl" ? "flex-row-reverse" : ""}`} dir="ltr">
                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-red-500/10 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:animate-[shine_1.5s_ease-out_infinite]" />
                <Phone className="w-7 h-7" />
                0710100605
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
