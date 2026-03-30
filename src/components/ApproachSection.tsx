import { motion } from "framer-motion";
import { Snowflake, TrendingDown, Heart, BarChart3, Zap, Building } from "lucide-react";

const strategies = [
  {
    icon: Snowflake,
    title: "Debt Snowball",
    description: "Build momentum and motivation by conquering your smallest balances first.",
  },
  {
    icon: TrendingDown,
    title: "Debt Avalanche",
    description: "Optimize your payoff by targeting high-interest debt to save money over time.",
  },
  {
    icon: Heart,
    title: "Debt Tsunami",
    description: "Regain your peace of mind by eliminating the debts that cause you the most emotional stress.",
  },
  {
    icon: BarChart3,
    title: "Cash Flow Index",
    description: "Strategically analyze your loans to free up your monthly cash flow faster.",
  },
  {
    icon: Zap,
    title: "Velocity Banking",
    description: "Learn how to utilize lines of credit to accelerate debt payoff and drastically reduce interest.",
  },
  {
    icon: Building,
    title: "Infinite Banking Concept",
    description: "Discover how to become your own banker to build, protect, and pass on generational wealth.",
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
            We don't believe in a one-size-fits-all approach. Through educational coaching, we help
            you apply the right strategies to your unique cash flow:
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
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
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
