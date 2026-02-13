import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What AI tools does Nexora Digital offer?",
    answer:
      "We offer 50+ AI-powered tools across categories like content generation, CRM automation, course building, SEO optimization, social media management, analytics, and more — all designed to help modern businesses scale faster.",
  },
  {
    question: "How does the 7-day free trial work?",
    answer:
      "Sign up for any plan and get full access for 7 days — no credit card required. If you love it, your subscription begins automatically. If not, simply cancel before the trial ends and you won't be charged.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan at any time from your dashboard. Changes take effect at the start of your next billing cycle, and you'll only pay the difference.",
  },
  {
    question: "Is my data secure with Nexora Digital?",
    answer:
      "Yes. We use enterprise-grade encryption, secure cloud infrastructure, and comply with GDPR and SOC 2 standards. Your data is never shared with third parties without your explicit consent.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 7-day refund policy. If you're unsatisfied within the first week of your subscription, contact our support team and we'll process a full refund — no questions asked.",
  },
  {
    question: "Can I use the tools for my agency or clients?",
    answer:
      "Yes! Our Pro and Business plans include team collaboration and white-label options, making them perfect for agencies managing multiple clients. You can also access our API for custom integrations.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "Starter plans include email support. Pro users get priority support with faster response times. Business plan members receive a dedicated account manager and 24/7 assistance.",
  },
  {
    question: "Are there any long-term contracts?",
    answer:
      "No. All plans are billed monthly with no long-term commitments. You can cancel anytime with a single click from your account settings.",
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background" id="faq">
      <div className="container mx-auto" ref={ref}>
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about Nexora Digital and our AI tools.
          </p>
        </div>
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
