import { motion, useReducedMotion } from "framer-motion";

const groups = [
  {
    label: "Frontend Development",
    heading: "Building fast, responsive user interfaces.",
    description:
      "Creating scalable React applications, reusable component systems and smooth user experiences.",
    skills: ["React 18", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    span: "lg:row-span-2",
  },
  {
    label: "Backend & Database",
    heading: "Reliable data & APIs.",
    description: "Building secure backend integrations using Supabase, PostgreSQL and REST APIs.",
    skills: ["Supabase", "PostgreSQL", "Node.js", "REST APIs"],
  },
  {
    label: "Design & Tools",
    heading: "Design meets development.",
    description: "Turning interface ideas into polished, responsive products with modern tooling.",
    skills: ["Figma", "UI / UX", "Git", "Vite", "Responsive Design"],
  },
];

export function Skills() {
  const reduceMotion = useReducedMotion();
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: reduceMotion ? 0 : 0.4, delay },
  });

  return (
    <div className="relative overflow-hidden py-section-mobile md:py-section-tablet lg:py-section-desktop">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[170px]" />
      </div>

      <div className="relative mx-auto max-w-container px-8">
        <motion.div {...fadeUp()} className="mx-auto mb-16 max-w-prose text-center">
          <p className="text-small font-medium uppercase tracking-[0.3em] text-primary">Skills</p>
          <h2 className="mt-6 text-3xl font-bold text-neutral-50 sm:text-section-heading">
            Technical stack
          </h2>
          <p className="mt-6 text-body text-neutral-200">
            Technologies and tools I use to build scalable, maintainable and
            modern web applications.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp(reduceMotion ? 0 : 0.1)}
          className="grid gap-8 lg:grid-cols-2"
        >
          {groups.map((group) => (
            <article
              key={group.label}
              className={`rounded-card border border-border bg-surface/60 p-8 backdrop-blur-xl transition-colors duration-DEFAULT ease-DEFAULT hover:border-border-hover ${group.span ?? ""}`}
            >
              <p className="text-small font-medium uppercase tracking-[0.3em] text-primary">
                {group.label}
              </p>
              <h3 className="mt-4 text-card-title text-neutral-50">{group.heading}</h3>
              <p className="mt-4 max-w-prose text-body text-neutral-200">{group.description}</p>

              <ul className="mt-8 flex flex-wrap gap-3" aria-label={`${group.label} skills`}>
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-small text-neutral-200 transition-colors duration-DEFAULT hover:bg-primary/20"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
