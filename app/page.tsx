import type { Metadata } from "next";
import SolarHero from "@/components/hero/SolarHero";
import SolarSavingsCalculator from "@/components/calculator/SolarSavingsCalculator";
import SolutionsOverview from "@/components/sections/SolutionsOverview";
import HybridFeature from "@/components/sections/HybridFeature";
import SystemPackages from "@/components/sections/SystemPackages";
import WhyVayani from "@/components/sections/WhyVayani";
import ProductShowcase from "@/components/sections/ProductShowcase";
import InstallationSection from "@/components/sections/InstallationSection";
import ServiceProcess from "@/components/sections/ServiceProcess";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import AfterSalesSection from "@/components/sections/AfterSalesSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Solar Company in Karachi — Hybrid Solar Systems",
  description:
    "Hybrid solar systems, Tier-1 solar panels, smart inverters and lithium battery storage for homes and businesses in Karachi. Get a free solar estimate from Vayani Energy Solutions.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <SolarHero />
      <SolarSavingsCalculator />
      <SolutionsOverview />
      <HybridFeature />
      <SystemPackages />
      <WhyVayani />
      <ProductShowcase />
      <InstallationSection />
      <ServiceProcess />
      <ProjectsPreview />
      <AfterSalesSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
