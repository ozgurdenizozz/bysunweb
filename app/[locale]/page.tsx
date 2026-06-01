import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import AboutSection from "@/components/sections/AboutSection";
import EnergyOSSection from "@/components/sections/EnergyOSSection";
import ESGSection from "@/components/sections/ESGSection";
import ContactCTASection from "@/components/sections/ContactCTASection";
import ValuePropsSection from "@/components/sections/ValuePropsSection";

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <SolutionsSection />
      <ValuePropsSection />
      <AboutSection />
      <EnergyOSSection />
      <ESGSection />
      <ContactCTASection />
      <Footer />
    </main>
  );
}
