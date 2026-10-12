import { motion } from "framer-motion";

const reasons = [
  {
    title: "Pricing",
    description:
      "You shouldn't have to pay for something that doesn't work. Your pricing is based on the results we see. ",
  },
  {
    title: "Payments",
    description:
      "In lieu of payment to me, you can opt for donating to a nonprofit I have selected.",
  },
  {
    title: "A Plan Built for Your Cash Flow",
    description:
      "The right method depends on your situation, not a single formula. We find the path that fits yours.",
  },
  {
    title: "Someone Who Has Walked the Path",
    description:
      "The founder carried the same weight of debt and used these same tactics to find a way out.",
  },
  {
    title: "Accountability Between Sessions",
    description:
      "Regular check-ins keep your plan moving when life inevitably intervenes.",
  },
  {
    title: "Adapt and Overcome, Together",
    description:
      "When something inevitably comes up, we adjust the plan as a team so you are never sent off alone.",
  },
];

const WhyAshborneSection = () => {
  return (
    <section id="why-ashborne" className="section-padding bg-background">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-gold uppercase tracking-widest">
            Why Ashborne
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Why Work With Ashborne?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            As the founder of Ashborne Financial Legacy, my maxim is: I live to serve. 
            I have served 20 years with the National Guard and Reserves.
            <br />My passion to serve others and bring positivity into the world is what has guided me to start this business.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center"
        >
          <p className="font-serif text-xl italic text-foreground/80 mb-8">
            Debt is not a life sentence. It is a problem with a process.
          </p>
          <a
            href="#contact-form"
            className="inline-flex items-center justify-center rounded-lg bg-gold text-accent-foreground px-8 py-3.5 text-base font-semibold hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5 shadow-lg min-w-[220px]"
          >
            Start Your Journey
          </a>
          <p className="mt-5 font-serif text-lg italic text-muted-foreground">
            You bring the willingness. We bring the plan.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAshborneSection;
