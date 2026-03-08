import { motion } from "framer-motion";
import { User, Users, Briefcase } from "lucide-react";

const audiences = [
  {
    icon: User,
    title: "Individuals",
    description:
      "Tailored plans to achieve financial freedom and personal security. We work with your unique situation to create a fully customized roadmap to achieve the outcomes that matter to you.",
  },
  {
    icon: Users,
    title: "Families",
    description:
      "Protecting your home, independence, and securing a legacy for your children's future. We offer family-focused strategies that safeguard your lineage and legacy.",
  },
  {
    icon: Briefcase,
    title: "Small Businesses",
    description:
      "Structuring debt and identifying financial tools to strengthen your bottom line, while implementing benefits that recruit and retain top talent.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const AudienceSection = () => {
  return (
    <section id="audience" className="section-padding bg-secondary">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-gold uppercase tracking-widest">
            Our Clients
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Who We Serve
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
            Personalized financial strategies for every stage of life and business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={cardVariants}
              className="group bg-card rounded-lg p-8 shadow-sm border border-border hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <item.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
