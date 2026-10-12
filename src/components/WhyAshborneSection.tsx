import { motion } from "framer-motion";

const reasons = [
  {
    title: "Met Where You Are",
    description:
      "No lecture and no sales pitch. We start with your actual numbers and the life you are trying to build.",
  },
  {
    title: "Education, Not Products",
    description:
      "Nothing is sold to you. You learn the why behind every option, so the decision stays yours.",
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
];

const WhyAshborneSection = () => {
  return (
    <section id="why-ashborne" className="section-padding bg-secondary">
      <div className="container-max grid lg:grid-cols-2 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-md"
        >
          <span className="text-sm font-semibold text-gold uppercase tracking-widest">
            Why Ashborne
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Why Work With Ashborne?
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Because you deserve to understand your own money. Every engagement is
            built on education, honesty, and follow-through — not on judgment
            about where you are starting from.
          </p>
          <p className="mt-10 font-serif text-xl italic text-foreground/80 border-l-2 border-gold/40 pl-5 leading-relaxed">
            Debt is not a life sentence. It is a problem with a process.
          </p>
          <a
            href="#contact-form"
            className="inline-flex items-center justify-center rounded-lg bg-gold text-accent-foreground px-8 py-3.5 text-base font-semibold hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5 shadow-lg min-w-[220px] mt-10"
          >
            Start Your Journey
          </a>
          <p className="mt-6 font-serif text-lg italic text-muted-foreground">
            You bring the willingness. We bring the plan.
          </p>
        </motion.div>

        <div className="space-y-px">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex gap-5 border-b border-border/70 py-6 first:pt-0 last:border-b-0"
            >
              <span className="font-serif text-2xl font-bold text-gold/70 leading-none pt-1 min-w-[2rem]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-1.5">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAshborneSection;
