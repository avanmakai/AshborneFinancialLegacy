import { motion } from "framer-motion";

const strategies = [
  {
    title: "Debt Snowball",
    description: "Harness the power of the psychology of money with quick wins by eliminating the smallest debt.",
  },
  {
    title: "Debt Avalanche",
    description: "Apply mathematical principles to eliminate debt based on those with the highest interest rates. ",
  },
  {
    title: "Debt Tsunami",
    description: "If there is a debt that is hanging over your head, this method works to eliminate that debt to help you sleep better at night. ",
  },
  {
    title: "Cash Flow Index",
    description: "Identify the most efficient debts to pay off. Improving both cashflow and net worth.",
  },
  {
    title: "Velocity Banking",
    description: "Revolving lines of credit are the hero of this story. Eliminate debt at blinding speeds while saving hundreds on interest monthly.",
  },
  {
    title: "Cashflow Hacking",
    description: "We will design your personal plan that allows you to earn uninterrupted compound interest while you leverage your new wealth to grow.",
  },
];

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
            Our Methods
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Proven Strategies for Financial Freedom
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            There are many thoughts on the proper way to handle money.<br />
            The best way isn't a single choice. It is what is best for YOU.<br />
            Ashborne takes the time to find out YOUR goals and provide you select the best way to get there.&nbsp;
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategies.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
