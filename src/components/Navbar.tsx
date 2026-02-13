import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Pricing", to: "/#pricing" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (to: string) => {
    setOpen(false);
    if (to.startsWith("/#")) {
      const id = to.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="text-xl font-bold tracking-tight text-primary">
          Nexora<span className="text-accent">Digital</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) =>
            l.to.startsWith("/#") ? (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => handleNavClick(l.to)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <Link
                key={l.label}
                to={l.to}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            )
          )}
          <Button className="gradient-primary text-accent-foreground rounded-full px-6 text-sm font-semibold shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-shadow">
            Start Free Trial
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 space-y-3">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => handleNavClick(l.to)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <Button className="w-full gradient-primary text-accent-foreground rounded-full text-sm font-semibold">
            Start Free Trial
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
