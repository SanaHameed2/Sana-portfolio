// packages/shared/index.ts

/**
 * Social links displayed in the Contact section.
 * Order matters — appears top to bottom in the UI.
 */
export const SOCIAL_LINKS = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    display: "+92 340 2869594",
    href: "https://wa.me/923402869594",
  },
  {
    id: "github",
    label: "GitHub",
    display: "@SanaHameed2",
    href: "https://github.com/SanaHameed2",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    display: "Sana Hameed",
    href: "https://linkedin.com/in/sana-h-4b942157",
  },
  {
    id: "portfolio",
    label: "Portfolio",
    display: "sana-portfolio-weld.vercel.app",
    href: "https://sana-portfolio-weld.vercel.app",
  },
];

/**
 * Main navigation links (used in the sticky header).
 */
export const NAV_LINKS = [
  { id: "home", label: "Home", href: "#hero" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export type SocialLink = {
  id: string;
  label: string;
  display: string;
  href: string;
};

export type NavLink = {
  id: string;
  label: string;
  href: string;
};