import { motion } from "framer-motion";
import { HeartPulse, Landmark, Lightbulb } from "lucide-react";

const services = [
  {
    icon: HeartPulse,
    title: "Life Insurance Strategies",
    description:
      "Leverage whole and indexed life policies as living benefits—tax-free growth, policy loans, and legacy planning all in one.",
  },
  {
    icon: Landmark,
    title: "Annuities & Retirement",
    description:
      "Secure guaranteed income streams and protect your nest egg from market volatility with fixed and indexed annuity strategies.",
  },
  {
    icon: Lightbulb,
    title: "Alternative Financial Tools",
    description:
      "From infinite banking concepts to creative tax strategies—we look beyond the obvious to find financial instruments that work for you.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-gold uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Our Services
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
            Comprehensive financial tools designed to protect and grow your wealth.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-xl hover:scale-[1.03] transition-all duration-300 hover:border-gold/30"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                <service.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
