import { FileText, Users, BookOpen, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const tools = [
  {
    icon: FileText,
    name: "AI Content Generator Pro",
    desc: "Automated blog posts, ad copy, and social media content powered by advanced AI.",
    price: "$29",
    features: ["Blog & article generation", "Ad copy in seconds", "SEO-optimized output", "Multi-language support"],
  },
  {
    icon: Users,
    name: "AutoLead CRM System",
    desc: "AI-powered client tracking, lead scoring, and sales pipeline automation.",
    price: "$39",
    features: ["Smart lead scoring", "Pipeline automation", "Client communication", "Analytics dashboard"],
  },
  {
    icon: BookOpen,
    name: "SmartCourse Builder",
    desc: "Create, host, and sell digital courses with built-in payment processing.",
    price: "$49",
    features: ["Drag-and-drop builder", "Student management", "Payment integration", "Completion certificates"],
  },
];

const ToolsSection = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background" id="tools">
      <div className="container mx-auto" ref={ref}>
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Our Solutions</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured AI Tools</h2>
          <p className="text-muted-foreground">Everything you need to streamline operations and accelerate growth.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tools.map((tool, i) => (
            <div
              key={tool.name}
              className={`group relative bg-card rounded-2xl border border-border p-8 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-2 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: isVisible ? `${(i + 1) * 150}ms` : "0ms" }}
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <tool.icon size={22} className="text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{tool.name}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{tool.desc}</p>
              <ul className="space-y-2 mb-8">
                {tool.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="text-accent flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-2xl font-bold text-foreground">{tool.price}</span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </div>
                <Button
                  onClick={() => navigate("/signup")}
                  className="gradient-primary text-accent-foreground rounded-full px-6 text-sm font-semibold shadow-lg shadow-accent/20 hover:scale-105 transition-transform"
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            variant="outline"
            onClick={() => navigate("/tools")}
            className="rounded-full px-8 py-5 text-sm font-semibold border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            View All 50+ Tools →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
