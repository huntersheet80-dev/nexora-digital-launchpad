import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-[10%] w-72 h-72 rounded-full bg-accent/10 blur-3xl float-animation" />
        <div className="absolute bottom-10 right-[10%] w-56 h-56 rounded-full bg-accent/15 blur-3xl float-animation" style={{ animationDelay: "3s" }} />
      </div>
      <div className="container mx-auto relative z-10 text-center" ref={ref}>
        <div className={`max-w-2xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5 text-sm text-accent-foreground mb-6">
            <Sparkles size={14} />
            Limited Time Offer
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-10 leading-relaxed">
            Join 10,000+ businesses already using Nexora Digital to automate their workflows and scale faster.
          </p>
          <Button
            onClick={() => navigate("/signup")}
            className="gradient-primary text-accent-foreground rounded-full px-10 py-6 text-lg font-semibold shadow-xl shadow-accent/30 hover:shadow-accent/50 hover:scale-105 transition-all duration-300 group"
          >
            Start Your Free 7-Day Trial
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          <p className="text-xs text-primary-foreground/40 mt-4">No credit card required • Cancel anytime</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
