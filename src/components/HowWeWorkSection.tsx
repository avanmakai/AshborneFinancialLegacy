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
            What to Expect
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            At Ashborne Financial Legacy, our goal is education and accountability.
            <br />We begin by taking an analytical view of your current financial landscape and clearly define goals, objectives, and what success looks like.
            <br />Once we have the end in mind, we begin making a plan and select a course of action that will take you to your desired destination.
            <br />Once you're happy with the plan, we move forward together through regular check-ins.
            <br />When life throws you a curve ball, we will adapt and overcome as a team.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
