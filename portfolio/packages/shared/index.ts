// packages/shared/index.ts
export const SOCIAL_LINKS = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    display: "+92 300 1234567",
    href: "https://wa.me/923001234567",
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
    href: "https://linkedin.com/in/sanahameed",
  },
  {
    id: "facebook",
    label: "Facebook",
    display: "SSF",
    href: "https://www.facebook.com/people/SSF/61576550678025/",
  },
  {
    id: "instagram",
    label: "Instagram",
    display: "@ssf_designs",
    href: "https://www.instagram.com/ssf_designs",
  },
];

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