import { motion } from "framer-motion";

const reasons = [
  {
    title: "Pricing",
    description:
      "You shouldn't have to pay for something that doesn't work. Your pricing is based on the results you see in your bank account. ",
  },
  {
    title: "Fees",
    description:
      "In alignment with my maxim: a minimum of 60% of all fees collected will be donated to nonprofit. ",
  },
  {
    title: "Commissions",
    description:
      "Client commissions subject to chargebacks, they will be held in bonds for 9-12 months before being donated.",
  },
  {
    title: "Nonprofit Mission: Housing",
    description:
      "To provide clean, safe, affordable, and sustainable transitional housing and sober living facilities.",
  },
  {
    title: "Nonprofit Mission: Environment",
    description:
      "To improve sustainability. Provide grants for the advancement of technology and  efficiency.",
  },
  {
    title: "Nonprofit Mission: People",
    description:
      "Taking care of people is the reason I have started this business. \nFood. Water. Shelter. Hope. ",
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
            My maxim is: I live to serve.   <br />
            I have served 20 years with the National Guard and Reserves.<br />
            My passion to serve others and bring positivity into the world is what has guided me to start this business.
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
      </div>
    </section>
  );
};

export default WhyAshborneSection;
