const footerLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#our-story" },
  { label: "Contact", href: "#contact-form" },
  { label: "Privacy Policy", href: "#" },
];

const FooterSection = () => {
  return (
    <footer className="bg-primary border-t border-navy-light">
      <div className="container-max section-padding py-12">
        <div className="flex flex-col items-center text-center gap-6">
          <h3 className="font-serif text-2xl font-bold text-primary-foreground">
            <span className="text-brand-red">Ashborne</span>{" "}
            <span className="text-primary-foreground" style={{ WebkitTextStroke: '0.5px hsl(var(--primary-foreground) / 0.4)' }}>Financial</span>{" "}
            <span className="text-gold">Legacy</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-primary-foreground/60 hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="w-full max-w-xl h-px bg-primary-foreground/10" />

          <p className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} Ashborne Financial Legacy. All Rights Reserved.
          </p>

          <p className="text-xs text-primary-foreground/30 max-w-3xl leading-relaxed">
            Disclaimer: The information, content, and coaching provided by Ashborne Financial Legacy
            are for educational purposes only and do not constitute certified financial, tax, or
            legal advice. We are not financial advisors. Clients are solely responsible for their own
            financial decisions and investments. Please consult with a licensed professional
            regarding your specific situation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
