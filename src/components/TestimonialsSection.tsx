import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  { img: testimonial1, quote: "Boosted our productivity by 60%. The AI Content Generator pays for itself within the first week.", name: "Daniel M.", role: "Marketing Consultant" },
  { img: testimonial2, quote: "AutoLead CRM transformed how we manage clients. Our conversion rate doubled in 3 months.", name: "Sarah K.", role: "Agency Director" },
  { img: testimonial3, quote: "SmartCourse Builder made launching my online academy effortless. Already generated $12K in revenue.", name: "James T.", role: "EdTech Entrepreneur" },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by Thousands</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={t.name} className={`fade-in-up-delay-${i + 1} bg-card rounded-2xl border border-border p-8`}>
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} size={16} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground leading-relaxed mb-6 text-sm">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
