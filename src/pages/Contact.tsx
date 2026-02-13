import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll respond within 24 hours.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Contact Us</p>
              <h1 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h1>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                Have a question or need support? Our team is here to help you get the most out of Nexora Digital.
              </p>
              <div className="space-y-6">
                {[
                  [Mail, "support@nexoradigital.com"],
                  [MapPin, "123 Innovation Drive, Suite 400\nSan Francisco, CA 94105"],
                  [Clock, "Response time: Within 24 hours"],
                ].map(([Icon, text], i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{text as string}</p>
                  </div>
                ))}
              </div>
            </div>
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8 space-y-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Doe" required className="rounded-xl" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="john@example.com" required className="rounded-xl" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can we help?" rows={5} required className="rounded-xl" />
              </div>
              <Button type="submit" className="w-full gradient-primary text-accent-foreground rounded-full py-5 font-semibold shadow-lg shadow-accent/20">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
