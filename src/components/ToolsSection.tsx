import { FileText, Users, BookOpen, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const ToolsSection = () => (
  <section className="section-padding bg-background" id="tools">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Our Solutions</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured AI Tools</h2>
        <p className="text-muted-foreground">Everything you need to streamline operations and accelerate growth.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {tools.map((tool, i) => (
          <div
            key={tool.name}
            className={`fade-in-up-delay-${i + 1} group relative bg-card rounded-2xl border border-border p-8 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300`}
          >
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-6">
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
              <Button className="gradient-primary text-accent-foreground rounded-full px-6 text-sm font-semibold shadow-lg shadow-accent/20">
                Get Started
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ToolsSection;
