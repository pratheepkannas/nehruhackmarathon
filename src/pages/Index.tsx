import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PrizesSection } from "@/components/PrizesSection";
import { TimelineSection } from "@/components/TimelineSection";
import { ProblemsSection } from "@/components/ProblemsSection";
import { RulesSection } from "@/components/RulesSection";
import { SponsorsSection } from "@/components/SponsorsSection";
import { CoordinatorsSection } from "@/components/CoordinatorsSection";
import { RegisterSection } from "@/components/RegisterSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PrizesSection />
      <TimelineSection />
      <ProblemsSection />
      <RulesSection />
      <SponsorsSection />
      <CoordinatorsSection />
      <RegisterSection />
      <Footer />
    </main>
  );
};

export default Index;
