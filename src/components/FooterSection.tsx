import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  Company: ["About Us", "Careers", "Press"],
  Services: ["Debt Elimination", "Wealth Creation", "Education Planning"],
  Resources: ["Blog", "FAQs", "Financial Glossary"],
};

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Instagram, label: "Instagram" },
];

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-primary border-t border-navy-light">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-bold text-primary-foreground">
              Ashborne <span className="text-gold">Financial</span> Legacy
            </h3>
            <p className="mt-4 text-primary-foreground/60 max-w-sm leading-relaxed">
              Personalized financial strategies that eliminate debt and build generational wealth
              through creative, outside-the-box solutions.
            </p>
            <div className="mt-6 flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-gold/20 hover:text-gold transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-serif text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/60 hover:text-gold transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} Ashborne Financial Legacy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-primary-foreground/40 hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-primary-foreground/40 hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
