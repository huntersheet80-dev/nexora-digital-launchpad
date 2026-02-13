import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Floating shapes */}
      <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-accent/10 blur-3xl float-animation" />
      <div className="absolute bottom-20 left-[5%] w-48 h-48 rounded-full bg-accent/15 blur-2xl float-animation" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-[20%] w-32 h-32 rounded-full bg-accent/8 blur-2xl float-animation" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl fade-in-up">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5 text-sm text-accent-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            AI-Powered Business Tools — 50+ Modern Solutions
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.1] tracking-tight mb-6">
            Powerful AI Tools to{" "}
            <span className="text-accent">Automate, Optimize & Scale</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-10 leading-relaxed">
            All-in-one digital solutions designed for entrepreneurs, agencies, and growing businesses.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => navigate("/signup")}
              className="gradient-primary text-accent-foreground rounded-full px-8 py-6 text-base font-semibold shadow-xl shadow-accent/30 hover:shadow-accent/50 hover:scale-105 transition-all duration-300 group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/tools")}
              className="rounded-full px-8 py-6 text-base font-semibold border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Play size={16} className="mr-2" />
              View Tools
            </Button>
          </div>
          <div className="mt-12 flex items-center gap-6 text-primary-foreground/50 text-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-accent/30 border-2 border-primary/60 flex items-center justify-center text-xs font-bold text-accent-foreground">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span>Trusted by <strong className="text-primary-foreground">10,000+</strong> businesses worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
