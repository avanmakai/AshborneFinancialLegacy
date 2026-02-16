import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp } from "lucide-react";

const ApproachSection = () => {
  return (
    <section id="approach" className="section-padding bg-background">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-gold uppercase tracking-widest">
            Our Philosophy
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            The Ashborne Approach
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Defense */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mb-6">
              <ShieldCheck className="w-8 h-8 text-primary-foreground" />
            </div>
            <span className="text-sm font-semibold text-gold uppercase tracking-widest mb-2">
              Defense
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Strategic Debt Elimination
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We don't believe in one-size-fits-all. We find the debt elimination method that
              resonates with your lifestyle—whether that's structured payoff plans, consolidation
              strategies, or negotiation tactics that dramatically reduce what you owe.
            </p>
            <div className="mt-6 w-full h-px bg-border" />
            <ul className="mt-6 space-y-3">
              {["Personalized payoff roadmaps", "Debt consolidation analysis", "Creditor negotiation support"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Offense */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <div className="w-16 h-16 rounded-xl bg-gold flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-accent-foreground" />
            </div>
            <span className="text-sm font-semibold text-gold uppercase tracking-widest mb-2">
              Offense
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Outside-the-Box Wealth Creation
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Beyond debt relief. We introduce lesser-known financial tools, annuities, and life
              insurance strategies to turn cash flow into a legacy. Build generational wealth
              using vehicles most advisors overlook.
            </p>
            <div className="mt-6 w-full h-px bg-border" />
            <ul className="mt-6 space-y-3">
              {["Cash-value life insurance strategies", "Tax-advantaged annuity planning", "Generational wealth structures"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
