import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Account created! Welcome to Nexora Digital. Check your email to get started.");
    setForm({ name: "", email: "", password: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-24 min-h-screen flex items-center bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto items-center">
            <div className="fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Start Your <span className="gradient-text">Free Trial</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Get instant access to all 50+ AI tools. No credit card required. Cancel anytime.
              </p>
              <ul className="space-y-4">
                {[
                  "7-day free trial on all plans",
                  "Access to 50+ AI-powered tools",
                  "No credit card required",
                  "Cancel anytime with one click",
                  "24/7 priority support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-5 h-5 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-accent-foreground" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl border border-border p-8 shadow-xl fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-2">Create Your Account</h2>
              <p className="text-sm text-muted-foreground mb-6">Join 10,000+ businesses on Nexora Digital</p>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    required
                    className="rounded-xl h-12"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Work Email</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@company.com"
                    required
                    className="rounded-xl h-12"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Password</label>
                  <Input
                    type="password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    placeholder="8+ characters"
                    required
                    minLength={8}
                    className="rounded-xl h-12"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full gradient-primary text-accent-foreground rounded-full py-6 font-semibold shadow-lg shadow-accent/20 hover:scale-[1.02] transition-transform group text-base"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                By signing up, you agree to our{" "}
                <Link to="/terms" className="text-accent hover:underline">Terms</Link> and{" "}
                <Link to="/privacy" className="text-accent hover:underline">Privacy Policy</Link>.
              </p>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Signup;
