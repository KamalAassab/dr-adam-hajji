"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const images = [
  { src: "/gallery/PIC1.jpg", alt: "Treatment Room", category: "Clinical" },
  { src: "/gallery/PIC2.jpg", alt: "Consultation Area", category: "Comfort" },
  { src: "/gallery/PIC3.jpg", alt: "Digital Equipment", category: "Technology" },
  { src: "/gallery/PIC4.jpg", alt: "Patient Care", category: "Service" },
  { src: "/gallery/PIC5.jpg", alt: "Clinic Interior", category: "Modern" },
];

/* ── Lightbox ──────────────────────────────────────────────── */
function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: typeof import("./GallerySummary").default extends never ? never : { src: string; alt: string; category: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 backdrop-blur-xl"
        onClick={onClose}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Counter */}
        <div className="absolute top-6 left-6 z-10 bg-white/10 border border-white/20 rounded-full px-4 py-2">
          <span className="text-[12px] font-black text-white/70 tracking-[0.2em]">
            {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </span>
        </div>

        {/* Prev */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 lg:left-8 z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-blue hover:border-blue transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next */}
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 lg:right-8 z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-blue hover:border-blue transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image */}
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[90vw] max-w-4xl aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            className="object-cover"
            sizes="90vw"
            priority
          />
          {/* Caption */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy/90 to-transparent p-6">
            <p className="text-[10px] font-black text-blue tracking-[0.2em] uppercase mb-1">{images[index].category}</p>
            <p className="text-white font-bold text-[17px]">{images[index].alt}</p>
          </div>
        </motion.div>

        {/* Thumbnail strip */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 px-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); /* handled by parent index setter via onNext/onPrev */ }}
              className={`relative w-12 h-8 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                i === index ? "border-blue scale-110 shadow-lg shadow-blue/40" : "border-white/20 opacity-50 hover:opacity-80"
              }`}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="48px" />
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── Film-strip Carousel ────────────────────────────────────── */
function FilmCarousel({
  images,
  activeIndex,
  onSelect,
}: {
  images: { src: string; alt: string; category: string }[];
  activeIndex: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="relative flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2" style={{ scrollbarWidth: "none" }}>
      {images.map((img, i) => (
        <motion.button
          key={i}
          onClick={() => onSelect(i)}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
          className={`snap-center shrink-0 relative rounded-xl overflow-hidden border-2 transition-all duration-300 ${
            i === activeIndex
              ? "border-blue shadow-xl shadow-blue/30 scale-105"
              : "border-white/0 opacity-60 hover:opacity-90"
          }`}
          style={{ width: 120, height: 80 }}
        >
          <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="120px" />
          {i === activeIndex && (
            <div className="absolute inset-0 border-[3px] border-blue rounded-xl pointer-events-none" />
          )}
        </motion.button>
      ))}
    </div>
  );
}

/* ── Main Showcase Carousel ─────────────────────────────────── */
function ShowcaseCarousel({
  images,
  onOpenLightbox,
}: {
  images: { src: string; alt: string; category: string }[];
  onOpenLightbox: (i: number) => void;
}) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((next: number, dir: number) => {
    setDirection(dir);
    setCurrent((next + images.length) % images.length);
  }, [images.length]);

  const prev = () => goTo(current - 1, -1);
  const next = () => goTo(current + 1, 1);

  // Auto-play
  useEffect(() => {
    const t = setInterval(() => goTo(current + 1, 1), 5000);
    return () => clearInterval(t);
  }, [current, goTo]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.97 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.97 }),
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main stage */}
      <div className="relative rounded-[28px] overflow-hidden aspect-[16/9] bg-slate-100 shadow-2xl shadow-navy/20 group">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={images[current].src}
              alt={images[current].alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />

            {/* Caption */}
            <motion.div
              key={`caption-${current}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="absolute bottom-6 left-6 right-20"
            >
              <span className="inline-block text-[10px] font-black text-blue tracking-[0.22em] uppercase bg-blue/20 backdrop-blur-sm border border-blue/30 rounded-full px-3 py-1 mb-2">
                {images[current].category}
              </span>
              <h3 className="font-heading text-[clamp(18px,2.5vw,26px)] font-black text-white leading-tight">
                {images[current].alt}
              </h3>
            </motion.div>

            {/* Zoom button */}
            <button
              onClick={() => onOpenLightbox(current)}
              className="absolute bottom-6 right-6 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-blue hover:border-blue transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
          </motion.div>
        </AnimatePresence>

        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/10 z-10">
          <motion.div
            key={current}
            className="h-full bg-blue"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
          />
        </div>

        {/* Nav arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-blue hover:border-blue transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-blue hover:border-blue transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Film strip thumbnails */}
      <FilmCarousel
        images={images}
        activeIndex={current}
        onSelect={(i) => goTo(i, i > current ? 1 : -1)}
      />
    </div>
  );
}

/* ── Masonry Preview Grid ───────────────────────────────────── */
function MasonryGrid({
  images,
  onOpenLightbox,
}: {
  images: { src: string; alt: string; category: string }[];
  onOpenLightbox: (i: number) => void;
}) {
  // 5 images into a creative layout: [tall, short, short, tall, medium]
  const layout = [
    "row-span-2", // PIC1 — tall
    "row-span-1", // PIC2 — short
    "row-span-1", // PIC3 — short
    "row-span-2", // PIC4 — tall
    "row-span-1", // PIC5 — medium
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 h-[520px]">
      {images.map((img, i) => (
        <motion.button
          key={i}
          onClick={() => onOpenLightbox(i)}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.02 }}
          className={`relative overflow-hidden rounded-2xl group ${layout[i]} ${
            i === 0 ? "col-span-1 row-span-2" : ""
          } ${i === 3 ? "col-span-1 row-span-2" : ""}`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2.5 rounded-xl">
              <p className="text-[9px] font-black text-blue tracking-[0.2em] uppercase mb-0.5">{img.category}</p>
              <p className="text-[12px] font-black text-white truncate">{img.alt}</p>
            </div>
          </div>
          {/* Zoom icon */}
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ZoomIn className="w-4 h-4" />
          </div>
        </motion.button>
      ))}
    </div>
  );
}

/* ── Main Export ────────────────────────────────────────────── */
export default function GallerySummary({ hideLink = false }: { hideLink?: boolean }) {
  const { lang, dir } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [view, setView] = useState<"carousel" | "grid">("carousel");

  const localT = {
    fr: {
      eyebrow: "Parcours Visuel",
      headline_1: "L'excellence dans",
      headline_2: "chaque détail.",
      subheading: "Découvrez nos installations de pointe et l'atmosphère chaleureuse de notre clinique.",
      btnExplore: "Explorer la Galerie",
      carousel: "Diaporama",
      grid: "Grille",
    },
    en: {
      eyebrow: "Visual Journey",
      headline_1: "Excellence in",
      headline_2: "every detail.",
      subheading: "Discover our state-of-the-art facilities and the warm atmosphere of our clinic.",
      btnExplore: "Explore Full Gallery",
      carousel: "Slideshow",
      grid: "Grid",
    },
    ar: {
      eyebrow: "رحلة بصرية",
      headline_1: "التميز في",
      headline_2: "كل تفصيلة.",
      subheading: "اكتشف مرافقنا المتطورة والأجواء الدافئة في عيادتنا.",
      btnExplore: "استكشف المعرض",
      carousel: "عرض شرائح",
      grid: "شبكة",
    },
  }[lang] ?? {
    eyebrow: "Visual Journey",
    headline_1: "Excellence in",
    headline_2: "every detail.",
    subheading: "Discover our state-of-the-art facilities and the warm atmosphere of our clinic.",
    btnExplore: "Explore Full Gallery",
    carousel: "Slideshow",
    grid: "Grid",
  };

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevLightbox = () => setLightboxIndex((p) => ((p ?? 0) - 1 + images.length) % images.length);
  const nextLightbox = () => setLightboxIndex((p) => ((p ?? 0) + 1) % images.length);

  return (
    <>
      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevLightbox}
          onNext={nextLightbox}
        />
      )}

      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-blue/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-blue/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          {/* ── Header ── */}
          <div className={`mb-14 ${dir === "rtl" ? "text-right" : "text-left"}`}>
            <motion.div
              initial={{ opacity: 0, x: dir === "rtl" ? 16 : -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex items-center gap-3 mb-5 ${dir === "rtl" ? "justify-end" : "justify-start"}`}
            >
              <div className="h-px w-8 bg-blue shrink-0" />
              <span className="text-[11px] font-black text-blue tracking-[0.22em] uppercase">{localT.eyebrow}</span>
            </motion.div>

            <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6`}>
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="font-heading text-[clamp(30px,5vw,56px)] font-black text-navy leading-[1.05] tracking-tight mb-3"
                >
                  {localT.headline_1}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-[#2854C8]">
                    {localT.headline_2}
                  </span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="text-slate-500 text-[15px] max-w-md leading-[1.75]"
                >
                  {localT.subheading}
                </motion.p>
              </div>

              {/* Controls row */}
              <div className="flex items-center gap-3 shrink-0">
                {/* View toggle */}
                <div className="flex items-center bg-slate-100 rounded-full p-1 gap-1">
                  {(["carousel", "grid"] as const).map((v) => (
                    <button
                      key={v}
                      onClick={() => setView(v)}
                      className={`px-4 py-1.5 rounded-full text-[12px] font-black transition-all duration-300 ${
                        view === v
                          ? "bg-navy text-white shadow-sm"
                          : "text-slate-500 hover:text-navy"
                      }`}
                    >
                      {v === "carousel" ? localT.carousel : localT.grid}
                    </button>
                  ))}
                </div>

                {!hideLink && (
                  <Link
                    href="/gallery"
                    className={`group inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-full font-bold text-[13px] hover:bg-blue transition-all duration-300 shadow-lg shadow-navy/10 ${dir === "rtl" ? "flex-row-reverse" : ""}`}
                  >
                    {localT.btnExplore}
                    <ArrowRight className={`w-4 h-4 transition-transform ${dir === "rtl" ? "group-hover:-translate-x-1 rotate-180" : "group-hover:translate-x-1"}`} />
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* ── Content Views ── */}
          <AnimatePresence mode="wait">
            {view === "carousel" ? (
              <motion.div
                key="carousel"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <ShowcaseCarousel images={images} onOpenLightbox={openLightbox} />
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <MasonryGrid images={images} onOpenLightbox={openLightbox} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Dot indicators ── */}
          <div className="flex justify-center gap-2 mt-8">
            {images.map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-slate-200"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
