import { Link } from "react-router-dom";
import { Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-lg font-bold mb-4">
            Nexora<span className="text-accent">Digital</span>
          </h3>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Smart AI Tools for Modern Businesses. Simplifying digital growth with powerful automation solutions.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/50">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[["Home", "/"], ["About", "/about"], ["Contact", "/contact"]].map(([label, to]) => (
              <li key={label}>
                <Link to={to} className="text-primary-foreground/70 hover:text-accent transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/50">Legal</h4>
          <ul className="space-y-2 text-sm">
            {[["Privacy Policy", "/privacy"], ["Terms & Conditions", "/terms"], ["Refund Policy", "/refund"]].map(([label, to]) => (
              <li key={label}>
                <Link to={to} className="text-primary-foreground/70 hover:text-accent transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/50">Connect</h4>
          <div className="flex gap-4">
            {[Linkedin, Twitter, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Icon size={18} />
              </a>
            ))}
          </div>
          <p className="text-xs text-primary-foreground/50 mt-6">support@nexoradigital.com</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs text-primary-foreground/40">
        © 2026 Nexora Digital. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
