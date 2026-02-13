import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const partners = [
  "Google", "Microsoft", "Amazon", "Slack", "Shopify",
  "Stripe", "HubSpot", "Salesforce", "Notion", "Figma",
];

const PartnersSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 bg-background border-y border-border" ref={ref}>
      <div
        className={`container mx-auto px-4 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-10">
          Trusted by teams at the world's leading companies
        </p>
        <div className="relative overflow-hidden">
          <div className="flex animate-[scroll_30s_linear_infinite] w-max gap-16 items-center">
            {[...partners, ...partners].map((name, i) => (
              <span
                key={i}
                className="text-xl md:text-2xl font-bold text-muted-foreground/40 whitespace-nowrap select-none tracking-wide"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
