"use client";

import Image from "next/image";
import Link from "next/link";
import { Quote, Star, ArrowRight, MessageSquareHeart } from "lucide-react";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "salma salma",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    content: "Outstanding experience! Professional reception and exceptional clinical care. I felt completely confident and at ease.",
    rating: 5,
    isArabic: false,
  },
  {
    name: "Kamal Riyani",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    content: "Traveled from England for Dr. Adam's care. Outstanding service, a highly professional team, and excellent communication.",
    rating: 5,
    isArabic: false,
  },
  {
    name: "Lora Belle",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    content: "شكراً جزيلاً على التعامل الراقي والكفاءة العالية في العلاج. مهارة ومهنية استثنائية طبيب لا مثيل له.",
    rating: 5,
    isArabic: true,
  },
  {
    name: "Elouarrari Oussama",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    content: "Excellent dentist! Skilled, caring, and ensures a completely pain-free experience. Highly recommended to everyone.",
    rating: 5,
    isArabic: false,
  },
  {
    name: "Sara Mhaidra",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    content: "Wonderful first visit! Attentive, professional, and very thorough care. A truly great discovery for our family.",
    rating: 5,
    isArabic: false,
  },
  {
    name: "Hamza Sihabi",
    image: "https://randomuser.me/api/portraits/men/66.jpg",
    content: "One of the best! Highly professional, clear communication, and excellent service from start to finish.",
    rating: 5,
    isArabic: false,
  },
];

export default function TestimonialsSummary({ hideLink = false }: { hideLink?: boolean }) {
  return (
    <section className="py-10 lg:py-14 bg-[#F8FAFF] relative overflow-hidden">
      {/* Decorative Blur Orbs & Background */}
      <div className="absolute inset-0 z-0">
        <Image src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2000&auto=format&fit=crop" alt="Testimonials Background" fill className="object-cover opacity-[0.03] pointer-events-none" />
      </div>
      <div className="absolute top-0 right-[-10%] w-96 h-96 bg-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-96 h-96 bg-blue/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="font-heading text-[clamp(28px,4.5vw,42px)] font-black text-navy leading-[1.1] tracking-tight mb-4"
            >
              Loved By <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-[#2854C8]">Thousands</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-[15px] text-[#475569] leading-[1.6] font-medium"
            >
              Join thousands of happy patients who trust us for gentle, expert care and beautiful smiles.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex items-center gap-4 self-start lg:self-end"
          >
            <a
              href="https://www.google.com/maps/place/Centre+dentaire+ADAM/@33.2365347,-8.523883,18z/data=!4m18!1m9!3m8!1s0xda91db23c98cb57:0xafdc09145c6e6726!2sCentre+dentaire+ADAM!8m2!3d33.236556!4d-8.5237257!9m1!1b1!16s%2Fg%2F11y8rgcl8b!3m7!1s0xda91db23c98cb57:0xafdc09145c6e6726!8m2!3d33.236556!4d-8.5237257!9m1!1b1!16s%2Fg%2F11y8rgcl8b!5m1!1e2?entry=ttu"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center bg-blue text-white px-6 py-3.5 rounded-full font-bold text-[14px] transition-all duration-300 hover:bg-navy hover:scale-105 hover:shadow-[0_12px_30px_rgba(53,102,234,0.2)] overflow-hidden"
            >
              <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:animate-[shine_1.5s_ease-out_infinite]" />
              <span className="relative z-10 flex items-center">
                <MessageSquareHeart className="w-4 h-4 mr-2" />
                Leave a Review
              </span>
            </a>
            
            <div className="flex items-center gap-2">
              <CarouselPrevious className="static translate-y-0 w-11 h-11 rounded-full bg-white text-navy border border-slate-200 shadow-sm hover:bg-blue hover:text-white hover:border-blue transition-all duration-300" />
              <CarouselNext className="static translate-y-0 w-11 h-11 rounded-full bg-white text-navy border border-slate-200 shadow-sm hover:bg-blue hover:text-white hover:border-blue transition-all duration-300" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-[1400px] mx-auto"
        >


          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4500,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6 py-8">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-3xl p-6 h-full border border-slate-100 shadow-[0_4px_20px_rgba(13,27,75,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(53,102,234,0.1)] hover:border-blue/20 group relative overflow-hidden flex flex-col">
                    
                    <Quote className="absolute top-4 right-4 w-12 h-12 text-blue/5 -rotate-6 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110" />
                    
                    <div className="flex gap-1 mb-4 relative z-10">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                      ))}
                    </div>

                    <p className={`text-[14px] text-[#475569] leading-[1.5] italic mb-6 relative z-10 flex-1 ${testimonial.isArabic ? 'font-arabic text-right text-[15px]' : ''}`} dir={testimonial.isArabic ? 'rtl' : 'ltr'}>
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center gap-4 mt-auto relative z-10 pt-4 border-t border-slate-100">
                      <div className="relative">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="rounded-full object-cover shadow-md"
                        />
                        <div className="absolute inset-0 rounded-full border-2 border-blue opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                      </div>
                      <div>
                        <h5 className="font-heading text-[16px] font-bold text-navy leading-tight">{testimonial.name}</h5>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            

          </Carousel>
        </motion.div>


      </div>
    </section>
  );
}
