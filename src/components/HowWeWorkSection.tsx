import { motion } from "framer-motion";

const HowWeWorkSection = () => {
  return (
    <section id="how-we-work" className="section-padding bg-secondary">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-sm font-semibold text-gold uppercase tracking-widest">
            How We Work
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Education Through 1-on-1 Coaching
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Financial literacy isn't taught; it is learned. At Ashborne Financial Legacy, we
            provide a non-judgmental space focused entirely on education and accountability. Through personalized
            1-on-1 coaching sessions, we empower you to take control of your cash flow, understand
            your options, and confidently build a strategy that works for your family or business.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
