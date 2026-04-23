import PageHeader from "@/components/layout/PageHeader";
import ContactSummary from "@/components/sections/ContactSummary";
import FAQSummary from "@/components/sections/FAQSummary";

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" breadcrumb="Contact" />
      <ContactSummary />
      <FAQSummary hideLink={true} />
    </>
  );
}
