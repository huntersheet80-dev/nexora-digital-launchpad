import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const plans = [
  {
    name: "Starter",
    price: "$19",
    desc: "Perfect for individuals getting started.",
    features: ["1 AI Tool Access", "5,000 API Requests/mo", "Email Support", "Basic Analytics", "Community Access"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    desc: "Best for growing teams and agencies.",
    features: ["All AI Tools Access", "50,000 API Requests/mo", "Priority Support", "Advanced Analytics", "Custom Integrations", "Team Collaboration"],
    popular: true,
  },
  {
    name: "Business",
    price: "$99",
    desc: "For enterprises that need scale.",
    features: ["Unlimited AI Tools", "Unlimited API Requests", "Dedicated Account Manager", "Custom AI Models", "SLA Guarantee", "White-label Options", "API Access"],
    popular: false,
  },
];

const PricingSection = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-muted/50" id="pricing">
      <div className="container mx-auto" ref={ref}>
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground">No hidden fees. Cancel anytime. Start with a 7-day free trial.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 transition-all duration-500 hover:-translate-y-1 ${
                plan.popular
                  ? "bg-primary text-primary-foreground border-accent shadow-2xl shadow-accent/20 md:scale-105"
                  : "bg-card text-foreground border-border hover:shadow-lg"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: isVisible ? `${(i + 1) * 150}ms` : "0ms" }}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary text-accent-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{plan.desc}</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className={`text-sm ${plan.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check size={16} className="text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => navigate("/signup")}
                className={`w-full rounded-full py-5 font-semibold hover:scale-[1.02] transition-transform ${
                  plan.popular
                    ? "bg-accent-foreground text-primary hover:bg-accent-foreground/90"
                    : "gradient-primary text-accent-foreground shadow-lg shadow-accent/20"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
