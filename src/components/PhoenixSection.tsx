import { motion } from "framer-motion";
import { Flame } from "lucide-react";

const PhoenixSection = () => {
  return (
    <section
      id="our-story"
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(0 72% 20%) 0%, hsl(0 72% 12%) 40%, hsl(0 0% 5%) 100%)",
      }}
    >
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
            Our Story
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Why We Built Ashborne
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
              <p className="text-white/80 text-lg leading-relaxed">
                They say nothing is certain but death and taxes—but{" "}
                <span className="text-white font-semibold">
                  debt does not have to be a life sentence.
                </span>{" "}
                Your current financial situation does not dictate your future. That is why the
                phoenix is our symbol.
              </p>

              <p className="text-white/80 text-lg leading-relaxed">
                A phoenix burns brightly until it turns to ash, but within those ashes lies the
                ember that sparks an entirely new life. The question you have to ask yourself is:{" "}
                <span className="text-gold font-semibold italic">
                  Are you ready to ignite that spark and join the Ashborne?
                </span>
              </p>

              <p className="text-white/80 text-lg leading-relaxed">
                I founded{" "}
                <span className="font-semibold">
                  <span className="text-brand-red">Ashborne</span>{" "}
                  <span className="text-white">Financial</span>{" "}
                  <span className="text-gold">Legacy</span>
                </span>{" "}
                in 2025 to help you find that new beginning. I know the path because I have walked
                it. Years ago, I took a leap of faith, applying the exact debt-elimination and
                wealth-building strategies I now teach in my 1-on-1 coaching sessions.
              </p>

              <p className="font-serif text-2xl sm:text-3xl font-bold text-white mt-8">
                Let us help you rise.
              </p>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhoenixSection;
