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
    },
    contact: {
      headline_1: "Prenez", headline_2: "Contact",
      description: "Nous sommes là pour vous aider à obtenir le sourire parfait. Contactez notre équipe pour prendre rendez-vous ou poser vos questions.",
      locationTitle: "Notre Adresse", location: "rond point LES CERISES, 12 lot zouhour salma 2, El Jadida 24000",
      callTitle: "Appelez-nous",
      hoursTitle: "Heures d'ouverture", hours: "24/7 (Vendredi: Fermé)",
      formHeadline_1: "Contactez-", formHeadline_2: "nous.",
      nameLabel: "Votre Nom", namePlaceholder: "Jean Dupont",
      phoneLabel: "Numéro de téléphone", phonePlaceholder: "06 00 00 00 00",
      subjectLabel: "Sujet", subjectPlaceholder: "Comment pouvons-nous vous aider ?",
      messageLabel: "Message", messagePlaceholder: "Parlez-nous de vos besoins...",
      submit: "Envoyer", submitting: "Envoi en cours...", success: "Envoyé !",
      directions: "Obtenir l'itinéraire",
      subjectOptions: ["Demande Générale", "Soins Urgents", "Rendez-vous"],
      emergency: {
        tag: "Urgence Dentaire 24/7",
        headline: "Rage de dent sévère ou blessure ?",
        desc: "N'attendez pas. Les urgences dentaires nécessitent une attention immédiate pour sauver votre dent. Nous assurons des soins rapides pour les traumatismes, douleurs, abcès.",
        box1Title: "Dent Expulsée", box1Desc: "Gardez-la humide. Replacez-la dans son alvéole ou conservez-la dans du lait.",
        box2Title: "Gonflement Sévère", box2Desc: "Appliquez une compresse froide sur votre joue et contactez-nous immédiatement.",
        callSOS: "Appelez notre ligne SOS"
      }
    },
    footer: {
      brandText: "À la Clinique Dentaire Dr. ADAM HAJJI, nous nous engageons à fournir des soins dentaires personnalisés de haute qualité. Notre équipe qualifiée utilise les dernières technologies pour garantir des traitements confortables.",
      quickLinks: "Liens Rapides",
      ourServices: "Nos Services",
      contactUs: "Contactez-nous",
      emergency: "Urgence 24/7",
      clinicLocation: "Emplacement de la clinique",
      callUs: "Appelez-nous",
      sendMessage: "Envoyer un message",
      rights: "© 2026 – Dr. ADAM HAJJI Clinique Dentaire. Tous droits réservés.",
      designedBy: "Conçu avec ❤️ par"
    },
    faq: {
      eyebrow: "FAQ",
      headline_1: "Vos questions,", headline_2: "nos réponses.",
      description: "Des réponses honnêtes et claires aux questions que posent nos patients avant leur première visite.",
      items: [
        { question: "À quelle fréquence dois-je consulter le dentiste ?", answer: "Nous recommandons de consulter le dentiste tous les six mois pour un examen et un nettoyage de routine. Des visites régulières aident à détecter les problèmes potentiels à un stade précoce." },
        { question: "Que dois-je faire en cas d'urgence dentaire ?", answer: "En cas d'urgence dentaire, contactez notre cabinet immédiatement. Nous proposons des rendez-vous d'urgence pour traiter les problèmes urgents le plus rapidement possible." },
        { question: "Proposez-vous des services pour les enfants ?", answer: "Oui ! Nous proposons des services de dentisterie pédiatrique spécialisés dans un environnement convivial et confortable conçu pour mettre les enfants à l'aise." },
        { question: "Quelles sont mes options pour remplacer des dents manquantes ?", answer: "Nous proposons plusieurs options, y compris les implants dentaires, les bridges et les prothèses. Lors de votre consultation, nous discuterons de l'option qui correspond le mieux à vos besoins." },
        { question: "Le blanchiment des dents est-il sûr ?", answer: "Oui, le blanchiment des dents professionnel est sûr lorsqu'il est supervisé par un professionnel dentaire. Nous utilisons des agents de blanchiment cliniquement approuvés." }
      ],
      videoEyebrow: "Contenu Éducatif",
      videoHeadline_1: "La connaissance est la première étape vers", videoHeadline_2: "un sourire plus sain.",
      videoExplore: "Explorer la chaîne",
      videoEducational: "Éducatif", videoWatch: "Regarder la vidéo"
    },
    services: {
      eyebrow: "Nos Services",
      headline_1: "Chaque traitement,", headline_2: "sous un même toit.",
      viewAll: "Voir tous les services",
      learnMore: "En savoir plus",
      backToServices: "Retour aux Services",
      implantTitle: "Implants Dentaires", implantDesc: "Remplacements permanents ancrés au titane qui ont l'apparence et la fonction de dents naturelles.", implantDetails: ["Fixation en titane", "Couronne en zircone", "Greffe osseuse", "Suivi"],
      prosthTitle: "Prothèses Dentaires", prosthDesc: "Couronnes, bridges et dentiers sur mesure restaurant la forme et l'esthétique.", prosthDetails: ["Couronnes en zircone", "Bridges fixes", "Dentiers", "Prothèses sur implants"],
      orthoTitle: "Orthodontie", orthoDesc: "Alignement précis avec des bagues ou des gouttières invisibles.", orthoDetails: ["Bagues", "Gouttières invisibles", "Contentions", "Interception précoce"],
      whiteTitle: "Blanchiment", whiteDesc: "Blanchiment professionnel - jusqu'à 8 teintes plus claires en une séance.", whiteDetails: ["Blanchiment au laser", "Kits à domicile", "Détartrage", "Sans sensibilité"],
      perioTitle: "Parodontologie", perioDesc: "Thérapie complète des maladies des gencives protégeant la fondation de vos dents.", perioDetails: ["Détartrage", "Chirurgie parodontale", "Greffe de gencive", "Maintenance"],
      radioTitle: "Radiologie", radioDesc: "Radiographies numériques et imagerie 3D avec une exposition minimale aux radiations.", radioDetails: ["Radiographies numériques", "Panoramique", "Scanner 3D", "Analyse instantanée"],
      childTitle: "Dentisterie Pédiatrique", childDesc: "Soins doux adaptés aux enfants pour développer de saines habitudes dès la première visite.", childDetails: ["Examens préventifs", "Fluor et scellements", "Soins sans douleur", "Dépistage précoce"]
    },
    serviceDetail: {
      overview: "Aperçu",
      whatToExpect: "Ce qu'il faut attendre",
      keyBenefits: "Avantages Clés",
      theProcess: "Le Processus",
      stepByStep: "Étape par étape",
      stepLabel: "Étape",
      satisfiedClients: "Clients Satisfaits",
      beforeAfter: "Avant & Après",
      swipeResults: "Glissez pour voir les résultats →",
      ready: "Prêt ?",
      bookConsultation: "Réservez votre consultation pour {title}.",
      bookButton: "Prendre Rendez-vous"
    },
    testimonials: {
      headline_1: "Apprécié par des", headline_2: "Milliers",
      description: "Rejoignez des milliers de patients satisfaits qui nous font confiance pour des soins experts, en douceur et de beaux sourires.",
      btnReview: "Laisser un avis",
      imageAlt: "Arrière-plan des avis"
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
    },
    contact: {
      headline_1: "Get in", headline_2: "Touch",
      description: "We're here to help you achieve the perfect smile. Contact our team to book an appointment or ask any questions you may have.",
      locationTitle: "Our Location", location: "rond point LES CERISES, 12 lot zouhour salma 2, El Jadida 24000",
      callTitle: "Call Us",
      hoursTitle: "Opening Hours", hours: "24/7 (Friday: Closed)",
      formHeadline_1: "Get in", formHeadline_2: "Touch.",
      nameLabel: "Your Name", namePlaceholder: "John Doe",
      phoneLabel: "Phone Number", phonePlaceholder: "+212 600 000 000",
      subjectLabel: "Subject", subjectPlaceholder: "How can we help?",
      messageLabel: "Message", messagePlaceholder: "Tell us about your dental needs...",
      submit: "Send Message", submitting: "Sending...", success: "Sent!",
      directions: "Get Directions",
      subjectOptions: ["General Inquiry", "Urgent Care", "Booking"],
      emergency: {
        tag: "24/7 Dental Emergency",
        headline: "Severe Toothache or Injury?",
        desc: "Do not wait. Dental emergencies require immediate attention to save your tooth and prevent infection. We provide rapid response care for trauma, severe pain, abscesses, and broken teeth.",
        box1Title: "Knocked Out Tooth", box1Desc: "Keep it moist. Try to place it back in the socket or store in milk until you reach our clinic.",
        box2Title: "Severe Swelling", box2Desc: "Apply a cold compress to the outside of your cheek and contact us immediately.",
        callSOS: "Call Our SOS Line"
      }
    },
    footer: {
      brandText: "At Dr.ADAM HAJJI Dental Clinic, we're dedicated to providing high-quality, personalized dental care. Our skilled team uses the latest technology to ensure comfortable, efficient treatments.",
      quickLinks: "Quick Links",
      ourServices: "Our Services",
      contactUs: "Contact Us",
      emergency: "SOS 24/7",
      clinicLocation: "Clinic Location",
      callUs: "Call Us",
      sendMessage: "Send a Message",
      rights: "© 2026 – Dr.ADAM HAJJI Dental Clinic. All rights reserved.",
      designedBy: "Designed with ❤️ by"
    },
    faq: {
      eyebrow: "FAQ",
      headline_1: "Your questions,", headline_2: "answered.",
      description: "Honest, clear answers to the questions our patients ask before their first visit.",
      items: [
        { question: "How often should I visit the dentist?", answer: "We recommend visiting the dentist every six months for a routine checkup and cleaning. Regular visits help detect potential issues early." },
        { question: "What should I do in a dental emergency?", answer: "In a dental emergency, contact our office immediately. We offer emergency appointments to address urgent issues as quickly as possible." },
        { question: "Do you offer services for kids?", answer: "Yes! We offer specialized pediatric dentistry services in a friendly, comfortable environment designed to make children feel at ease." },
        { question: "What are my options for replacing missing teeth?", answer: "We offer several options including dental implants, bridges, and dentures. During your consultation, we'll discuss which option best suits your needs." },
        { question: "Is teeth whitening safe?", answer: "Yes, professional teeth whitening is safe when performed or supervised by a dental professional. We use clinically approved whitening agents." }
      ],
      videoEyebrow: "Educational Content",
      videoHeadline_1: "Knowledge is the first step to", videoHeadline_2: "a healthier smile.",
      videoExplore: "Explore Channel",
      videoEducational: "Educational", videoWatch: "Watch Procedure"
    },
    services: {
      eyebrow: "Our Services",
      headline_1: "Every treatment,", headline_2: "under one roof.",
      viewAll: "View All Services",
      learnMore: "Learn more",
      backToServices: "Back to Services",
      implantTitle: "Dental Implants", implantDesc: "Permanent titanium-anchored replacements that look, feel, and function like natural teeth.", implantDetails: ["Titanium fixture", "Zirconia crown", "Bone grafting", "Long-term follow-up"],
      prosthTitle: "Dental Prosthetics", prosthDesc: "Custom crowns, bridges, and dentures restoring form and natural aesthetics.", prosthDetails: ["Zirconia crowns", "Fixed bridges", "Full dentures", "Implant prosthetics"],
      orthoTitle: "Orthodontics", orthoDesc: "Precise alignment with braces or invisible clear aligners.", orthoDetails: ["Metal & ceramic braces", "Clear aligners", "Retainers", "Early interceptive"],
      whiteTitle: "Teeth Whitening", whiteDesc: "Professional whitening - up to 8 shades brighter in one session.", whiteDetails: ["Laser whitening", "Take-home trays", "Stain removal", "Sensitivity-free"],
      perioTitle: "Periodontal Treatment", perioDesc: "Comprehensive gum disease therapy protecting your teeth's foundation.", perioDetails: ["Scaling & root planing", "Periodontal surgery", "Gum grafting", "Maintenance"],
      radioTitle: "Radiology", radioDesc: "Digital X-rays and 3D cone-beam imaging with minimal radiation.", radioDetails: ["Digital X-rays", "Panoramic OPG", "CBCT 3D scan", "Instant analysis"],
      childTitle: "Children's Treatments", childDesc: "Gentle, child-friendly care that builds healthy habits from the first visit.", childDetails: ["Preventive exams", "Fluoride & sealants", "Painless fillings", "Early screening"]
    },
    serviceDetail: {
      overview: "Overview",
      whatToExpect: "What to expect",
      keyBenefits: "Key Benefits",
      theProcess: "The Process",
      stepByStep: "Step by step",
      stepLabel: "Step",
      satisfiedClients: "Satisfied Clients",
      beforeAfter: "Before & After",
      swipeResults: "Swipe to see results →",
      ready: "Ready?",
      bookConsultation: "Book your {title} consultation.",
      bookButton: "Book Appointment"
    },
    testimonials: {
      headline_1: "Loved By", headline_2: "Thousands",
      description: "Join thousands of happy patients who trust us for gentle, expert care and beautiful smiles.",
      btnReview: "Leave a Review",
      imageAlt: "Testimonials Background"
    }
  }
};

export type Language = "fr" | "en";
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
    if (saved && ["fr", "en"].includes(saved)) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("site_lang", newLang);
  };

  const t = dictionaries[lang];
  const dir = "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.documentElement.classList.remove("font-arabic");
  }, [lang, dir]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir }}>
      <div dir={dir}>
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
