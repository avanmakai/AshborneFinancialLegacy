import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AudienceSection from "@/components/AudienceSection";
import ApproachSection from "@/components/ApproachSection";
import ServicesSection from "@/components/ServicesSection";
import PhoenixSection from "@/components/PhoenixSection";
import WhyUsSection from "@/components/WhyUsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AudienceSection />
      <ApproachSection />
      <ServicesSection />
      <PhoenixSection />
      <WhyUsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
