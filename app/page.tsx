import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  metadataBase: new URL("https://boorgerkirk.dev"),
  title: "BoorgerKirk Team",
  description:
    "Team landing page for BoorgerKirk, a student team building websites, AI automation, machine learning, and computer science projects.",
  openGraph: {
    type: "website",
    url: "https://boorgerkirk.dev",
    title: "BoorgerKirk Team",
    description:
      "Web development, AI automation, machine learning, and software prototypes by BoorgerKirk Team.",
  },
  twitter: {
    card: "summary",
    title: "BoorgerKirk Team",
    description:
      "Web development, AI automation, machine learning, and software prototypes by BoorgerKirk Team.",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <TeamSection />
      <CommunitySection />
      <PricingSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
