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
            <br />We will start by assessing your current financial situation.
            <br />Then we will focus on what end goal is.&nbsp;
            <br />Together we will identify which options are available to you, and together, we will select your path forward.
            <br />Once we have identified your plan, you are not sent off alone.
            <br />We will work together every step of the way with regular check-ins.
            <br />When something inevitably comes up, we will adapt and overcome as a team.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
