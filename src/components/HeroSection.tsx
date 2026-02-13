import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/80" />
    </div>

    {/* Floating shapes */}
    <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-accent/10 blur-3xl float-animation" />
    <div className="absolute bottom-20 left-[5%] w-48 h-48 rounded-full bg-accent/15 blur-2xl float-animation" style={{ animationDelay: "2s" }} />

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl fade-in-up">
        <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5 text-sm text-accent-foreground mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          AI-Powered Business Tools
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.1] tracking-tight mb-6">
          Powerful AI Tools to{" "}
          <span className="text-accent">Automate, Optimize & Scale</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-10 leading-relaxed">
          All-in-one digital solutions designed for entrepreneurs, agencies, and growing businesses.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="gradient-primary text-accent-foreground rounded-full px-8 py-6 text-base font-semibold shadow-xl shadow-accent/30 hover:shadow-accent/50 transition-all group">
            Start Free Trial
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>
          <Button variant="outline" className="rounded-full px-8 py-6 text-base font-semibold border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Play size={16} className="mr-2" />
            View Tools
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
