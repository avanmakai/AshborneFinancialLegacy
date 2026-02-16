import { motion } from "framer-motion";
import { Flame } from "lucide-react";

const PhoenixSection = () => {
  return (
    <section id="phoenix" className="section-padding bg-secondary relative overflow-hidden">
      {/* Decorative ember glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-gold uppercase tracking-widest">
            Who We Are
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Why the Phoenix?
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 rounded-full bg-gold/15 flex items-center justify-center mb-8">
              <Flame className="w-10 h-10 text-gold" />
            </div>

            <blockquote className="text-center space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed italic">
                We are told that nothing is certain but death and taxes—but{" "}
                <span className="text-foreground font-semibold not-italic">
                  debt is not a life sentence.
                </span>{" "}
                Your current situation does not dictate your future.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                This is why I chose the phoenix as our symbol. It burns brightly
                until it turns to ash. But within those ashes lies an ember that
                sparks a new life. The question we must ask ourselves is:{" "}
                <span className="text-gold font-semibold italic">
                  Is your fire finally burning hot enough to cause you to join
                  the Ashborne?
                </span>
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                I founded{" "}
                <span className="font-semibold">
                  <span className="text-brand-red">Ashborne</span>{" "}
                  <span className="text-foreground">Financial</span>{" "}
                  <span className="text-gold">Legacy</span>
                </span>{" "}
                in 2025 to help you find that new beginning. I know the path
                because I have walked it. Years ago, I took a leap of faith,
                applying the exact wealth-building strategies I now teach to my
                clients.
              </p>

              <p className="font-serif text-2xl sm:text-3xl font-bold text-foreground mt-8">
                Let us help you rise.
              </p>
            </blockquote>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-gold text-accent-foreground px-8 py-3.5 text-base font-semibold hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
              >
                Start Your Transformation
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhoenixSection;
