import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-primary/70" />

      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10">
            <span className="text-sm font-medium text-gold-light tracking-wide">
              Trusted Financial Guidance
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight max-w-4xl mx-auto">
            Rise Above Debt.{" "}
            <span className="text-gold-gradient">Build Your Legacy.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed font-sans">
            Empowering families, small business owners, and high-income earners to eliminate debt
            and create generational wealth through personalized, 1-on-1 financial education.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-10"
        >
          <a
            href="#contact-form"
            className="inline-flex items-center justify-center rounded-lg bg-gold text-accent-foreground px-8 py-3.5 text-base font-semibold hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5 shadow-lg min-w-[220px]"
          >
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
