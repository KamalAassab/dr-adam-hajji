"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// ── DICTIONARY ──
export const dictionaries = {
  fr: {
    navbar: {
      home: "Accueil",
      services: "Services",
      gallery: "Galerie",
      about: "À propos",
      contact: "Contact",
      bookVisit: "Prendre RDV",
      sos: "Urgence",
      language: "Français"
    },
    hero: {
      eyebrow: "Soins Dentaires",
      headline_1: "Exceptionnels",
      headline_2: "Pour Vous",
      description: "Des traitements personnalisés alliés à la précision numérique. Découvrez une nouvelle norme de soins dentaires où votre confort est notre priorité absolue.",
      bookAppointment: "Prendre un rendez-vous",
      rating: "4.9/5",
      trusted: "Recommandé par nos patients"
    },
    about: {
      eyebrow: "À propos du cabinet",
      headline_1: "Des soins dentaires qui",
      headline_2: "privilégient l'humain.",
      p1: "Le Dr ADAM HAJJI a fondé ce cabinet sur un principe unique : chaque patient mérite un diagnostic clair, des options honnêtes et un traitement exécuté avec précision - sans hâte, sans survente.",
      p2: "Basés à El Jadida, nous combinons plus de 15 ans d'expérience clinique avec des flux de travail entièrement numériques - de l'imagerie 3D Cone-Beam aux prothèses dans la journée - pour des résultats prévisibles et des visites efficaces.",
      stats: {
        years: { value: "15+", label: "Années d'expérience" },
        patients: { value: "4 000+", label: "Patients traités" },
        specialties: { value: "7", label: "Spécialités" },
        digital: { value: "100%", label: "Flux numériques" }
      },
      btnBook: "Prendre Rendez-vous",
      btnStory: "Notre histoire"
    }
  },
  en: {
    navbar: {
      home: "Home",
      services: "Services",
      gallery: "Gallery",
      about: "About",
      contact: "Contact",
      bookVisit: "Book Visit",
      sos: "SOS",
      language: "English"
    },
    hero: {
      eyebrow: "Dental Care",
      headline_1: "Exceptional",
      headline_2: "For You",
      description: "Personalized treatments meet digital precision. Experience a new standard of dental care where your comfort is our highest priority.",
      bookAppointment: "Book Appointment",
      rating: "4.9/5",
      trusted: "Trusted by Patients"
    },
    about: {
      eyebrow: "About the Clinic",
      headline_1: "Dental care that puts",
      headline_2: "people first.",
      p1: "Dr. ADAM HAJJI founded this clinic with one principle: every patient deserves a clear diagnosis, honest options, and treatment carried out with precision - not rushed, not oversold.",
      p2: "Based in El Jadida, we combine over 15 years of clinical experience with fully digital workflows - from cone-beam 3D imaging to same-day prosthetics - so results are predictable and visits are efficient.",
      stats: {
        years: { value: "15+", label: "Years of practice" },
        patients: { value: "4 000+", label: "Patients treated" },
        specialties: { value: "7", label: "Specialties offered" },
        digital: { value: "100%", label: "Digital workflows" }
      },
      btnBook: "Book an Appointment",
      btnStory: "Our story"
    }
  },
  ar: {
    navbar: {
      home: "الرئيسية",
      services: "خدماتنا",
      gallery: "المعرض",
      about: "من نحن",
      contact: "اتصل بنا",
      bookVisit: "احجز موعداً",
      sos: "طوارئ",
      language: "العربية"
    },
    hero: {
      eyebrow: "عناية الأسنان",
      headline_1: "رعاية استثنائية",
      headline_2: "لأجلك",
      description: "علاجات مخصصة تلتقي بالدقة الرقمية. اختبر معياراً جديداً لطب الأسنان حيث راحتك هي أولويتنا القصوى.",
      bookAppointment: "احجز موعداً",
      rating: "4.9/5",
      trusted: "يثق بنا مرضانا"
    },
    about: {
      eyebrow: "عن العيادة",
      headline_1: "رعاية أسنان تضع",
      headline_2: "الإنسان أولاً.",
      p1: "أسس الدكتور آدم حجي هذه العيادة بمبدأ واحد: كل مريض يستحق تشخيصاً واضحاً، خيارات صادقة، وعلاجاً يُنفذ بدقة - دون تسرع ودون مبالغة.",
      p2: "من مقرنا في مدينة الجديدة، نجمع بين أكثر من 15 عاماً من الخبرة السريرية مع مسارات عمل رقمية بالكامل - من التصوير ثلاثي الأبعاد إلى التركيبات في نفس اليوم - لضمان نتائج مضمونة وزيارات فعالة.",
      stats: {
        years: { value: "+15", label: "سنوات الخبرة" },
        patients: { value: "+4 000", label: "مريض تم علاجهم" },
        specialties: { value: "7", label: "تخصصات طبية" },
        digital: { value: "%100", label: "تقنيات رقمية" }
      },
      btnBook: "احجز موعداً",
      btnStory: "قصتنا"
    }
  }
};

export type Language = "fr" | "en" | "ar";
export type Dictionary = typeof dictionaries.fr;

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Dictionary;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("fr");

  useEffect(() => {
    // Load saved lang
    const saved = localStorage.getItem("site_lang") as Language;
    if (saved && ["fr", "en", "ar"].includes(saved)) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("site_lang", newLang);
  };

  const t = dictionaries[lang];
  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    if (lang === "ar") {
      document.documentElement.classList.add("font-arabic");
    } else {
      document.documentElement.classList.remove("font-arabic");
    }
  }, [lang, dir]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir }}>
      <div dir={dir} className={lang === "ar" ? "font-arabic" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
