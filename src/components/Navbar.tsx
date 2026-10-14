import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Our Methods", href: "#approach" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Our Story", href: "#our-story" },
  { label: "Contact", href: "#contact-form" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        <a href="#" className="font-serif text-xl md:text-2xl font-semibold text-foreground tracking-tight">
          <span className="text-brand-red">Ashborne</span>{" "}
          <span className="text-foreground" style={{ WebkitTextStroke: '0.5px hsl(var(--muted-foreground))' }}>Financial</span>{" "}
          <span className="text-gold">Legacy</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact-form"
            className="inline-flex items-center justify-center rounded-lg bg-gold text-accent-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5 shadow-md"
          >
            Start Your Journey
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact-form"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-lg bg-gold text-accent-foreground px-5 py-2.5 text-sm font-medium mt-2"
              >
                Start Your Journey
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
