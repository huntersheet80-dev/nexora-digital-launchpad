import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import ToolsSection from "@/components/ToolsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <PartnersSection />
    <ToolsSection />
    <HowItWorksSection />
    <TestimonialsSection />
    <PricingSection />
    <FAQSection />
    <BlogSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
