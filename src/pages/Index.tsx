import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Navbar } from "@/components/Navbar";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PrizesSection } from "@/components/PrizesSection";
import { TimelineSection } from "@/components/TimelineSection";
import { ProblemsSection } from "@/components/ProblemsSection";
import { RulesSection } from "@/components/RulesSection";
import { FAQSection } from "@/components/FAQSection";
import { CoordinatorsSection } from "@/components/CoordinatorsSection";
import { LocationSection } from "@/components/LocationSection";
import { RegisterSection } from "@/components/RegisterSection";
import { Footer } from "@/components/Footer";
import { AnnouncementModal } from "@/components/AnnouncementModal";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden pb-20 md:pb-0">
      <AnnouncementModal />
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PrizesSection />
      <TimelineSection />
      <ProblemsSection />
      <RulesSection />
      <FAQSection />
      <CoordinatorsSection />
      <LocationSection />
      <RegisterSection />
      <Footer />
      <MobileBottomNav />
    </main>
  );
};

export default Index;
