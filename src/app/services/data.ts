import { Language } from "@/i18n/LanguageContext";

export interface ServiceData {
  title: string;
  num: string;
  tagline: string;
  intro: string;
  heroImage: string;
  steps: { title: string; body: string; photo: string }[];
  benefits: string[];
}

export const servicesData: Record<Language, Record<string, ServiceData>> = {
  fr: {
    "dental-implants": {
      title: "Implants Dentaires",
      num: "01",
      tagline: "Une solution permanente qui semble tout à fait naturelle.",
      intro: "Un implant dentaire est un tenon en titane placé dans l'os de la mâchoire qui agit comme une racine artificielle. Une fois intégré, il soutient une couronne en zircone sur mesure — indiscernable des dents naturelles et conçue pour durer toute une vie.",
      heroImage: "https://images.pexels.com/photos/6502305/pexels-photo-6502305.jpeg?auto=compress&cs=tinysrgb&w=1200",
      steps: [
        { title: "Évaluation 3D", body: "Un scanner CBCT à faisceau conique évalue le volume osseux et le positionnement idéal de l'implant avant tout traitement.", photo: "https://images.pexels.com/photos/6812468/pexels-photo-6812468.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Pose de l'implant", body: "Le dispositif en titane est placé sous anesthésie locale. L'intégration à l'os prend 8 à 12 semaines.", photo: "https://images.pexels.com/photos/20301624/pexels-photo-20301624.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Pose de la couronne", body: "Une couronne en zircone personnalisée est fabriquée et fixée de manière permanente sur le pilier de l'implant.", photo: "https://images.pexels.com/photos/12712256/pexels-photo-12712256.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Suivi à long terme", body: "Des contrôles annuels garantissent la stabilité de l'implant et la santé des gencives pour des décennies de fonction fiable.", photo: "https://images.pexels.com/photos/6812576/pexels-photo-6812576.jpeg?auto=compress&cs=tinysrgb&w=800" },
      ],
      benefits: ["Sensation de dent naturelle", "Préserve la structure de l'os de la mâchoire", "Aucun adhésif requis", "Taux de réussite de 90-95% à 10 ans", "Protège les dents adjacentes"],
    },
    "dental-prosthetics": {
      title: "Prothèses Dentaires",
      num: "02",
      tagline: "Des restaurations artisanales sur mesure conçues pour durer.",
      intro: "Chaque prothèse — couronne, bridge ou dentier — est fabriquée avec précision dans un laboratoire certifié en utilisant les meilleurs matériaux en céramique et zircone, correspondant exactement à vos dents naturelles.",
      heroImage: "https://images.pexels.com/photos/18662954/pexels-photo-18662954.jpeg?auto=compress&cs=tinysrgb&w=1200",
      steps: [
        { title: "Évaluation clinique", body: "Nous évaluons la dent endommagée, l'occlusion et l'esthétique avant de choisir la solution prothétique idéale.", photo: "https://images.pexels.com/photos/6627345/pexels-photo-6627345.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Préparation & Empreinte", body: "La dent est préparée et une empreinte numérique guide la fabrication en laboratoire.", photo: "https://images.pexels.com/photos/6812508/pexels-photo-6812508.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Restauration provisoire", body: "Vous repartez avec une couronne provisoire pendant que votre prothèse définitive est confectionnée.", photo: "https://images.pexels.com/photos/6627669/pexels-photo-6627669.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Pose finale", body: "La restauration définitive est cimentée avec une attention méticuleuse à l'occlusion, à la couleur et au contour.", photo: "https://images.pexels.com/photos/12712256/pexels-photo-12712256.jpeg?auto=compress&cs=tinysrgb&w=800" },
      ],
      benefits: ["Correspondance exacte de couleur et de forme", "Matériaux en porcelaine et zircone", "Restaure la fonction de mastication complète", "Durée de vie de 15 à 20 ans", "Options fixes ou amovibles"],
    },
    "orthodontics": {
      title: "Orthodontie",
      num: "03",
      tagline: "Un sourire droit, livré avec précision.",
      intro: "Des bagues métalliques traditionnelles aux bagues en céramique et aux aligneurs transparents totalement invisibles — nous proposons toute la gamme de solutions orthodontiques adaptées à votre anatomie et à votre style de vie.",
      heroImage: "https://images.pexels.com/photos/19328507/pexels-photo-19328507.jpeg?auto=compress&cs=tinysrgb&w=1200",
      steps: [
        { title: "Dossier diagnostic", body: "Une radiographie panoramique, une analyse céphalométrique et des photos numériques constituent la base de votre plan.", photo: "https://images.pexels.com/photos/6502033/pexels-photo-6502033.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Planification du traitement", body: "Nous cartographions toute la séquence de mouvement des dents et la durée du traitement avant que vous ne vous engagiez.", photo: "https://images.pexels.com/photos/6627345/pexels-photo-6627345.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Traitement actif", body: "Des rendez-vous d'ajustement toutes les 4 à 6 semaines garantissent que les dents se déplacent en toute sécurité et selon le calendrier prévu.", photo: "https://images.pexels.com/photos/5524024/pexels-photo-5524024.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Contention", body: "Des appareils de contention sur mesure préservent vos résultats longtemps après la fin du traitement actif.", photo: "https://images.pexels.com/photos/3845985/pexels-photo-3845985.jpeg?auto=compress&cs=tinysrgb&w=800" },
      ],
      benefits: ["Corrige l'encombrement, l'espacement et l'occlusion", "Option d'aligneurs invisibles", "Convient aux adolescents et aux adultes", "Aperçu numérique du traitement", "Interception précoce pour les enfants"],
    },
    "teeth-whitening": {
      title: "Blanchiment des dents",
      num: "04",
      tagline: "Jusqu'à 8 teintes plus claires en une seule visite.",
      intro: "Notre protocole de blanchiment professionnel utilise des agents de blanchiment de qualité clinique activés par LED — bien plus efficaces et sûrs que n'importe quel produit en vente libre.",
      heroImage: "https://images.pexels.com/photos/6627604/pexels-photo-6627604.jpeg?auto=compress&cs=tinysrgb&w=1200",
      steps: [
        { title: "Évaluation de la teinte", body: "Nous enregistrons votre teinte actuelle avec un guide standardisé pour mesurer objectivement les résultats.", photo: "https://images.pexels.com/photos/3884101/pexels-photo-3884101.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Protection des gencives", body: "Une barrière protectrice est appliquée sur le tissu gingival avant que l'agent de blanchiment ne touche les dents.", photo: "https://images.pexels.com/photos/7800525/pexels-photo-7800525.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Séance de blanchiment", body: "Le gel professionnel est appliqué en deux ou trois cycles de 15 minutes avec activation LED.", photo: "https://images.pexels.com/photos/5622271/pexels-photo-5622271.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Kit à domicile", body: "Des gouttières sur mesure avec un gel d'entretien prolongent et préservent vos résultats à la maison.", photo: "https://images.pexels.com/photos/33334321/pexels-photo-33334321.jpeg?auto=compress&cs=tinysrgb&w=800" },
      ],
      benefits: ["Jusqu'à 8 teintes plus claires", "Sans danger pour l'émail", "Résultats visibles immédiatement", "Dure 1 à 3 ans", "Protocole sans sensibilité"],
    },
    "periodontal-treatment": {
      title: "Traitement parodontal",
      num: "05",
      tagline: "Protéger les fondations de votre sourire.",
      intro: "La maladie des gencives est la principale cause de perte de dents chez l'adulte — largement silencieuse jusqu'à un stade avancé. Notre équipe diagnostique et traite tous les stades avec la précision requise pour stopper la perte osseuse et restaurer la santé des gencives.",
      heroImage: "https://images.pexels.com/photos/3779713/pexels-photo-3779713.jpeg?auto=compress&cs=tinysrgb&w=1200",
      steps: [
        { title: "Bilan parodontal", body: "Les profondeurs des poches, les sites de saignement et les niveaux osseux sont enregistrés à chaque visite.", photo: "https://images.pexels.com/photos/31188653/pexels-photo-31188653.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Nettoyage en profondeur", body: "Le détartrage et le surfaçage radiculaire éliminent le tartre sous la gencive sous anesthésie locale.", photo: "https://images.pexels.com/photos/5622010/pexels-photo-5622010.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Phase chirurgicale", body: "Les cas avancés peuvent nécessiter une chirurgie à lambeau ou des procédures régénératrices pour restaurer l'os perdu.", photo: "https://images.pexels.com/photos/4269362/pexels-photo-4269362.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Maintenance", body: "Des visites de maintenance régulières tous les 3-4 mois préviennent la récidive et stabilisent les résultats.", photo: "https://images.pexels.com/photos/6193192/pexels-photo-6193192.jpeg?auto=compress&cs=tinysrgb&w=800" },
      ],
      benefits: ["Stoppe la perte osseuse et dentaire", "Réduit les saignements et l'inflammation", "Améliore l'haleine", "Options non chirurgicales disponibles", "Protocole basé sur des preuves"],
    },
    "radiology": {
      title: "Radiologie",
      num: "06",
      tagline: "Imagerie de précision pour des diagnostics précis.",
      intro: "Notre suite de radiologie entièrement numérique — comprenant la technologie 3D CBCT — nous permet de visualiser l'os, les racines, les sinus et les tissus mous avec une fraction du rayonnement des radiographies argentiques traditionnelles.",
      heroImage: "https://images.pexels.com/photos/6501853/pexels-photo-6501853.jpeg?auto=compress&cs=tinysrgb&w=1200",
      steps: [
        { title: "Indication clinique", body: "Les images ne sont prises que lorsqu'elles sont cliniquement justifiées — jamais inutilement.", photo: "https://images.pexels.com/photos/6812576/pexels-photo-6812576.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Capture numérique", body: "Les capteurs capturent instantanément avec jusqu'à 90% de rayonnement en moins que le film traditionnel.", photo: "https://images.pexels.com/photos/6501853/pexels-photo-6501853.jpeg?auto=compress&cs=tinysrgb&w=1200" },
        { title: "Analyse sur écran", body: "Les images sont examinées avec vous sur un moniteur calibré pendant votre rendez-vous.", photo: "https://images.pexels.com/photos/7800665/pexels-photo-7800665.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Stockage sécurisé", body: "Tous les dossiers sont stockés numériquement et disponibles pour une recommandation ou un deuxième avis.", photo: "https://images.pexels.com/photos/6627345/pexels-photo-6627345.jpeg?auto=compress&cs=tinysrgb&w=800" },
      ],
      benefits: ["90% de rayonnement en moins que le film", "Résultats instantanés sur écran", "Imagerie volumétrique CBCT 3D", "Vues panoramiques et céphalométriques", "Dossiers numériques sécurisés"],
    },
    "childrens-treatments": {
      title: "Soins pour enfants",
      num: "07",
      tagline: "Instaurer de saines habitudes dès la toute première visite.",
      intro: "Notre approche privilégie la prévention — établir une relation de confiance avec les jeunes patients pour que les visites chez le dentiste soient calmes, sûres et même agréables dès le début.",
      heroImage: "https://images.pexels.com/photos/4185330/pexels-photo-4185330.jpeg?auto=compress&cs=tinysrgb&w=1200",
      steps: [
        { title: "Première visite", body: "Une familiarisation en douceur — examen visuel uniquement, sans instruments, pour instaurer confiance et confort.", photo: "https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Soins préventifs", body: "Nettoyage professionnel, fluor et scellements de sillons pour protéger les dents définitives en cours d'éruption.", photo: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Dépistage orthodontique précoce", body: "Nous surveillons le développement de la mâchoire dès l'âge de 7 ans pour intercepter les problèmes tôt.", photo: "https://images.pexels.com/photos/3845799/pexels-photo-3845799.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Traitement restaurateur", body: "Des techniques et une anesthésie adaptées aux enfants garantissent une expérience positive et sans douleur.", photo: "https://images.pexels.com/photos/3845811/pexels-photo-3845811.jpeg?auto=compress&cs=tinysrgb&w=800" },
      ],
      benefits: ["Environnement à faible anxiété", "Protection par fluor et scellement", "Orthodontie interceptive précoce", "Option de présence des parents", "Philosophie axée sur la prévention"],
    },
  },
  en: {
    "dental-implants": {
      title: "Dental Implants",
      num: "01",
      tagline: "A permanent solution that feels completely natural.",
      intro: "A dental implant is a titanium post placed in the jawbone that acts as an artificial root. Once integrated, it supports a custom zirconia crown — indistinguishable from natural teeth and built to last a lifetime.",
      heroImage: "https://images.pexels.com/photos/6502305/pexels-photo-6502305.jpeg?auto=compress&cs=tinysrgb&w=1200",
      steps: [
        { title: "3D Assessment", body: "A CBCT cone-beam scan evaluates bone volume and ideal implant positioning before any treatment.", photo: "https://images.pexels.com/photos/6812468/pexels-photo-6812468.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Implant Placement", body: "The titanium fixture is placed under local anaesthesia. Integration with the bone takes 8–12 weeks.", photo: "https://images.pexels.com/photos/20301624/pexels-photo-20301624.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Crown Fitting", body: "A custom zirconia crown is fabricated and permanently fixed to the implant abutment.", photo: "https://images.pexels.com/photos/12712256/pexels-photo-12712256.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Long-Term Follow-Up", body: "Annual check-ups ensure implant stability and gum health for decades of reliable function.", photo: "https://images.pexels.com/photos/6812576/pexels-photo-6812576.jpeg?auto=compress&cs=tinysrgb&w=800" },
      ],
      benefits: ["Feels like a natural tooth", "Preserves jawbone structure", "No adhesives required", "90–95% 10-year success rate", "Protects adjacent teeth"],
    },
    "dental-prosthetics": {
      title: "Dental Prosthetics",
      num: "02",
      tagline: "Custom-crafted restorations built to last.",
      intro: "Every prosthetic — crown, bridge, or denture — is precision-fabricated in a certified laboratory using the finest ceramic and zirconia materials, matched exactly to your natural teeth.",
      heroImage: "https://images.pexels.com/photos/18662954/pexels-photo-18662954.jpeg?auto=compress&cs=tinysrgb&w=1200",
      steps: [
        { title: "Clinical Evaluation", body: "We assess the damaged tooth, occlusion, and aesthetics before choosing the ideal prosthetic solution.", photo: "https://images.pexels.com/photos/6627345/pexels-photo-6627345.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Preparation & Impression", body: "The tooth is prepared and a digital impression guides laboratory fabrication.", photo: "https://images.pexels.com/photos/6812508/pexels-photo-6812508.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Temporary Restoration", body: "You leave with a temporary crown while your definitive prosthetic is being crafted.", photo: "https://images.pexels.com/photos/6627669/pexels-photo-6627669.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Final Fitting", body: "The definitive restoration is cemented with meticulous attention to bite, colour, and contour.", photo: "https://images.pexels.com/photos/12712256/pexels-photo-12712256.jpeg?auto=compress&cs=tinysrgb&w=800" },
      ],
      benefits: ["Exact colour and shape match", "Porcelain & zirconia materials", "Restores full chewing function", "15–20 year lifespan", "Fixed or removable options"],
    },
    "orthodontics": {
      title: "Orthodontics",
      num: "03",
      tagline: "A straight smile, delivered with precision.",
      intro: "From traditional metal brackets to ceramic braces and fully invisible clear aligners — we offer the full spectrum of orthodontic solutions tailored to your anatomy and lifestyle.",
      heroImage: "https://images.pexels.com/photos/19328507/pexels-photo-19328507.jpeg?auto=compress&cs=tinysrgb&w=1200",
      steps: [
        { title: "Diagnostic Records", body: "Panoramic X-ray, cephalometric analysis, and digital photos form the basis of your plan.", photo: "https://images.pexels.com/photos/6502033/pexels-photo-6502033.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Treatment Planning", body: "We map the full tooth movement sequence and treatment duration before you commit.", photo: "https://images.pexels.com/photos/6627345/pexels-photo-6627345.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Active Treatment", body: "Adjustment appointments every 4–6 weeks ensure teeth move safely and on schedule.", photo: "https://images.pexels.com/photos/5524024/pexels-photo-5524024.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Retention", body: "Custom retainers preserve your results long after active treatment ends.", photo: "https://images.pexels.com/photos/3845985/pexels-photo-3845985.jpeg?auto=compress&cs=tinysrgb&w=800" },
      ],
      benefits: ["Corrects crowding, spacing & bite", "Invisible aligner option", "Suitable for teens and adults", "Digital treatment preview", "Early interceptive for children"],
    },
    "teeth-whitening": {
      title: "Teeth Whitening",
      num: "04",
      tagline: "Up to 8 shades brighter in a single visit.",
      intro: "Our professional whitening protocol uses clinic-grade bleaching agents activated by LED — far more effective and safer than any over-the-counter product.",
      heroImage: "https://images.pexels.com/photos/6627604/pexels-photo-6627604.jpeg?auto=compress&cs=tinysrgb&w=1200",
      steps: [
        { title: "Shade Assessment", body: "We record your current shade with a standardised guide to objectively measure results.", photo: "https://images.pexels.com/photos/3884101/pexels-photo-3884101.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Gum Protection", body: "A protective barrier is applied to gum tissue before any bleaching agent contacts the teeth.", photo: "https://images.pexels.com/photos/7800525/pexels-photo-7800525.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Whitening Session", body: "Professional gel is applied in two or three 15-minute cycles with LED activation.", photo: "https://images.pexels.com/photos/5622271/pexels-photo-5622271.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Take-Home Kit", body: "Custom trays with maintenance gel extend and preserve your results at home.", photo: "https://images.pexels.com/photos/33334321/pexels-photo-33334321.jpeg?auto=compress&cs=tinysrgb&w=800" },
      ],
      benefits: ["Up to 8 shades lighter", "Safe for enamel", "Results visible immediately", "Lasts 1–3 years", "Sensitivity-free protocol"],
    },
    "periodontal-treatment": {
      title: "Periodontal Treatment",
      num: "05",
      tagline: "Protecting the foundation of your smile.",
      intro: "Gum disease is the leading cause of adult tooth loss — largely silent until advanced. Our team diagnoses and treats all stages with the precision required to halt bone loss and restore gum health.",
      heroImage: "https://images.pexels.com/photos/3779713/pexels-photo-3779713.jpeg?auto=compress&cs=tinysrgb&w=1200",
      steps: [
        { title: "Periodontal Charting", body: "Pocket depths, bleeding sites, and bone levels are recorded at every visit.", photo: "https://images.pexels.com/photos/31188653/pexels-photo-31188653.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Deep Cleaning", body: "Scaling and root planing removes calculus from below the gumline under local anaesthesia.", photo: "https://images.pexels.com/photos/5622010/pexels-photo-5622010.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Surgical Phase", body: "Advanced cases may need flap surgery or regenerative procedures to restore lost bone.", photo: "https://images.pexels.com/photos/4269362/pexels-photo-4269362.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Maintenance", body: "Regular 3–4 month maintenance visits prevent recurrence and stabilise results.", photo: "https://images.pexels.com/photos/6193192/pexels-photo-6193192.jpeg?auto=compress&cs=tinysrgb&w=800" },
      ],
      benefits: ["Halts bone and tooth loss", "Reduces bleeding and inflammation", "Improves breath", "Non-surgical options available", "Evidence-based protocol"],
    },
    "radiology": {
      title: "Radiology",
      num: "06",
      tagline: "Precision imaging for accurate diagnoses.",
      intro: "Our fully digital radiology suite — including CBCT 3D cone-beam technology — lets us visualise bone, roots, sinuses, and soft tissue with a fraction of the radiation of traditional film X-rays.",
      heroImage: "https://images.pexels.com/photos/6501853/pexels-photo-6501853.jpeg?auto=compress&cs=tinysrgb&w=1200",
      steps: [
        { title: "Clinical Indication", body: "Images are only taken when clinically justified — never unnecessarily.", photo: "https://images.pexels.com/photos/6812576/pexels-photo-6812576.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Digital Capture", body: "Sensors capture instantly with up to 90% less radiation than traditional film.", photo: "https://images.pexels.com/photos/6501853/pexels-photo-6501853.jpeg?auto=compress&cs=tinysrgb&w=1200" },
        { title: "On-Screen Analysis", body: "Images are reviewed with you on a calibrated monitor during your appointment.", photo: "https://images.pexels.com/photos/7800665/pexels-photo-7800665.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Secure Storage", body: "All records are stored digitally and available for referral or second opinion.", photo: "https://images.pexels.com/photos/6627345/pexels-photo-6627345.jpeg?auto=compress&cs=tinysrgb&w=800" },
      ],
      benefits: ["90% less radiation than film", "Instant on-screen results", "CBCT 3D volumetric imaging", "Panoramic & cephalometric views", "Secure digital records"],
    },
    "childrens-treatments": {
      title: "Children's Treatments",
      num: "07",
      tagline: "Building healthy habits from the very first visit.",
      intro: "Our approach puts prevention first — building trust with young patients so that dental visits feel calm, safe, and even enjoyable from the very beginning.",
      heroImage: "https://images.pexels.com/photos/4185330/pexels-photo-4185330.jpeg?auto=compress&cs=tinysrgb&w=1200",
      steps: [
        { title: "First Visit", body: "A gentle familiarisation — visual check only, no instruments, building trust and comfort.", photo: "https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Preventive Care", body: "Professional cleaning, fluoride, and fissure sealants to protect erupting permanent teeth.", photo: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Early Orthodontic Screening", body: "We monitor jaw development from age 7 to intercept issues early.", photo: "https://images.pexels.com/photos/3845799/pexels-photo-3845799.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Restorative Treatment", body: "Child-appropriate techniques and anaesthesia ensure a pain-free, positive experience.", photo: "https://images.pexels.com/photos/3845811/pexels-photo-3845811.jpeg?auto=compress&cs=tinysrgb&w=800" },
      ],
      benefits: ["Low-anxiety environment", "Fluoride & sealant protection", "Early interceptive orthodontics", "Parent-present option", "Preventive-first philosophy"],
    },
  }
};
