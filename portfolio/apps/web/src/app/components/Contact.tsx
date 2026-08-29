import { motion, useReducedMotion } from "framer-motion";
import {
  Github,
  Linkedin,
  Globe,
  ArrowUpRight,
  Phone,
  Send,
  MapPin,
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
  href: link.href || "#",
  icon: ICONS[link.id?.toLowerCase()] || Globe, // Fallback icon in case link.id is missing or doesn't match
}));

// API URL
const API_URL = "/api/contact";

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (status === "loading") return;

    setStatus("loading");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }

    window.setTimeout(() => {
      setStatus("idle");
    }, 5000);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden py-12 sm:py-16 lg:py-24"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-64 top-32 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          {...fadeUp()}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary sm:text-sm sm:tracking-[0.25em]">
            Contact
          </p>

          <h2
            id="contact-heading"
            className="
              mt-3
              text-[clamp(2rem,8vw,3.75rem)]
              font-bold
              leading-[1.05]
              tracking-tight
              text-neutral-50
              sm:mt-4
            "
          >
            Let's build something{" "}
            <span className="text-primary">meaningful.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-neutral-300 sm:mt-6 sm:text-lg sm:leading-8">
            Whether you're building a fintech platform, a SaaS product, or a
            modern web application, I'd love to hear about your next project.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          {...fadeUp(reduceMotion ? 0 : 0.1)}
          className="
            relative
            mt-10
            overflow-hidden
            rounded-2xl
            border
            border-ink-800
            bg-[#061321]/75
            shadow-xl
            sm:mt-14
            lg:mt-16
          "
        >
          <div className="grid lg:grid-cols-2">
            {/* Form */}
            <div className="p-5 sm:p-8 lg:p-12 xl:p-14">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-primary sm:mb-7 sm:text-sm sm:tracking-[0.25em]">
                Send a message
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-3.5 sm:space-y-4"
                noValidate
              >
                <div>
                  <label htmlFor={nameId} className="sr-only">
                    Your name
                  </label>

                  <input
                    id={nameId}
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    className="
                      w-full
                      rounded-xl
                      border
                      border-ink-800
                      bg-black/40
                      px-3.5
                      py-3
                      text-sm
                      text-neutral-50
                      outline-none
                      placeholder:text-neutral-500
                      transition-colors
                      focus:border-primary
                      sm:px-4
                      sm:py-3.5
                      sm:text-base
                    "
                    required
                  />
                </div>

                <div>
                  <label htmlFor={emailId} className="sr-only">
                    Your email
                  </label>

                  <input
                    id={emailId}
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="
                      w-full
                      rounded-xl
                      border
                      border-ink-800
                      bg-black/40
                      px-3.5
                      py-3
                      text-sm
                      text-neutral-50
                      outline-none
                      placeholder:text-neutral-500
                      transition-colors
                      focus:border-primary
                      sm:px-4
                      sm:py-3.5
                      sm:text-base
                    "
                    required
                  />
                </div>

                <div>
                  <label htmlFor={messageId} className="sr-only">
                    Your message
                  </label>

                  <textarea
                    id={messageId}
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-ink-800
                      bg-black/40
                      px-3.5
                      py-3
                      text-sm
                      leading-6
                      text-neutral-50
                      outline-none
                      placeholder:text-neutral-500
                      transition-colors
                      focus:border-primary
                      sm:px-4
                      sm:py-3.5
                      sm:text-base
                    "
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="
                    inline-flex
                    h-11
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-primary
                    px-6
                    text-sm
                    font-medium
                    text-white
                    transition-all
                    duration-200
                    hover:bg-primary-hover
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-primary
                    sm:h-12
                    sm:text-base
                  "
                >
                  {status === "loading" ? (
                    <>
                      <span
                        className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent sm:h-5 sm:w-5"
                        aria-hidden="true"
                      />
                      Sending…
                    </>
                  ) : status === "success" ? (
                    "Message sent ✓"
                  ) : status === "error" ? (
                    "Try again"
                  ) : (
                    <>
                      <Send size={17} aria-hidden="true" />
                      Send message
                    </>
                  )}
                </button>

                <div
                  role="status"
                  aria-live="polite"
                  className="min-h-5 text-center text-xs"
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
                </div>
              </form>
            </div>

            {/* Desktop Divider */}
            <div
              aria-hidden="true"
              className="absolute bottom-12 left-1/2 top-12 hidden w-px bg-ink-800 lg:block"
            />

            {/* Connect */}
            <div className="border-t border-ink-800 p-5 sm:p-8 lg:border-t-0 lg:p-12 xl:p-14">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-primary sm:mb-7 sm:text-sm sm:tracking-[0.25em]">
                Connect
              </p>

              <div className="space-y-3">
                {contacts.map(({ title, value, href, icon: Icon }) => {
                  const RenderIcon = Icon || Globe;
                  return (
                    <a
                      key={title}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group
                        flex
                        min-w-0
                        items-center
                        justify-between
                        gap-3
                        rounded-xl
                        border
                        border-ink-800
                        bg-black/30
                        p-3
                        transition-colors
                        duration-200
                        hover:border-neutral-700
                        hover:bg-black/50
                        sm:p-4
                      "
                    >
                      <span className="flex min-w-0 items-center gap-3 sm:gap-4">
                        <span
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-primary/25
                            bg-primary/10
                            text-primary
                            sm:h-11
                            sm:w-11
                          "
                        >
                          <RenderIcon size={17} aria-hidden="true" />
                        </span>

                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-neutral-50 sm:text-base">
                            {title}
                          </span>

                          <span className="mt-0.5 block truncate text-xs text-neutral-500 sm:text-sm">
                            {value}
                          </span>
                        </span>
                      </span>

                      <ArrowUpRight
                        size={17}
                        aria-hidden="true"
                        className="
                          shrink-0
                          text-neutral-500
                          transition-transform
                          duration-200
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                          group-hover:text-primary
                        "
                      />
                    </a>
                  );
                })}
              </div>

              {/* Location */}
              <div className="mt-7 flex items-center gap-2 border-t border-ink-800 pt-6 text-neutral-400 sm:mt-8 sm:pt-7">
                <MapPin
                  size={17}
                  className="shrink-0 text-primary"
                  aria-hidden="true"
                />

                <span className="text-sm">
                  Karachi, Pakistan
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;