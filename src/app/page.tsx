import Hero from "@/components/sections/Hero";
import AboutSummary from "@/components/sections/AboutSummary";
import ServicesSummary from "@/components/sections/ServicesSummary";
import TeamSummary from "@/components/sections/TeamSummary";
import FAQSummary from "@/components/sections/FAQSummary";
import TestimonialsSummary from "@/components/sections/TestimonialsSummary";
import GallerySummary from "@/components/sections/GallerySummary";
import ContactSummary from "@/components/sections/ContactSummary";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSummary />
      <ServicesSummary />
      <TeamSummary />
      <FAQSummary />
      <TestimonialsSummary />
      <GallerySummary />
      <ContactSummary />
    </>
  );
}
