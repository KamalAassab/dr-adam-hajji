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
    role: "Patient",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    content: "My experience at this dental center was outstanding! The reception was warm and professional, and the dentist showed exceptional skill and care for my comfort, explaining every step clearly. I felt confident and at ease.",
    rating: 5,
    isArabic: false,
  },
  {
    name: "Kamal Riyani",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    content: "I came from England to see Dr Adam, and I can confidently say the quality of service and level of care he provides are outstanding. He is highly professional, friendly, and an excellent communicator. The entire team delivered exceptional service.",
    rating: 5,
    isArabic: false,
  },
  {
    name: "Lora Belle",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    content: "أشكرك من كل قلبي على حسن تعاملك وكفاءتك العالية في علاج أسناني. لقد أظهرت مهارة ومهنية عالية في عملك، وحرصت على راحتي وطمأنتني طوال العملية. أنت طبيب استثنائي لا يوجد له مثيل شكراً لك على كل شيء",
    rating: 5,
    isArabic: true,
  },
  {
    name: "Elouarrari Oussama",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    content: "Dr Adam is an Excellent dentist. Skilled, caring, and ensures a pain-free experience. Highly recommended!",
    rating: 5,
    isArabic: false,
  },
  {
    name: "Sara Mhaidra",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    content: "This was our first visit to Adam's dental practice, and it was a wonderful discovery! The dentist is attentive, professional, and very thorough.",
    rating: 5,
    isArabic: false,
  },
  {
    name: "Hamza Sihabi",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/men/66.jpg",
    content: "Dr. Adam is one of the best dentists I've ever dealt with. Highly professional, he explains each step clearly and ensures the patient's comfort. The reception and service are excellent from the beginning to the end of treatment. I highly recommend him.",
    rating: 5,
    isArabic: false,
  },
];

export default function TestimonialsSummary({ hideLink = false }: { hideLink?: boolean }) {
  return (
    <section className="py-16 lg:py-20 bg-[#F8FAFF] relative overflow-hidden">
      {/* Decorative Blur Orbs & Background */}
      <div className="absolute inset-0 z-0">
        <Image src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2000&auto=format&fit=crop" alt="Testimonials Background" fill className="object-cover opacity-[0.03] pointer-events-none" />
      </div>
      <div className="absolute top-0 right-[-10%] w-96 h-96 bg-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-96 h-96 bg-blue/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10 lg:mb-14 max-w-2xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-heading text-[clamp(32px,5vw,48px)] font-black text-navy leading-[1.1] tracking-tight mb-6"
          >
            Loved By <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-[#2854C8]">Thousands</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-[16px] text-[#475569] leading-[1.8] font-medium"
          >
            Join thousands of happy patients who trust us for gentle, expert care and beautiful smiles. Your perfect dental experience starts right here.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Gradient Edges for Carousel Fading effect — Subtle & Responsive */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-r from-[#F8FAFF] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-l from-[#F8FAFF] to-transparent z-10 pointer-events-none" />

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4500,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full relative"
          >
            <CarouselContent className="-ml-4 md:-ml-6 py-12">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-[32px] p-8 h-full border border-slate-100 shadow-[0_4px_24px_rgba(13,27,75,0.02)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(53,102,234,0.12)] hover:border-blue/20 group relative overflow-hidden flex flex-col">
                    
                    {/* Decorative Background Quote */}
                    <Quote className="absolute top-8 right-8 w-16 h-16 text-blue/5 -rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110" />
                    
                    <div className="flex gap-1 mb-6 relative z-10">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4.5 h-4.5 fill-[#F59E0B] text-[#F59E0B]" />
                      ))}
                    </div>

                    <p className={`text-[15px] lg:text-[16px] text-[#475569] leading-[1.75] font-medium mb-10 relative z-10 flex-1 ${testimonial.isArabic ? 'font-arabic text-right text-[17px] leading-loose' : ''}`} dir={testimonial.isArabic ? 'rtl' : 'ltr'}>
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center gap-4 mt-auto relative z-10 pt-7 border-t border-slate-100/80">
                      <div className="relative shrink-0">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={52}
                          height={52}
                          className="rounded-full object-cover shadow-lg border-2 border-white"
                        />
                        <div className="absolute inset-[-4px] rounded-full border border-blue/20 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                      </div>
                      <div className="overflow-hidden">
                        <h5 className="font-heading text-[17px] font-black text-navy leading-tight truncate">{testimonial.name}</h5>
                        <span className="text-[13px] font-bold text-blue tracking-wide uppercase">{testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="hidden md:flex items-center justify-center gap-5 mt-4">
              <CarouselPrevious className="static translate-y-0 w-13 h-13 bg-white border border-slate-100 shadow-xl text-navy hover:bg-blue hover:text-white hover:border-blue transition-all duration-300" />
              <CarouselNext className="static translate-y-0 w-13 h-13 bg-white border border-slate-100 shadow-xl text-navy hover:bg-blue hover:text-white hover:border-blue transition-all duration-300" />
            </div>
          </Carousel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 lg:mt-10 relative z-20"
        >
          {!hideLink && (
            <Link
              href="/testimonials"
              className="group relative inline-flex items-center justify-center bg-white text-navy px-8 py-4 rounded-full font-bold text-[15px] transition-all duration-300 border border-slate-200 hover:border-blue hover:text-blue hover:scale-105 hover:shadow-xl overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center">
                Read All Patient Stories
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          )}
          
          <a
            href="https://www.google.com/maps/place/Centre+dentaire+ADAM/@33.2365347,-8.523883,18z/data=!4m18!1m9!3m8!1s0xda91db23c98cb57:0xafdc09145c6e6726!2sCentre+dentaire+ADAM!8m2!3d33.236556!4d-8.5237257!9m1!1b1!16s%2Fg%2F11y8rgcl8b!3m7!1s0xda91db23c98cb57:0xafdc09145c6e6726!8m2!3d33.236556!4d-8.5237257!9m1!1b1!16s%2Fg%2F11y8rgcl8b!5m1!1e2?entry=ttu"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center justify-center bg-blue text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all duration-300 hover:bg-navy hover:scale-105 hover:shadow-[0_12px_30px_rgba(53,102,234,0.25)] overflow-hidden w-full sm:w-auto"
          >
            <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:animate-[shine_1.5s_ease-out_infinite]" />
            <span className="relative z-10 flex items-center">
              <MessageSquareHeart className="w-4 h-4 mr-2" />
              Leave a Review
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
