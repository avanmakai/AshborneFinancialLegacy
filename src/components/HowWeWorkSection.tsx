import { motion } from "framer-motion";
import { Users } from "lucide-react";

const HowWeWorkSection = () => {
  return (
    <section id="how-we-work" className="section-padding bg-secondary">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">
              How We Work
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Education Through 1-on-1 Coaching
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Financial literacy isn't taught; it is learned. At Ashborne Financial Legacy, we
              provide a non-judgmental space focused entirely on education. Through personalized
              1-on-1 coaching sessions, we empower you to take control of your cash flow, understand
              your options, and confidently build a strategy that works for your family or business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-sm bg-card rounded-2xl border border-border p-10 flex flex-col items-center text-center shadow-lg">
              <div className="w-20 h-20 rounded-full bg-gold/15 flex items-center justify-center mb-6">
                <Users className="w-10 h-10 text-gold" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                Personalized Sessions
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Every coaching session is tailored to your unique financial situation, goals, and
                comfort level. No judgment—just guidance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
