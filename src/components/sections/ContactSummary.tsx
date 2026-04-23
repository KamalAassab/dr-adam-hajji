"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, MapPin, Phone, Mail, Clock, HeartPulse, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSummary() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Construct WhatsApp message
    const text = `Hello, my name is ${formData.name}.\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/212710100605?text=${encodeURIComponent(text)}`;
    
    setTimeout(() => {
      setStatus("success");
      window.open(whatsappUrl, '_blank');
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 500);
  };

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue/5 rounded-full blur-[100px] opacity-80 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue/5 rounded-full blur-[80px] opacity-80 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue/5 border border-blue/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue" />
              <span className="text-[13px] font-bold text-blue tracking-[0.06em] uppercase">Contact Us</span>
            </div>
            <h2 className="font-heading text-[clamp(32px,5vw,48px)] font-black text-navy leading-[1.1] tracking-tight mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-[#2B5DE4]">Touch</span>
            </h2>
            <p className="text-[16px] text-[#475569] leading-[1.8] font-medium mb-10 max-w-[420px]">
              We're here to help you achieve the perfect smile. Contact our team to book an appointment or ask any questions you may have.
            </p>

            <div className="flex flex-col gap-6 mb-12">
              <div className="flex items-start gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center text-blue shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h6 className="font-heading text-[16px] font-bold text-navy mb-1.5">Our Location</h6>
                  <p className="text-[15px] text-[#475569] leading-relaxed">rond point LES CERISES, 12 lot zouhour salma 2, El Jadida 24000</p>
                </div>
              </div>
              <a href="tel:0523391908" className="flex items-start gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-colors block">
                <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center text-blue shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h6 className="font-heading text-[16px] font-bold text-navy mb-1.5">Call Us</h6>
                  <p className="text-[15px] text-[#475569]">0523391908</p>
                </div>
              </a>
              <div className="flex items-start gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center text-blue shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h6 className="font-heading text-[16px] font-bold text-navy mb-1.5">Opening Hours</h6>
                  <p className="text-[15px] text-[#475569]">24/7 (Friday: Closed)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#F8FAFF] rounded-[32px] p-8 md:p-12 shadow-[0_20px_60px_rgba(13,27,75,0.05)] border border-blue/10 relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 rounded-tr-[32px]" />
            <h3 className="font-heading text-[28px] font-black text-navy mb-8 tracking-tight relative z-10">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2.5">
                  <label className="text-[14px] font-bold text-navy/80 pl-1">Your Name</label>
                  <Input
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-14 bg-white border-white rounded-xl shadow-sm focus-visible:ring-2 focus-visible:ring-blue/50 text-[15px]"
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <label className="text-[14px] font-bold text-navy/80 pl-1">Email Address</label>
                  <Input
                    required
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-14 bg-white border-white rounded-xl shadow-sm focus-visible:ring-2 focus-visible:ring-blue/50 text-[15px]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <label className="text-[14px] font-bold text-navy/80 pl-1">Subject</label>
                <Input
                  required
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="h-14 bg-white border-white rounded-xl shadow-sm focus-visible:ring-2 focus-visible:ring-blue/50 text-[15px]"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label className="text-[14px] font-bold text-navy/80 pl-1">Message</label>
                <Textarea
                  required
                  placeholder="Tell us about your dental needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[150px] bg-white border-white rounded-xl shadow-sm focus-visible:ring-2 focus-visible:ring-blue/50 resize-none text-[15px] p-4"
                />
              </div>
              <Button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className={`group h-14 text-[16px] font-bold rounded-xl mt-4 transition-all duration-300 relative overflow-hidden ${
                  status === "success" ? "bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/20" : "bg-navy hover:bg-blue shadow-lg shadow-blue/20 hover:-translate-y-1"
                }`}
              >
                {status === "idle" && <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:animate-[shine_1.5s_ease-out_infinite]" />}
                <span className="relative z-10 flex items-center justify-center">
                  {status === "submitting" ? (
                    "Redirecting..."
                  ) : status === "success" ? (
                    "Opened WhatsApp!"
                  ) : (
                    <>
                      Send Message <Send className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </span>
              </Button>
            </form>
          </motion.div>
        </div>

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
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-[90%] md:w-auto">
            <a
              href="https://maps.app.goo.gl/sJ7U6NhBz3K7bLYCA"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-navy px-8 py-4 rounded-full font-bold text-[16px] transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:bg-blue hover:text-white border border-slate-100 whitespace-nowrap"
            >
              <Navigation className="w-5 h-5" />
              Get Directions
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
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold text-[13px] tracking-widest uppercase mb-6 backdrop-blur-sm shadow-sm">
                <HeartPulse className="w-4 h-4 animate-pulse" />
                24/7 Dental Emergency
              </div>
              <h3 className="font-heading text-[32px] md:text-[42px] font-black text-white leading-tight mb-4 tracking-tight">
                Severe Toothache or Injury?
              </h3>
              <p className="text-red-50 text-[16px] md:text-[18px] leading-relaxed mb-6 max-w-2xl">
                Do not wait. Dental emergencies require immediate attention to save your tooth and prevent infection. We provide rapid response care for trauma, severe pain, abscesses, and broken teeth.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-black/10 rounded-2xl p-4 border border-white/10">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white" /> Knocked Out Tooth</h4>
                  <p className="text-red-100 text-[13px] leading-relaxed">Keep it moist. Try to place it back in the socket or store in milk until you reach our clinic.</p>
                </div>
                <div className="bg-black/10 rounded-2xl p-4 border border-white/10">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white" /> Severe Swelling</h4>
                  <p className="text-red-100 text-[13px] leading-relaxed">Apply a cold compress to the outside of your cheek and contact us immediately.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center md:pl-10 md:border-l border-white/20">
              <span className="text-red-100 text-[14px] font-bold uppercase tracking-widest mb-3">Call Our SOS Line</span>
              <a href="tel:0710100605" className="group relative overflow-hidden bg-white text-red-600 px-8 py-5 rounded-full font-black text-[28px] tracking-tight transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] flex items-center gap-3">
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
