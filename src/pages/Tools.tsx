import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  FileText, Users, BookOpen, BarChart3, Mail, Shield, Zap, Globe, Camera,
  Code, Database, Palette, MessageSquare, Search, Clock, Target, Headphones,
  CreditCard, Workflow, Bot, BrainCircuit, LineChart, PieChart, Megaphone,
  FileSpreadsheet, FolderOpen, Lock, Layers, Cpu, Wand2, Mic, Video,
  Share2, Calculator, Calendar, ClipboardList, Heart, Rocket, Settings,
  ShoppingCart, Truck, UserCheck, Briefcase, Award, Landmark, Gauge,
  GitBranch, Phone, Wifi, LayoutDashboard, ScanLine, type LucideIcon,
} from "lucide-react";

interface Tool {
  icon: LucideIcon;
  name: string;
  desc: string;
  category: string;
  price: string;
}

const allTools: Tool[] = [
  // Content & Marketing
  { icon: FileText, name: "AI Content Generator Pro", desc: "Automated blog posts, ad copy, and social media content", category: "Content & Marketing", price: "$29/mo" },
  { icon: Megaphone, name: "Ad Campaign Manager", desc: "AI-optimized ad campaigns across platforms", category: "Content & Marketing", price: "$39/mo" },
  { icon: Search, name: "SEO Optimizer Suite", desc: "Keyword research, ranking analysis, and content optimization", category: "Content & Marketing", price: "$34/mo" },
  { icon: Mail, name: "Email Marketing AI", desc: "Personalized email sequences with AI subject lines", category: "Content & Marketing", price: "$24/mo" },
  { icon: Share2, name: "Social Media Scheduler", desc: "Auto-schedule and optimize posts across platforms", category: "Content & Marketing", price: "$19/mo" },
  { icon: Video, name: "Video Script Generator", desc: "AI scripts for YouTube, TikTok, and Reels", category: "Content & Marketing", price: "$29/mo" },
  { icon: Camera, name: "AI Image Creator", desc: "Generate product images and marketing visuals", category: "Content & Marketing", price: "$34/mo" },
  { icon: Mic, name: "Podcast Assistant AI", desc: "Transcription, show notes, and episode planning", category: "Content & Marketing", price: "$24/mo" },

  // Sales & CRM
  { icon: Users, name: "AutoLead CRM System", desc: "AI-powered client tracking and sales automation", category: "Sales & CRM", price: "$39/mo" },
  { icon: Target, name: "Lead Scoring Engine", desc: "AI-ranked leads based on conversion probability", category: "Sales & CRM", price: "$29/mo" },
  { icon: Phone, name: "Smart Dialer AI", desc: "Automated call scheduling and conversation analytics", category: "Sales & CRM", price: "$34/mo" },
  { icon: UserCheck, name: "Customer Success Hub", desc: "Churn prediction and retention automation", category: "Sales & CRM", price: "$44/mo" },
  { icon: Briefcase, name: "Proposal Generator", desc: "AI-crafted business proposals in minutes", category: "Sales & CRM", price: "$29/mo" },
  { icon: CreditCard, name: "Invoice & Billing AI", desc: "Automated invoicing and payment tracking", category: "Sales & CRM", price: "$24/mo" },
  { icon: Users, name: "Partnership Finder", desc: "AI-matched business partnership opportunities", category: "Sales & CRM", price: "$39/mo" },

  // Education & Learning
  { icon: BookOpen, name: "SmartCourse Builder", desc: "Create and sell digital courses easily", category: "Education & Learning", price: "$49/mo" },
  { icon: Award, name: "Certificate Generator", desc: "Automated certificate design and distribution", category: "Education & Learning", price: "$19/mo" },
  { icon: ClipboardList, name: "Quiz & Assessment AI", desc: "Auto-generated quizzes with analytics", category: "Education & Learning", price: "$24/mo" },
  { icon: BrainCircuit, name: "AI Tutor System", desc: "Personalized learning paths for students", category: "Education & Learning", price: "$39/mo" },
  { icon: Headphones, name: "Language Learning AI", desc: "AI conversation practice in 30+ languages", category: "Education & Learning", price: "$29/mo" },
  { icon: FolderOpen, name: "Knowledge Base Builder", desc: "Auto-organized documentation and wikis", category: "Education & Learning", price: "$29/mo" },

  // Analytics & Data
  { icon: BarChart3, name: "Business Analytics Pro", desc: "Real-time dashboards and predictive insights", category: "Analytics & Data", price: "$49/mo" },
  { icon: LineChart, name: "Revenue Forecaster", desc: "AI-powered financial projections and trends", category: "Analytics & Data", price: "$44/mo" },
  { icon: PieChart, name: "Market Research AI", desc: "Competitive analysis and market intelligence", category: "Analytics & Data", price: "$54/mo" },
  { icon: Gauge, name: "Performance Monitor", desc: "KPI tracking and team performance insights", category: "Analytics & Data", price: "$34/mo" },
  { icon: ScanLine, name: "Data Extraction AI", desc: "Pull structured data from any document or source", category: "Analytics & Data", price: "$29/mo" },
  { icon: FileSpreadsheet, name: "Report Generator", desc: "Automated business reports and presentations", category: "Analytics & Data", price: "$29/mo" },
  { icon: Calculator, name: "Financial Modeling AI", desc: "Build financial models with AI assistance", category: "Analytics & Data", price: "$49/mo" },

  // Development & IT
  { icon: Code, name: "Code Assistant AI", desc: "AI pair programming and code review", category: "Development & IT", price: "$39/mo" },
  { icon: Database, name: "Database Optimizer", desc: "Auto-tune queries and schema optimization", category: "Development & IT", price: "$44/mo" },
  { icon: GitBranch, name: "CI/CD Pipeline AI", desc: "Smart deployment and testing automation", category: "Development & IT", price: "$49/mo" },
  { icon: Shield, name: "Security Scanner Pro", desc: "AI vulnerability detection and patch suggestions", category: "Development & IT", price: "$54/mo" },
  { icon: Cpu, name: "Infrastructure Monitor", desc: "Server health and resource optimization", category: "Development & IT", price: "$39/mo" },
  { icon: Globe, name: "API Integration Hub", desc: "Connect and manage 500+ API integrations", category: "Development & IT", price: "$34/mo" },
  { icon: Wifi, name: "Network Analyzer", desc: "Real-time network monitoring and optimization", category: "Development & IT", price: "$44/mo" },

  // Design & Creative
  { icon: Palette, name: "Brand Kit Generator", desc: "AI-designed logos, colors, and brand guides", category: "Design & Creative", price: "$34/mo" },
  { icon: Wand2, name: "UI/UX Designer AI", desc: "Auto-generate wireframes and mockups", category: "Design & Creative", price: "$44/mo" },
  { icon: Layers, name: "Template Engine Pro", desc: "1000+ customizable business templates", category: "Design & Creative", price: "$24/mo" },
  { icon: LayoutDashboard, name: "Landing Page Builder", desc: "AI-optimized landing pages in minutes", category: "Design & Creative", price: "$29/mo" },

  // Automation & Workflow
  { icon: Workflow, name: "Workflow Automator", desc: "No-code business process automation", category: "Automation & Workflow", price: "$39/mo" },
  { icon: Bot, name: "Chatbot Builder Pro", desc: "AI chatbots for customer support", category: "Automation & Workflow", price: "$34/mo" },
  { icon: Zap, name: "Task Automation AI", desc: "Automate repetitive tasks across apps", category: "Automation & Workflow", price: "$29/mo" },
  { icon: Calendar, name: "Smart Scheduler", desc: "AI calendar management and meeting optimization", category: "Automation & Workflow", price: "$19/mo" },
  { icon: Clock, name: "Time Tracker AI", desc: "Automatic time tracking and productivity insights", category: "Automation & Workflow", price: "$19/mo" },
  { icon: MessageSquare, name: "Team Chat AI", desc: "Smart collaboration with AI summaries", category: "Automation & Workflow", price: "$24/mo" },
  { icon: Settings, name: "Process Optimizer", desc: "AI-driven business process improvement", category: "Automation & Workflow", price: "$39/mo" },

  // E-Commerce & Operations
  { icon: ShoppingCart, name: "E-Commerce AI Suite", desc: "Product recommendations and pricing optimization", category: "E-Commerce & Operations", price: "$49/mo" },
  { icon: Truck, name: "Supply Chain AI", desc: "Inventory management and logistics optimization", category: "E-Commerce & Operations", price: "$54/mo" },
  { icon: Heart, name: "Customer Sentiment AI", desc: "Review analysis and satisfaction scoring", category: "E-Commerce & Operations", price: "$29/mo" },
  { icon: Rocket, name: "Product Launch Planner", desc: "AI-guided go-to-market strategy", category: "E-Commerce & Operations", price: "$39/mo" },
  { icon: Lock, name: "Compliance Manager", desc: "Automated regulatory compliance checks", category: "E-Commerce & Operations", price: "$44/mo" },
  { icon: Landmark, name: "Legal Document AI", desc: "Contract generation and legal analysis", category: "E-Commerce & Operations", price: "$49/mo" },
];


const categories = ["All", ...Array.from(new Set(allTools.map((t) => t.category)))];

const Tools = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation(0.05);

  const filtered = activeCategory === "All" ? allTools : allTools.filter((t) => t.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Our Suite</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              50+ AI-Powered Tools
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything your business needs to automate, optimize, and scale — all in one platform.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "gradient-primary text-accent-foreground shadow-lg shadow-accent/20"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Tools Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto" ref={ref}>
            {filtered.map((tool, i) => (
              <div
                key={tool.name}
                className={`group bg-card rounded-2xl border border-border p-6 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-400 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: isVisible ? `${Math.min(i * 50, 500)}ms` : "0ms" }}
              >
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <tool.icon size={18} className="text-accent-foreground" />
                </div>
                <h3 className="font-bold text-foreground mb-1 text-sm">{tool.name}</h3>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{tool.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-accent">{tool.price}</span>
                  <Button
                    size="sm"
                    onClick={() => navigate("/signup")}
                    className="gradient-primary text-accent-foreground rounded-full px-4 text-xs font-semibold hover:scale-105 transition-transform"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">Can't find what you need? We build custom AI tools for enterprise clients.</p>
            <Button
              onClick={() => navigate("/contact")}
              variant="outline"
              className="rounded-full px-8 py-5 text-sm font-semibold border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Contact Us for Custom Solutions
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Tools;
