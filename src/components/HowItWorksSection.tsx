import { UserPlus, MousePointer, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { icon: UserPlus, title: "Create Account", desc: "Sign up in seconds with your email. No credit card required to get started." },
  { icon: MousePointer, title: "Select Your Tool", desc: "Choose from our suite of 50+ AI-powered tools tailored to your business needs." },
  { icon: TrendingUp, title: "Grow Your Business", desc: "Leverage automation to save time, reduce costs, and scale operations." },
];

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto" ref={ref}>
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Simple Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-muted-foreground">Get started in three simple steps and see results from day one.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className={`text-center transition-all duration-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: isVisible ? `${(i + 1) * 200}ms` : "0ms" }}
            >
              <div className="relative inline-flex mb-6">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <s.icon size={28} className="text-accent" />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full gradient-primary text-accent-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
