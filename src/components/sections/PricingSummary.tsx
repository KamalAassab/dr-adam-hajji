"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, ArrowRight, CheckCircle2, ChevronRight, Tag } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export default function PricingSummary() {
  const [active, setActive] = useState(0);
  const { lang, dir } = useLanguage();

  const t = {
    fr: {
      eyebrow: "Investissez dans votre sourire",
      headline_1: "Tarifs Transparents", headline_2: "Sans Compromis.",
      description: "Nous croyons en des coûts honnêtes et transparents. Chaque procédure clinique est détaillée afin que vous puissiez vous concentrer sur votre rétablissement.",
      fromText: "À partir de",
      categoryText: "Catégorie",
      packagesStart: "Forfaits à partir de",
      startingPrice: "Prix de base",
      getQuote: "Obtenir un devis",
      noteTitle: "Remarque :",
      noteDesc: "Nos tarifs sont transparents mais peuvent varier en fonction de la complexité clinique et des matériaux. Un devis complet sera fourni après examen.",
      categories: [
        {
          label: "Implants", title: "Implants Dentaires", from: "6 500 MAD", blurb: "Remplacements permanents ancrés au titane conçus pour durer.",
          items: [
            { name: "Fixation d'Implant en Titane", price: "6 500 MAD", desc: "Placement chirurgical d'un pivot en titane premium." },
            { name: "Couronne sur Implant en Zircone", price: "2 800 MAD", desc: "Couronne usinée sur mesure assortie à vos dents." },
            { name: "Greffe Osseuse", price: "2 500 MAD", desc: "Régénération guidée pour un volume osseux suffisant." },
            { name: "Forfait Implant Complet", price: "9 000 MAD", desc: "Fixation + couronne en zircone - tout inclus." },
            { name: "Bridge sur Implants", price: "Dès 18 000 MAD", desc: "Bridge fixe de 3 unités sur deux implants." },
          ]
        },
        {
          label: "Prothèses", title: "Prothèses Dentaires", from: "1 800 MAD", blurb: "Couronnes, bridges et dentiers sur mesure pour un ajustement parfait.",
          items: [
            { name: "Couronne en Céramique", price: "1 800 MAD", desc: "Couronne en porcelaine de la couleur de la dent." },
            { name: "Couronne en Zircone", price: "2 800 MAD", desc: "Couronne en zircone monolithique haute résistance." },
            { name: "Bridge Fixe (3 unités)", price: "Dès 4 500 MAD", desc: "Bridge en porcelaine cimenté remplaçant une dent." },
            { name: "Prothèse Amovible Complète", price: "Dès 3 500 MAD", desc: "Prothèse complète en acrylique sur mesure." },
            { name: "Prothèse Amovible Partielle", price: "Dès 2 500 MAD", desc: "Prothèse partielle à armature métallique." },
          ]
        },
        {
          label: "Orthodontie", title: "Orthodontie", from: "800 MAD", blurb: "Solutions d'alignement modernes : bagues et gouttières invisibles.",
          items: [
            { name: "Bagues en Métal", price: "Dès 8 000 MAD", desc: "Thérapie complète avec bagues métalliques fixes." },
            { name: "Bagues en Céramique", price: "Dès 12 000 MAD", desc: "Bagues en céramique discrètes." },
            { name: "Gouttières Invisibles", price: "Dès 18 000 MAD", desc: "Gouttières amovibles invisibles avec plan numérique." },
            { name: "Contention", price: "800 MAD", desc: "Rétention fixe ou amovible après le traitement." },
            { name: "Orthodontie Interceptive", price: "Dès 4 000 MAD", desc: "Traitement de phase 1 pour le développement des enfants." },
          ]
        },
        {
          label: "Blanchiment", title: "Blanchiment", from: "250 MAD", blurb: "Éclaircissez votre sourire jusqu'à 8 teintes avec nos protocoles professionnels.",
          items: [
            { name: "Blanchiment au Laser", price: "1 800 MAD", desc: "Blanchiment professionnel en une seule séance." },
            { name: "Kit de Blanchiment à Domicile", price: "800 MAD", desc: "Gouttières sur mesure avec gel professionnel." },
            { name: "Blanchiment Combiné", price: "2 200 MAD", desc: "Séance en clinique + kit d'entretien à domicile." },
            { name: "Élimination des Taches", price: "250 MAD", desc: "Nettoyage air-flow - taches de café, thé, tabac." },
          ]
        },
        {
          label: "Parodontie", title: "Traitement Parodontal", from: "350 MAD", blurb: "Soins spécialisés pour la santé des gencives.",
          items: [
            { name: "Détartrage Complet", price: "350 MAD", desc: "Élimination supra-gingivale de la plaque et du tartre." },
            { name: "Détartrage Profond", price: "600 MAD", desc: "Curetage sous-gingival par quadrant." },
            { name: "Chirurgie Parodontale", price: "Dès 2 000 MAD", desc: "Chirurgie à lambeau pour maladie avancée des gencives." },
            { name: "Greffe de Gencive", price: "Dès 2 500 MAD", desc: "Greffe de tissu conjonctif pour couvrir la récession." },
            { name: "Maintenance Parodontale", price: "400 MAD", desc: "Séance de thérapie de soutien trimestrielle." },
          ]
        },
        {
          label: "Radiologie", title: "Radiologie", from: "60 MAD", blurb: "Imagerie numérique avancée avec exposition minimale aux radiations.",
          items: [
            { name: "Radiographie Rétroalvéolaire", price: "60 MAD", desc: "Radiographie intra-orale numérique." },
            { name: "Radiographies Bitewing", price: "200 MAD", desc: "Vue interproximale pour détecter les caries." },
            { name: "Radiographie Panoramique", price: "250 MAD", desc: "Vue panoramique complète - dents, mâchoires." },
            { name: "Téléradiographie de Profil", price: "300 MAD", desc: "Vue latérale du crâne pour la planification ortho." },
            { name: "Scanner 3D CBCT", price: "Dès 1 200 MAD", desc: "Scanner 3D pour la planification implantaire." },
          ]
        },
        {
          label: "Autre", title: "Autres Traitements", from: "200 MAD", blurb: "Soins dentaires complets pour les patients de tous âges.",
          items: [
            { name: "Consultation Initiale", price: "200 MAD", desc: "Examen complet, diagnostic et plan personnalisé." },
            { name: "Extraction Simple", price: "300 MAD", desc: "Retrait de routine d'une dent non incluse." },
            { name: "Extraction Chirurgicale", price: "800 MAD", desc: "Retrait chirurgical de dents incluses." },
            { name: "Obturation Composite", price: "400 MAD", desc: "Résine de la couleur de la dent pour les caries." },
            { name: "Traitement de Canal", price: "Dès 1 200 MAD", desc: "Thérapie endodontique pour sauver une dent." },
            { name: "Visite Préventive Enfant", price: "250 MAD", desc: "Examen, fluor et scellement des sillons." },
          ]
        }
      ]
    },
    en: {
      eyebrow: "Invest in your Smile",
      headline_1: "Transparent Pricing", headline_2: "Without Compromise.",
      description: "We believe in honest, upfront costs. Every clinical procedure is detailed so you can focus on your recovery, not the bill.",
      fromText: "From",
      categoryText: "Category",
      packagesStart: "Packages Start From",
      startingPrice: "Starting Price",
      getQuote: "Get a Quote",
      noteTitle: "Please Note:",
      noteDesc: "Our prices are transparent but may vary based on clinical complexity and material choice. A comprehensive medical quote will be provided after your initial scan and physical examination.",
      categories: [
        {
          label: "Implants", title: "Dental Implants", from: "6 500 MAD", blurb: "Permanent, titanium-anchored tooth replacements built for a lifetime of function and aesthetics.",
          items: [
            { name: "Titanium Implant Fixture", price: "6 500 MAD", desc: "Surgical placement of a premium titanium post." },
            { name: "Zirconia Implant Crown", price: "2 800 MAD", desc: "Custom-milled crown matched to your adjacent teeth." },
            { name: "Bone Grafting", price: "2 500 MAD", desc: "Guided regeneration for sufficient bone volume." },
            { name: "Full Implant Package", price: "9 000 MAD", desc: "Fixture + zirconia crown - all inclusive." },
            { name: "Implant-Supported Bridge", price: "From 18 000 MAD", desc: "3-unit fixed bridge on two implants." },
          ]
        },
        {
          label: "Prosthetics", title: "Dental Prosthetics", from: "1 800 MAD", blurb: "Custom-crafted crowns, bridges and dentures designed for precision fit and natural look.",
          items: [
            { name: "Ceramic Crown", price: "1 800 MAD", desc: "Tooth-colored porcelain crown for damaged teeth." },
            { name: "Zirconia Crown", price: "2 800 MAD", desc: "High-strength monolithic zirconia crown." },
            { name: "Fixed Bridge (3 units)", price: "From 4 500 MAD", desc: "Cemented porcelain bridge replacing a missing tooth." },
            { name: "Complete Removable Denture", price: "From 3 500 MAD", desc: "Full arch custom acrylic denture." },
            { name: "Partial Removable Denture", price: "From 2 500 MAD", desc: "Metal-framed partial denture." },
          ]
        },
        {
          label: "Orthodontics", title: "Orthodontics", from: "800 MAD", blurb: "Modern alignment solutions including braces, ceramic brackets, and invisible aligners.",
          items: [
            { name: "Metal Braces", price: "From 8 000 MAD", desc: "Full fixed metal bracket therapy - both arches." },
            { name: "Ceramic Braces", price: "From 12 000 MAD", desc: "Tooth-colored ceramic brackets, discreet correction." },
            { name: "Clear Aligner Therapy", price: "From 18 000 MAD", desc: "Invisible removable aligners with digital planning." },
            { name: "Retainer (per arch)", price: "800 MAD", desc: "Fixed or removable retention after treatment." },
            { name: "Early Interceptive Orthodontics", price: "From 4 000 MAD", desc: "Phase-1 treatment for children's jaw development." },
          ]
        },
        {
          label: "Whitening", title: "Teeth Whitening", from: "250 MAD", blurb: "Safely brighten your smile by up to 8 shades with our professional-grade whitening protocols.",
          items: [
            { name: "In-Office Laser Whitening", price: "1 800 MAD", desc: "Single-session professional whitening." },
            { name: "Take-Home Whitening Kit", price: "800 MAD", desc: "Custom trays with professional-grade gel." },
            { name: "Combined Whitening", price: "2 200 MAD", desc: "In-office session + home maintenance kit." },
            { name: "Stain Removal & Polish", price: "250 MAD", desc: "Air-flow prophylaxis - coffee, tea, tobacco stains." },
          ]
        },
        {
          label: "Periodontal", title: "Periodontal Treatment", from: "350 MAD", blurb: "Specialized care for gum health to protect the foundation of your teeth and overall wellbeing.",
          items: [
            { name: "Full Scaling & Polishing", price: "350 MAD", desc: "Supragingival removal of plaque and tartar." },
            { name: "Deep Scaling & Root Planing", price: "600 MAD", desc: "Subgingival curettage for active periodontal pockets." },
            { name: "Periodontal Surgery", price: "From 2 000 MAD", desc: "Flap surgery for advanced gum disease." },
            { name: "Gum Graft", price: "From 2 500 MAD", desc: "Connective tissue graft for recession coverage." },
            { name: "Periodontal Maintenance", price: "400 MAD", desc: "Quarterly supportive therapy session." },
          ]
        },
        {
          label: "Radiology", title: "Radiology", from: "60 MAD", blurb: "Advanced digital imaging providing accurate diagnostics with minimal radiation exposure.",
          items: [
            { name: "Periapical X-Ray", price: "60 MAD", desc: "Digital intraoral X-ray per film." },
            { name: "Bitewing X-Rays", price: "200 MAD", desc: "Interproximal view for detecting cavities." },
            { name: "Panoramic Radiograph (OPG)", price: "250 MAD", desc: "Full-arch panoramic view - teeth, jaws, sinuses." },
            { name: "Cephalometric X-Ray", price: "300 MAD", desc: "Lateral skull view for orthodontic planning." },
            { name: "CBCT 3D Cone-Beam Scan", price: "From 1 200 MAD", desc: "3D scan for implant planning and complex diagnoses." },
          ]
        },
        {
          label: "Other", title: "Other Treatments", from: "200 MAD", blurb: "Comprehensive dental care for patients of all ages, from routine checkups to emergency visits.",
          items: [
            { name: "Initial Consultation", price: "200 MAD", desc: "Full oral exam, diagnosis, and personalized plan." },
            { name: "Simple Extraction", price: "300 MAD", desc: "Routine removal of a non-impacted tooth." },
            { name: "Surgical Extraction", price: "800 MAD", desc: "Surgical removal of impacted or multi-rooted teeth." },
            { name: "Composite Filling", price: "400 MAD", desc: "Tooth-colored resin for cavities." },
            { name: "Root Canal Treatment", price: "From 1 200 MAD", desc: "Endodontic therapy to save a damaged tooth." },
            { name: "Children's Preventive Visit", price: "250 MAD", desc: "Exam, fluoride, and fissure sealants for children." },
          ]
        }
      ]
    },
    ar: {
      eyebrow: "استثمر في ابتسامتك",
      headline_1: "أسعار شفافة", headline_2: "بدون تنازلات.",
      description: "نحن نؤمن بالتكاليف الصادقة والواضحة. يتم تفصيل كل إجراء سريري حتى تتمكن من التركيز على تعافيك، وليس على الفاتورة.",
      fromText: "من",
      categoryText: "فئة",
      packagesStart: "تبدأ الباقات من",
      startingPrice: "السعر المبدئي",
      getQuote: "احصل على عرض سعر",
      noteTitle: "ملاحظة هامة:",
      noteDesc: "أسعارنا شفافة ولكنها قد تختلف بناءً على التعقيد السريري والمواد. سيتم تقديم عرض سعر طبي شامل بعد الفحص الأولي.",
      categories: [
        {
          label: "زراعة الأسنان", title: "زراعة الأسنان", from: "6 500 درهم", blurb: "بدائل دائمة مثبتة بالتيتانيوم مصممة لتدوم وتعمل كالأسنان الطبيعية.",
          items: [
            { name: "تثبيت التيتانيوم", price: "6 500 درهم", desc: "وضع جراحي لزرعة تيتانيوم عالية الجودة." },
            { name: "تاج زركونيا للزراعة", price: "2 800 درهم", desc: "تاج مصمم خصيصاً ليطابق أسنانك الطبيعية." },
            { name: "زراعة العظم", price: "2 500 درهم", desc: "تجديد العظم لتوفير حجم كافٍ للزراعة." },
            { name: "باقة الزراعة الكاملة", price: "9 000 درهم", desc: "الزرعة + تاج الزركونيا - شامل كل شيء." },
            { name: "جسر مدعوم بالزراعة", price: "من 18 000 درهم", desc: "جسر ثابت مكون من 3 وحدات على زرعتين." },
          ]
        },
        {
          label: "التركيبات", title: "تركيبات الأسنان", from: "1 800 درهم", blurb: "تيجان وجسور وأطقم أسنان مخصصة لملاءمة دقيقة ومظهر طبيعي.",
          items: [
            { name: "تاج سيراميك", price: "1 800 درهم", desc: "تاج من البورسلين بلون الأسنان للأسنان التالفة." },
            { name: "تاج زركونيا", price: "2 800 درهم", desc: "تاج زركونيا عالي القوة والمقاومة." },
            { name: "جسر ثابت (3 وحدات)", price: "من 4 500 درهم", desc: "جسر بورسلين لتعويض سن مفقود." },
            { name: "طقم أسنان كامل متحرك", price: "من 3 500 درهم", desc: "طقم أكريليك كامل مخصص للفك." },
            { name: "طقم أسنان جزئي متحرك", price: "من 2 500 درهم", desc: "طقم أسنان جزئي بهيكل معدني." },
          ]
        },
        {
          label: "تقويم الأسنان", title: "تقويم الأسنان", from: "800 درهم", blurb: "حلول تقويم حديثة تشمل الأقواس والتقويم الشفاف المخفي.",
          items: [
            { name: "أقواس معدنية", price: "من 8 000 درهم", desc: "علاج كامل بالأقواس المعدنية الثابتة للفكين." },
            { name: "أقواس خزفية", price: "من 12 000 درهم", desc: "أقواس خزفية بلون الأسنان لعلاج غير ملحوظ." },
            { name: "التقويم الشفاف", price: "من 18 000 درهم", desc: "قوالب تقويم شفافة مع تخطيط رقمي." },
            { name: "مثبت الأسنان", price: "800 درهم", desc: "تثبيت ثابت أو متحرك بعد انتهاء العلاج." },
            { name: "تقويم وقائي مبكر", price: "من 4 000 درهم", desc: "علاج المرحلة الأولى لنمو فك الأطفال." },
          ]
        },
        {
          label: "تبييض الأسنان", title: "تبييض الأسنان", from: "250 درهم", blurb: "تفتيح ابتسامتك بأمان حتى 8 درجات من خلال بروتوكولاتنا الاحترافية.",
          items: [
            { name: "تبييض بالليزر في العيادة", price: "1 800 درهم", desc: "تبييض احترافي في جلسة واحدة." },
            { name: "طقم التبييض المنزلي", price: "800 درهم", desc: "قوالب مخصصة مع جل تبييض احترافي." },
            { name: "تبييض مزدوج", price: "2 200 درهم", desc: "جلسة في العيادة + طقم صيانة منزلي." },
            { name: "إزالة التصبغات والتلميع", price: "250 درهم", desc: "إزالة بقع القهوة والشاي والتبغ." },
          ]
        },
        {
          label: "علاج اللثة", title: "علاج اللثة", from: "350 درهم", blurb: "رعاية متخصصة لصحة اللثة لحماية أسنانك وصحتك العامة.",
          items: [
            { name: "تنظيف الجير والتلميع", price: "350 درهم", desc: "إزالة الجير والبلاك فوق مستوى اللثة." },
            { name: "تنظيف عميق للثة", price: "600 درهم", desc: "تجريف تحت اللثة لعلاج جيوب اللثة." },
            { name: "جراحة اللثة", price: "من 2 000 درهم", desc: "جراحة لعلاج أمراض اللثة المتقدمة." },
            { name: "ترقيع اللثة", price: "من 2 500 درهم", desc: "ترقيع لتغطية انحسار اللثة." },
            { name: "جلسة صيانة للثة", price: "400 درهم", desc: "جلسة علاج داعم كل 3 أشهر." },
          ]
        },
        {
          label: "الأشعة", title: "الأشعة", from: "60 درهم", blurb: "تصوير رقمي متقدم لتقديم تشخيصات دقيقة بأقل تعرض للإشعاع.",
          items: [
            { name: "أشعة للسن", price: "60 درهم", desc: "أشعة سينية رقمية داخل الفم." },
            { name: "أشعة كشف التسوس", price: "200 درهم", desc: "أشعة للكشف عن التسوس بين الأسنان." },
            { name: "أشعة بانورامية", price: "250 درهم", desc: "صورة بانورامية للأسنان والفكين." },
            { name: "أشعة سيفالومترك", price: "300 درهم", desc: "صورة جانبية لتخطيط تقويم الأسنان." },
            { name: "أشعة مقطعية 3D", price: "من 1 200 درهم", desc: "تصوير ثلاثي الأبعاد لتخطيط الزراعة والتشخيصات المعقدة." },
          ]
        },
        {
          label: "أخرى", title: "علاجات أخرى", from: "200 درهم", blurb: "رعاية أسنان شاملة لجميع الأعمار، من الفحوصات الدورية إلى الطوارئ.",
          items: [
            { name: "استشارة مبدئية", price: "200 درهم", desc: "فحص فموي كامل وتشخيص وخطة علاجية." },
            { name: "خلع بسيط", price: "300 درهم", desc: "إزالة روتينية لسن غير مطمور." },
            { name: "خلع جراحي", price: "800 درهم", desc: "إزالة جراحية لضرس العقل أو الأسنان المطمورة." },
            { name: "حشوة تجميلية", price: "400 درهم", desc: "حشوة بلون السن لعلاج التسوس." },
            { name: "علاج العصب", price: "من 1 200 درهم", desc: "علاج لب السن لإنقاذ السن التالف." },
            { name: "زيارة وقائية للأطفال", price: "250 درهم", desc: "فحص وفلورايد وعازل حفر الأسنان." },
          ]
        }
      ]
    }
  }[lang];

  const categories = t.categories;
  const cat = categories[active];

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue/5 blur-[120px] rounded-full pointer-events-none -mr-48 -mt-48" />

      <div className="container mx-auto px-5 sm:px-6 relative z-10">

        {/* Centered Header */}
        <div className="max-w-3xl mb-10 lg:mb-16 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-blue" />
            <span className="text-[11px] font-black text-blue tracking-[0.2em] uppercase">{t.eyebrow}</span>
            <div className="h-px w-8 bg-blue" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading text-[clamp(28px,5vw,56px)] font-black text-navy leading-[1.05] tracking-tight mb-6"
          >
            {t.headline_1} <br className="hidden md:block" />
            <span className="text-blue">{t.headline_2}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-[15px] sm:text-[17px] text-slate-500 leading-relaxed font-medium max-w-xl mx-auto"
          >
            {t.description}
          </motion.p>
        </div>

        {/* ── MOBILE layout (hidden on xl+) ── */}
        <div className={`xl:hidden ${dir === "rtl" ? "text-right" : "text-left"}`}>
          <div className="flex gap-2 overflow-x-auto pb-3 mb-5 snap-x no-scrollbar" style={{ scrollbarWidth: "none" }}>
            {categories.map((c, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`snap-start shrink-0 px-4 py-2 rounded-xl font-bold text-[13px] transition-all duration-200 ${
                  active === i ? "bg-navy text-white shadow-lg" : "bg-slate-100 text-slate-500"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`mob-hdr-${active}`}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="bg-navy rounded-[28px] p-5 mb-4 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue/20 blur-[40px] rounded-full pointer-events-none" />
              <div className="relative z-10">
                <h3 className="font-heading text-[22px] font-black leading-tight mb-2">{cat.title}</h3>
                <p className="text-white/60 text-[14px] leading-relaxed">{cat.blurb}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {cat.items.map((item, i) => (
                <motion.div
                  key={`mob-${active}-${i}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle2 size={14} className="text-blue/40 shrink-0" />
                        <h4 className="font-heading text-[15px] font-black text-navy leading-tight">{item.name}</h4>
                      </div>
                      <p className={`text-slate-400 text-[12px] leading-relaxed ${dir === "rtl" ? "mr-5" : "ml-5"}`}>{item.desc}</p>
                    </div>
                    <span className="font-heading text-[15px] font-black text-blue tracking-tight shrink-0" dir="ltr">{item.price}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <Link
            href="/contact"
            className={`mt-5 flex items-center justify-center gap-2 bg-blue text-white py-4 rounded-2xl font-bold text-[14px] shadow-lg shadow-blue/20 w-full ${dir === "rtl" ? "flex-row-reverse" : ""}`}
          >
            {t.getQuote} <ArrowRight size={16} className={dir === "rtl" ? "rotate-180" : ""} />
          </Link>
        </div>

        {/* ── DESKTOP layout (hidden below xl) ── */}
        <div className={`hidden xl:block ${dir === "rtl" ? "text-right" : "text-left"}`}>
          <div className="flex gap-2 overflow-x-auto pb-4 mb-8 snap-x no-scrollbar" style={{ scrollbarWidth: "none" }}>
            {categories.map((c, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`snap-start shrink-0 px-7 py-3.5 rounded-2xl font-bold text-[14px] transition-all duration-300 relative overflow-hidden ${
                  active === i
                    ? "text-white shadow-xl shadow-blue/20"
                    : "bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-navy"
                }`}
              >
                {active === i && (
                  <motion.div
                    layoutId="pricingTabActive"
                    className="absolute inset-0 bg-navy z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{c.label}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[400px_1fr] gap-8 lg:gap-16 items-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: dir === "rtl" ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir === "rtl" ? 20 : -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="xl:sticky xl:top-32"
              >
                <div className="bg-navy rounded-[40px] p-10 lg:p-12 text-white relative overflow-hidden shadow-2xl">
                  <div className={`absolute top-0 w-40 h-40 bg-blue/20 blur-[60px] rounded-full pointer-events-none ${dir === "rtl" ? "left-0" : "right-0"}`} />
                  <div className="relative z-10">
                    <div className={`flex items-center gap-3 mb-8 ${dir === "rtl" ? "justify-end" : "justify-start"}`}>
                      <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
                        <Tag size={20} className="text-blue" />
                      </div>
                      <span className="text-[11px] font-black text-white/40 tracking-[0.2em] uppercase">
                        {t.categoryText} {String(active + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-heading text-[28px] lg:text-[34px] font-black leading-tight mb-6">{cat.title}</h3>
                    <p className="text-white/60 text-[15px] leading-relaxed mb-8">{cat.blurb}</p>
                    <Link
                      href="/contact"
                      className={`group inline-flex items-center gap-3 bg-blue text-white w-full justify-center py-5 rounded-2xl font-bold text-[15px] hover:bg-white hover:text-navy transition-all duration-300 shadow-lg shadow-blue/20 ${dir === "rtl" ? "flex-row-reverse" : ""}`}
                    >
                      {t.getQuote} <ArrowRight size={18} className={`transition-transform ${dir === "rtl" ? "group-hover:-translate-x-1 rotate-180" : "group-hover:translate-x-1"}`} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="space-y-4 lg:space-y-5">
              <AnimatePresence mode="popLayout">
                {cat.items.map((item, i) => (
                  <motion.div
                    key={`desk-${active}-${i}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ delay: i * 0.04, duration: 0.4 }}
                    className={`group relative p-4 lg:p-5 rounded-[28px] bg-white border border-slate-100 hover:border-blue/20 hover:shadow-[0_20px_40px_-12px_rgba(13,27,75,0.08)] transition-all duration-500`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CheckCircle2 size={16} className="text-blue/30 group-hover:text-blue transition-colors" />
                          <h4 className="font-heading text-[18px] lg:text-[20px] font-black text-navy leading-tight">{item.name}</h4>
                        </div>
                        <p className={`text-slate-400 text-[14px] leading-relaxed max-w-lg ${dir === "rtl" ? "mr-7" : "ml-7"}`}>{item.desc}</p>
                      </div>
                      <div className={`flex items-center gap-4 ${dir === "rtl" ? "md:text-left pr-7 md:pr-0" : "md:text-right pl-7 md:pl-0"}`}>
                        <div className="h-px w-8 bg-slate-100 hidden md:block" />
                        <div className={`flex flex-col ${dir === "rtl" ? "items-start md:items-start" : "items-start md:items-end"}`}>
                          <span className="font-heading text-[22px] lg:text-[24px] font-black text-blue tracking-tight" dir="ltr">{item.price}</span>
                          <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mt-1">{t.startingPrice}</span>
                        </div>
                      </div>
                    </div>
                    <div className={`absolute top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 hidden lg:block ${dir === "rtl" ? "left-6 -translate-x-4 group-hover:translate-x-0" : "right-6 translate-x-4 group-hover:translate-x-0"}`}>
                      <ChevronRight size={24} className={`text-blue/20 ${dir === "rtl" ? "rotate-180" : ""}`} />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-12 flex items-start gap-4 p-6 lg:p-8 rounded-[32px] bg-slate-50 border border-slate-100"
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <Info size={18} className="text-blue" />
                </div>
                <p className="text-[14px] text-slate-500 leading-relaxed">
                  <span className="font-bold text-navy">{t.noteTitle}</span> {t.noteDesc}
                </p>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
