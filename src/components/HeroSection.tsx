import { useState, useEffect, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  {
    image: heroSlide1,
    title: "Powerful AI Tools to",
    highlight: "Automate, Optimize & Scale",
    subtitle: "All-in-one digital solutions designed for entrepreneurs, agencies, and growing businesses.",
  },
  {
    image: heroSlide2,
    title: "Next-Gen Automation for",
    highlight: "Smarter Business Growth",
    subtitle: "Leverage machine learning and AI to streamline workflows and boost productivity by 10x.",
  },
  {
    image: heroSlide3,
    title: "Data-Driven Insights to",
    highlight: "Transform Your Strategy",
    subtitle: "Real-time analytics, intelligent dashboards, and AI-powered reporting at your fingertips.",
  },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Slide backgrounds */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
      ))}

      {/* Floating shapes */}
      <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-accent/10 blur-3xl float-animation" />
      <div className="absolute bottom-20 left-[5%] w-48 h-48 rounded-full bg-accent/15 blur-2xl float-animation" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5 text-sm text-accent-foreground mb-8 fade-in-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            AI-Powered Business Tools — 50+ Modern Solutions
          </div>

          {slides.map((slide, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ease-in-out ${
                i === current
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 absolute pointer-events-none"
              }`}
              style={{ position: i === current ? "relative" : "absolute" }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.1] tracking-tight mb-6">
                {slide.title}{" "}
                <span className="text-accent">{slide.highlight}</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-10 leading-relaxed">
                {slide.subtitle}
              </p>
            </div>
          ))}

          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => navigate("/signup")}
              className="gradient-primary text-accent-foreground rounded-full px-8 py-6 text-base font-semibold shadow-xl shadow-accent/30 hover:shadow-accent/50 hover:scale-105 transition-all duration-300 group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button
              onClick={() => navigate("/tools")}
              className="rounded-full px-8 py-6 text-base font-semibold border-2 border-accent/40 bg-accent/10 text-primary-foreground hover:bg-accent/20 hover:border-accent/60 transition-all duration-300"
            >
              View Tools
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-6 text-primary-foreground/50 text-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-accent/30 border-2 border-primary/60 flex items-center justify-center text-xs font-bold text-accent-foreground">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span>
              Trusted by <strong className="text-primary-foreground">10,000+</strong> businesses worldwide
            </span>
          </div>
        </div>
      </div>

      {/* Slider controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-accent" : "w-2 bg-primary-foreground/30 hover:bg-primary-foreground/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
