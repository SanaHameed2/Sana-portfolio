import { motion, useReducedMotion } from "framer-motion";
import {
  Github,
  Linkedin,
  Globe,
  MapPin,
  ArrowUpRight,
  Phone,
  Send,
  type LucideIcon,
} from "lucide-react";
import { useId, useState } from "react";
import { SOCIAL_LINKS } from "@sana/shared";

const ICONS: Record<string, LucideIcon> = {
  whatsapp: Phone,
  github: Github,
  linkedin: Linkedin,
  portfolio: Globe,
};

const contacts = SOCIAL_LINKS.map((link) => ({
  title: link.label,
  value: link.display || link.label,
  href: link.href,
  icon: ICONS[link.id],
}));

const API_URL = import.meta.env.VITE_API_URL ?? "/api/contact";

export function Contact() {
  const reduceMotion = useReducedMotion();

  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: {
      duration: reduceMotion ? 0 : 0.4,
      delay,
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-12 sm:py-20 lg:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-[250px] top-40 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[170px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-container px-5 sm:px-8">
        {/* Header */}
        <motion.div
          {...fadeUp()}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-small font-medium uppercase tracking-[0.25em] text-primary">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-neutral-50 sm:mt-4 sm:text-4xl lg:text-5xl">
            Let's build something{" "}
            <span className="text-primary">meaningful.</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-neutral-300 sm:mt-6 sm:text-lg">
            Whether you're building a fintech platform, a SaaS product, or a
            modern web application, I'd love to hear about your next project.
          </p>
        </motion.div>

        {/* Contact Form & Links */}
        <motion.div
          {...fadeUp(reduceMotion ? 0 : 0.1)}
          className="relative mt-10 overflow-hidden rounded-2xl border border-ink-800 bg-[#061321]/75 backdrop-blur-2xl shadow-xl sm:mt-16"
        >
          <div className="grid lg:grid-cols-2">
            {/* Form */}
            <div className="relative p-5 sm:p-10 lg:p-14">
              <p className="mb-5 text-small font-medium uppercase tracking-[0.25em] text-primary sm:mb-8">
                Send a message
              </p>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4" noValidate>
                <div>
                  <label htmlFor={nameId} className="sr-only">
                    Your name
                  </label>

                  <input
                    id={nameId}
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-ink-800 bg-black/40 p-3 text-sm text-neutral-50 placeholder:text-neutral-400 transition-colors duration-200 focus:border-primary focus:outline-none sm:p-3.5 sm:text-base"
                    required
                  />
                </div>

                <div>
                  <label htmlFor={emailId} className="sr-only">
                    Your email
                  </label>

                  <input
                    id={emailId}
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-ink-800 bg-black/40 p-3 text-sm text-neutral-50 placeholder:text-neutral-400 transition-colors duration-200 focus:border-primary focus:outline-none sm:p-3.5 sm:text-base"
                    required
                  />
                </div>

                <div>
                  <label htmlFor={messageId} className="sr-only">
                    Your message
                  </label>

                  <textarea
                    id={messageId}
                    placeholder="Your message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    className="w-full resize-none rounded-xl border border-ink-800 bg-black/40 p-3 text-sm text-neutral-50 placeholder:text-neutral-400 transition-colors duration-200 focus:border-primary focus:outline-none sm:p-3.5 sm:text-base"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-medium text-white transition-colors duration-200 hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:h-12 sm:px-8 sm:text-base"
                >
                  {status === "loading" ? (
                    <>
                      <span
                        className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"
                        aria-hidden="true"
                      />
                      Sending…
                    </>
                  ) : status === "success" ? (
                    "Message sent ✅"
                  ) : status === "error" ? (
                    "Failed to send — try again"
                  ) : (
                    <>
                      <Send size={18} aria-hidden="true" />
                      Send message
                    </>
                  )}
                </button>

                <p
                  role="status"
                  aria-live="polite"
                  className="text-center text-small"
                >
                  {status === "success" && (
                    <span className="text-emerald-400">
                      Thank you! I'll get back to you soon.
                    </span>
                  )}

                  {status === "error" && (
                    <span className="text-red-400">
                      Something went wrong. Please try again.
                    </span>
                  )}
                </p>
              </form>
            </div>

            {/* Divider */}
            <div
              className="absolute bottom-12 left-1/2 top-12 hidden w-px bg-ink-800 lg:block"
              aria-hidden="true"
            />

            {/* Connect */}
            <div className="relative p-5 sm:p-10 lg:p-14">
              <p className="mb-5 text-small font-medium uppercase tracking-[0.25em] text-primary sm:mb-8">
                Connect
              </p>

              <div className="space-y-3 sm:space-y-4">
                {contacts.map(({ title, value, href, icon: Icon }) => (
                  <a
                    key={title}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-ink-800 bg-black/40 p-3 transition-colors duration-200 hover:border-neutral-600 hover:bg-black/60 sm:p-5"
                  >
                    <span className="flex min-w-0 items-center gap-3 sm:gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary sm:h-11 sm:w-11">
                        <Icon size={17} aria-hidden="true" />
                      </span>

                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-neutral-50 sm:text-base">
                          {title}
                        </span>

                        <span className="mt-0.5 block break-all text-xs text-neutral-400 sm:text-small">
                          {value}
                        </span>
                      </span>
                    </span>

                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className="ml-3 shrink-0 text-neutral-400 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          {...fadeUp(reduceMotion ? 0 : 0.2)}
          className="mt-7 sm:mt-12"
        >
          <div className="flex items-center justify-center gap-2 text-neutral-300">
            <MapPin
              size={18}
              className="text-primary"
              aria-hidden="true"
            />
            <span className="text-sm sm:text-base">
              Karachi, Pakistan
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;