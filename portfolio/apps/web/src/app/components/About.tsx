import { motion, useReducedMotion } from "framer-motion";

const highlights = [
  {
    title: "8+ Years in Graphic Design",
    description:
      "Worked with 40+ clients delivering branding, marketing, digital and UI design projects while developing strong communication, visual problem-solving and client collaboration skills.",
  },
  {
    title: "2+ Years in Full Stack Development",
    description:
      "Build responsive, scalable and maintainable full stack applications using React, TypeScript, Next.js, Node.js, Express, Supabase and PostgreSQL with clean architecture and reusable components.",
  },
  {
    title: "Bridging Design & Development",
    description:
      "Bridge the gap between designers and developers by translating design systems into production-ready interfaces while simplifying collaboration and development workflows.",
  },
];

const technologies = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Express",
  "Supabase",
  "PostgreSQL",
  "REST APIs",
  "Tailwind CSS",
  "Framer Motion",
  "Git",
  "Figma",
];

const focusAreas = [
  "Full Stack Web Applications",
  "Fintech Platforms",
  "SaaS Products",
  "Design Systems & Component Libraries",
];

const stats = [
  { value: "40+", label: "Clients Served" },
  { value: "8+", label: "Years in Design" },
  { value: "2+", label: "Years in Development" },
];

export function About() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: {
      duration: reduceMotion ? 0 : 0.4,
      delay,
    },
  });

  return (
    <section className="relative overflow-hidden">
      {/* Ambient background — decorative only */}

      <div className="relative mx-auto max-w-container px-5 py-10 sm:px-8 sm:py-14 lg:py-20">
        {/* Intro */}
        <motion.div {...fadeUp()} className="max-w-prose">
          <p className="text-small font-medium uppercase tracking-[0.25em] text-primary">
            About
          </p>

          <h2
            id="about-heading"
            className="mt-3 text-3xl font-bold leading-tight text-neutral-50 sm:mt-4 sm:text-4xl lg:text-5xl"
          >
            Design experience. Full stack expertise.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-neutral-200 sm:mt-6 sm:text-lg">
            With 8+ years in graphic design and 2+ years in full stack
            development, I bridge design and code. I've worked with 40+
            clients across industries, building responsive applications
            that are scalable, maintainable and production-ready.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="mt-10 grid gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          {/* Highlights */}
          <motion.div
            {...fadeUp(reduceMotion ? 0 : 0.1)}
            className="space-y-4 lg:col-span-7 lg:space-y-6"
          >
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-ink-800 bg-[#061321]/60 p-5 backdrop-blur-xl transition-colors duration-200 hover:border-neutral-600 sm:p-8"
              >
                <div className="flex items-start gap-3 sm:gap-5">
                  <div
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 font-mono text-xs font-semibold text-primary sm:h-12 sm:w-12 sm:rounded-xl sm:text-sm"
                  >
                    0{index + 1}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-neutral-50 sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-neutral-300 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Summary */}
          <motion.div
            {...fadeUp(reduceMotion ? 0 : 0.1)}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-ink-800 bg-[#061321]/60 p-5 backdrop-blur-xl sm:p-8 lg:sticky lg:top-28">
              <p className="text-small font-medium uppercase tracking-[0.25em] text-primary">
                Currently working with
              </p>

              <h3 className="mt-2 text-lg font-bold text-neutral-50 sm:mt-3 sm:text-xl">
                Full stack development with a design background
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-neutral-300 sm:mt-4 sm:text-base">
                My design experience helps me understand UX and user
                behavior, while my full stack skills let me build complete
                applications from database to interface.
              </p>

              {/* Technologies */}
              <ul
                className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-2.5"
                aria-label="Technologies"
              >
                {technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs text-neutral-200 sm:px-3.5 sm:text-small"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="my-6 h-px bg-ink-800 sm:my-8" />

              {/* Focus */}
              <p className="text-small font-medium uppercase tracking-[0.25em] text-primary">
                Focus areas
              </p>

              <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-3">
                {focusAreas.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-neutral-200 sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Stats */}
              <dl className="mt-6 grid grid-cols-3 gap-2 rounded-xl border border-ink-800 bg-black/40 p-4 sm:mt-8 sm:gap-3 sm:p-5">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <dd className="font-mono text-lg font-bold text-neutral-50 sm:text-2xl">
                      {stat.value}
                    </dd>

                    <dt className="mt-1 text-[10px] leading-tight text-neutral-400 sm:text-xs">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;