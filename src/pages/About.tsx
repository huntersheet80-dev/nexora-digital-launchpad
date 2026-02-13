import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const team = [
  { img: team1, name: "Marcus Chen", role: "CEO & Co-Founder" },
  { img: team2, name: "Elena Rodriguez", role: "Head of Product" },
  { img: team3, name: "David Park", role: "CTO" },
];

const About = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-32 section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">About Us</p>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Building the Future of AI Automation</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Nexora Digital is a technology-driven software company focused on creating intelligent AI automation tools that simplify digital growth. Founded in 2023, our mission is to make enterprise-grade AI accessible to businesses of every size.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          We believe that the power of artificial intelligence shouldn't be locked behind complexity. Our suite of tools empowers entrepreneurs, agencies, and growing businesses to automate repetitive tasks, optimize workflows, and scale operations — all without needing a technical background.
        </p>
        <div className="grid grid-cols-3 gap-8 py-12 border-y border-border mb-16">
          {[["10K+", "Active Users"], ["99.9%", "Uptime"], ["50M+", "Tasks Automated"]].map(([stat, label]) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-extrabold gradient-text">{stat}</p>
              <p className="text-sm text-muted-foreground mt-1">{label}</p>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-8">Our Leadership</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((m) => (
            <div key={m.name} className="text-center">
              <img src={m.img} alt={m.name} className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-accent/20" />
              <p className="font-semibold text-foreground">{m.name}</p>
              <p className="text-sm text-muted-foreground">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default About;
