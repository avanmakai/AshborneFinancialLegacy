import { motion } from "framer-motion";
import { Sparkles, BookOpen, Handshake } from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "Creative Strategy",
    description: "We go beyond traditional advice to find financial solutions that others miss.",
  },
  {
    icon: BookOpen,
    title: "Financial Education",
    description: "We empower you with knowledge so you can make confident decisions for life.",
  },
  {
    icon: Handshake,
    title: "Personal Partnership",
    description: "You're not a number. We build lasting relationships with every client we serve.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-gold uppercase tracking-widest">
            Why Choose Us
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground">
            Thinking Outside the Box
          </h2>
          <p className="mt-4 text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            This isn't just accounting. It's creative financial strategy and education that
            empowers you to take control of your future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-5">
                <reason.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
