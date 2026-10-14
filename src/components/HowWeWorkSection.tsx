import { motion, useReducedMotion } from "framer-motion";

const coachingStages = [
  {
    title: "Discovery & Strategy",
    description: "We conduct a thorough audit of your cash flow and build your personalized plan. You incur no performance fees until your strategy is finalized, actively in motion, and proving itself.",
  },
  {
    title: "Performance-Aligned Execution",
    description: "As your debt strategy takes hold and tangible cash flow is unlocked, our compensation scales with the money we free up. We only succeed when you see measurable results.",
  },
  {
    title: "Autonomy & Graduation",
    description: "Our goal is not indefinite retention—it is your complete financial sovereignty. When you master the principles and outgrow our coaching, we consider that the ultimate victory.",
  },
];

const HowWeWorkSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="how-we-work" className="section-padding work-surface relative isolate overflow-hidden" aria-labelledby="what-to-expect-heading">
      <svg className="work-cartography pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 1000" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true" focusable="false">
        <defs>
          <pattern id="work-chart-grid" width="90" height="90" patternUnits="userSpaceOnUse">
            <path d="M90 0H0V90" stroke="currentColor" strokeWidth="0.7" />
            <path d="M45 0V90M0 45H90" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 6" />
          </pattern>
        </defs>
        <rect width="1440" height="1000" fill="url(#work-chart-grid)" />
        <g stroke="currentColor" strokeWidth="1.2">
          <path d="M-90 100C110 20 150 215 330 180S560 40 660-70M-90 135C110 55 150 250 330 215S560 75 695-70M-90 175C100 100 160 290 340 255S580 115 740-70M-90 220C110 150 170 340 355 300S620 160 790-70M-90 270C115 200 170 395 370 350S665 220 850-70" />
          <path d="M1010-80C900 80 1180 130 1105 280S945 420 1080 530S1430 480 1510 650M1055-80C945 80 1225 130 1150 280S990 420 1125 530S1475 480 1555 650M1100-80C990 80 1270 130 1195 280S1035 420 1170 530S1520 480 1600 650M1145-80C1035 80 1315 130 1240 280S1080 420 1215 530S1565 480 1645 650" />
          <path d="M-60 850C180 700 260 1010 510 860S780 730 880 1080M-60 885C180 735 260 1045 510 895S780 765 845 1080M-60 925C180 775 260 1085 510 935S780 805 810 1080" />
        </g>
        <g transform="translate(190 440)" stroke="currentColor">
          <circle r="141" strokeWidth="1.4" />
          <circle r="133" strokeWidth="0.7" />
          <circle r="112" strokeWidth="0.8" strokeDasharray="1 7" />
          {Array.from({ length: 32 }, (_, index) => (
            <path key={index} d="M0-133V-122" transform={`rotate(${index * 11.25})`} strokeWidth="0.8" />
          ))}
          <path d="M-165 0H165M0-165V165M-117-117L117 117M117-117L-117 117" strokeWidth="0.7" />
          {[0, 90, 180, 270].map((angle) => (
            <g key={angle} transform={`rotate(${angle})`}>
              <path d="M0-153L19-20L0 0Z" fill="currentColor" strokeWidth="1" />
              <path d="M0-153L-19-20L0 0Z" strokeWidth="1.3" />
            </g>
          ))}
          {[45, 135, 225, 315].map((angle) => (
            <path key={angle} d="M0-100L10-16L0 0L-10-16Z" transform={`rotate(${angle})`} strokeWidth="1" />
          ))}
          <circle r="7" fill="currentColor" />
          <path d="M-5-177V-192L5-177V-192" strokeWidth="1.8" />
        </g>
      </svg>
      <div className="container-max relative z-10">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="work-gold text-sm font-semibold uppercase tracking-widest">
            How We Work
          </span>
          <h2 id="what-to-expect-heading" className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold">
            What to Expect
          </h2>
          <p className="work-copy mt-6 text-lg leading-relaxed">
            At Ashborne Financial Legacy, our goal is education and accountability.
            <br />We begin by taking an analytical view of your current financial landscape and clearly define goals, objectives, and what success looks like.
            <br />Once we have the end in mind, we begin making a plan and select a course of action that will take you to your desired destination.
            <br />Once you're happy with the plan, we move forward together through regular check-ins.
            <br />When life throws you a curve ball, we will adapt and overcome as a team.
          </p>
        </motion.div>
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {coachingStages.map((stage, index) => (
            <motion.article
              key={stage.title}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="work-card rounded-lg border p-6 sm:p-8"
            >
              <span className="work-gold text-sm font-semibold" aria-hidden="true">0{index + 1}</span>
              <h3 className="mt-4 font-serif text-2xl font-semibold leading-snug break-words">{stage.title}</h3>
              <p className="work-copy mt-4 text-base leading-relaxed">{stage.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
