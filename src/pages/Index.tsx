import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ApproachSection from "@/components/ApproachSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import PhoenixSection from "@/components/PhoenixSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ApproachSection />
      <HowWeWorkSection />
      <PhoenixSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
