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
    initial: {
      opacity: 0,
      y: reduceMotion ? 0 : 18,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      margin: "-60px",
    },
    transition: {
      duration: reduceMotion ? 0 : 0.4,
      delay,
      ease: "easeOut",
    },
  });

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden"
    >
      <div className="mx-auto max-w-container px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Intro */}
        <motion.div {...fadeUp()} className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary sm:text-sm sm:tracking-[0.25em]">
            About
          </p>

          <h2
            id="about-heading"
            className="
              mt-3
              max-w-2xl
              text-[clamp(2rem,8vw,3.75rem)]
              font-bold
              leading-[1.05]
              tracking-tight
              text-neutral-50
              sm:mt-4
            "
          >
            Design experience.
            <br className="hidden sm:block" /> Full stack expertise.
          </h2>

          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-neutral-300 sm:mt-6 sm:text-lg sm:leading-8">
            With 8+ years in graphic design and 2+ years in full stack
            development, I bridge design and code. I've worked with 40+
            clients across industries, building responsive applications
            that are scalable, maintainable and production-ready.
          </p>
        </motion.div>

        {/* Main Content */}
        <div
          className="
            mt-10
            grid
            gap-6
            sm:mt-12
            sm:gap-8
            lg:mt-16
            lg:grid-cols-12
            lg:items-start
          "
        >
          {/* Highlights */}
          <motion.div
            {...fadeUp(reduceMotion ? 0 : 0.08)}
            className="space-y-4 lg:col-span-7"
          >
            {highlights.map((item, index) => (
              <article
                key={item.title}
                className="
                  rounded-2xl
                  border
                  border-ink-800
                  bg-[#061321]/60
                  p-5
                  transition-colors
                  duration-200
                  hover:border-neutral-700
                  sm:p-7
                  lg:p-8
                "
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  {/* Number */}
                  <div
                    aria-hidden="true"
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-primary/25
                      bg-primary/10
                      font-mono
                      text-[11px]
                      font-semibold
                      text-primary
                      sm:h-11
                      sm:w-11
                      sm:rounded-xl
                      sm:text-xs
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-base font-semibold leading-snug text-neutral-50 sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-6 text-neutral-300 sm:mt-3 sm:text-base sm:leading-7">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>

          {/* Summary */}
          <motion.div
            {...fadeUp(reduceMotion ? 0 : 0.12)}
            className="lg:col-span-5"
          >
            <div
              className="
                rounded-2xl
                border
                border-ink-800
                bg-[#061321]/60
                p-5
                sm:p-7
                lg:sticky
                lg:top-28
                lg:p-8
              "
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary sm:text-sm sm:tracking-[0.25em]">
                Currently working with
              </p>

              <h3 className="mt-2.5 text-lg font-semibold leading-snug text-neutral-50 sm:mt-3 sm:text-xl">
                Full stack development with a design background
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-300 sm:mt-4 sm:text-base sm:leading-7">
                My design experience helps me understand UX and user behavior,
                while my full stack skills let me build complete applications
                from database to interface.
              </p>

              {/* Technologies */}
              <div className="mt-5 sm:mt-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                  Technologies
                </p>

                <ul
                  className="mt-3 flex flex-wrap gap-2"
                  aria-label="Technologies"
                >
                  {technologies.map((tech) => (
                    <li
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-primary/20
                        bg-primary/5
                        px-2.5
                        py-1.5
                        text-[11px]
                        leading-none
                        text-neutral-300
                        sm:px-3
                        sm:text-xs
                      "
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="my-6 h-px bg-ink-800 sm:my-7" />

              {/* Focus */}
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary sm:text-sm sm:tracking-[0.25em]">
                Focus areas
              </p>

              <ul className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
                {focusAreas.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="
                        mt-[0.45rem]
                        h-1.5
                        w-1.5
                        shrink-0
                        rounded-full
                        bg-primary
                      "
                      aria-hidden="true"
                    />

                    <span className="text-sm leading-5 text-neutral-200 sm:text-base sm:leading-6">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Stats */}
              <dl
                className="
                  mt-6
                  grid
                  grid-cols-3
                  divide-x
                  divide-ink-800
                  rounded-xl
                  border
                  border-ink-800
                  bg-black/30
                  px-2
                  py-4
                  sm:mt-8
                  sm:px-3
                  sm:py-5
                "
              >
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="min-w-0 px-2 text-center sm:px-3"
                  >
                    <dd className="font-mono text-lg font-bold leading-none text-neutral-50 sm:text-2xl">
                      {stat.value}
                    </dd>

                    <dt className="mx-auto mt-1.5 max-w-[80px] text-[9px] leading-tight text-neutral-500 sm:max-w-none sm:text-xs">
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