# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\home.spec.js >> Portfolio Home Page Loads Correctly
- Location: tests\home.spec.js:3:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected pattern: /Sana Portfolio/
Received string:  "Sana Hameed - Full Stack Developer Portfolio"
Timeout: 5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    10 × locator resolved to <html lang="en">…</html>
       - unexpected value "Sana Hameed - Full Stack Developer Portfolio"

```

```yaml
- link "Skip to content":
  - /url: "#main"
- banner:
  - navigation "Primary":
    - link "Sana Hameed":
      - /url: "#hero"
    - link "Home":
      - /url: /
    - link "About":
      - /url: "#about"
    - link "Skills":
      - /url: "#skills"
    - link "Projects":
      - /url: "#projects"
    - link "Reviews":
      - /url: "#reviews"
    - link "Contact":
      - /url: "#contact"
    - link "Let's talk":
      - /url: "#contact"
- main:
  - region "Introduction":
    - paragraph: Full Stack Engineer
    - heading "Building digital experiences that feel effortless." [level=1]
    - paragraph: Hi, I'm Sana Hameed. I turn complex ideas into clean, intuitive interfaces people genuinely enjoy using — focused on modern fintech and SaaS products built with React, TypeScript and thoughtful UI.
    - link "View My Work":
      - /url: "#projects"
    - link "Get in touch":
      - /url: "#contact"
    - text: Available for remote work React · TypeScript · Tailwind
  - region "Design experience. Full stack expertise.":
    - paragraph: About
    - heading "Design experience. Full stack expertise." [level=2]
    - paragraph: With 8+ years in graphic design and 2+ years in full stack development, I bridge design and code. I've worked with 40+ clients across industries, building responsive applications that are scalable, maintainable and production-ready.
    - heading "8+ Years in Graphic Design" [level=3]
    - paragraph: Worked with 40+ clients delivering branding, marketing, digital and UI design projects while developing strong communication, visual problem-solving and client collaboration skills.
    - heading "2+ Years in Full Stack Development" [level=3]
    - paragraph: Build responsive, scalable and maintainable full stack applications using React, TypeScript, Next.js, Node.js, Express, Supabase and PostgreSQL with clean architecture and reusable components.
    - heading "Bridging Design & Development" [level=3]
    - paragraph: Bridge the gap between designers and developers by translating design systems into production-ready interfaces while simplifying collaboration and development workflows.
    - paragraph: Currently working with
    - heading "Full stack development with a design background" [level=3]
    - paragraph: My design experience helps me understand UX and user behavior, while my full stack skills let me build complete applications from database to interface.
    - list "Technologies":
      - listitem: React
      - listitem: TypeScript
      - listitem: Next.js
      - listitem: Node.js
      - listitem: Express
      - listitem: Supabase
      - listitem: PostgreSQL
      - listitem: REST APIs
      - listitem: Tailwind CSS
      - listitem: Framer Motion
      - listitem: Git
      - listitem: Figma
    - paragraph: Focus areas
    - list:
      - listitem: Full Stack Web Applications
      - listitem: Fintech Platforms
      - listitem: SaaS Products
      - listitem: Design Systems & Component Libraries
    - definition: 40+
    - term: Clients Served
    - definition: 8+
    - term: Years in Design
    - definition: 2+
    - term: Years in Development
  - paragraph: Skills
  - heading "Technical stack" [level=2]
  - paragraph: Technologies and tools I use to build scalable, maintainable and modern web applications.
  - article:
    - paragraph: Frontend Development
    - heading "Building fast, responsive user interfaces." [level=3]
    - paragraph: Creating scalable React applications, reusable component systems and smooth user experiences.
    - list "Frontend Development skills":
      - listitem: React 18
      - listitem: TypeScript
      - listitem: Next.js
      - listitem: Tailwind CSS
      - listitem: Framer Motion
  - article:
    - paragraph: Backend & Database
    - heading "Reliable data & APIs." [level=3]
    - paragraph: Building secure backend integrations using Supabase, PostgreSQL and REST APIs.
    - list "Backend & Database skills":
      - listitem: Supabase
      - listitem: PostgreSQL
      - listitem: Node.js
      - listitem: REST APIs
  - article:
    - paragraph: Design & Tools
    - heading "Design meets development." [level=3]
    - paragraph: Turning interface ideas into polished, responsive products with modern tooling.
    - list "Design & Tools skills":
      - listitem: Figma
      - listitem: UI / UX
      - listitem: Git
      - listitem: Vite
      - listitem: Responsive Design
  - paragraph: Featured Projects
  - heading "Selected work" [level=2]
  - text: FULL-STACK FINTECH
  - heading "Pennywise" [level=3]
  - paragraph: Premium banking platform with glassmorphic design, virtual cards, real-time transactions.
  - list:
    - listitem: Glassmorphic UI design with modern aesthetics
    - listitem: Virtual card management system
    - listitem: Real-time transaction tracking
    - listitem: Secure user authentication with Supabase
    - listitem: Responsive dashboard with analytics
    - listitem: Dark/light mode support
  - definition: 1.2K+
  - term: Active Users
  - definition: 5.8K+
  - term: Transactions
  - definition: 99.9%
  - term: Uptime
  - link "Live Demo":
    - /url: https://pennywise-fintech-app.vercel.app/
  - link "GitHub":
    - /url: https://github.com/SanaHameed22/pennywise-fintech-app
  - text: React 18 TypeScript Tailwind CSS Supabase
  - img "Pennywise preview"
  - text: 40+
  - paragraph: Clients Served
  - text: 8+
  - paragraph: Years in Design
  - text: 2+
  - paragraph: Years in Development
  - group "Filter projects by category":
    - button "all" [pressed]
    - button "fintech"
    - button "ecommerce"
    - button "educational"
    - button "business"
  - article:
    - text: Featured
    - img "GetItMart preview"
    - heading "GetItMart" [level=3]
    - text: 2025 · E-commerce
    - link "View GetItMart live demo":
      - /url: https://getit-puce.vercel.app/
      - text: Demo
    - link "View GetItMart source on GitHub":
      - /url: https://github.com/SanaHameed22/Getit
    - paragraph: Full-stack ecommerce platform with product catalog, shopping cart, authentication, wishlist, reviews, admin panel, and dark mode.
    - text: React 18 Vite Tailwind CSS Supabase
  - article:
    - img "Student Management System preview"
    - heading "Student Management System" [level=3]
    - text: 2025 · Full-stack app
    - link "View Student Management System live demo":
      - /url: https://student-management-system-ten-mu.vercel.app/
      - text: Demo
    - link "View Student Management System source on GitHub":
      - /url: https://github.com/SanaHameed22/student-management-system
    - paragraph: Complete student management system with CRUD operations, dark mode, attendance, grade calculator, and reports.
    - text: React.js Tailwind CSS Context API
  - article:
    - img "Mathlings preview"
    - heading "Mathlings" [level=3]
    - text: 2025 · Educational
    - link "View Mathlings live demo":
      - /url: https://sanahameed2.github.io/mathlings/
      - text: Demo
    - link "View Mathlings source on GitHub":
      - /url: https://github.com/SanaHameed22/mathlings
    - paragraph: Interactive learning platform for kids with math games, animated stories, and video content.
    - text: HTML5 CSS3 JavaScript
  - article:
    - img "Nexcent preview"
    - heading "Nexcent" [level=3]
    - text: 2025 · Business
    - link "View Nexcent live demo":
      - /url: https://sanahameed2.github.io/nexcent/
      - text: Demo
    - link "View Nexcent source on GitHub":
      - /url: https://github.com/SanaHameed22/nexcent
    - paragraph: Modern business solutions platform built with HTML, CSS, and JavaScript featuring responsive design and interactive components.
    - text: HTML5 CSS3 JavaScript
  - paragraph: Showing 4 projects
  - link "View all projects on GitHub":
    - /url: https://github.com/SanaHameed22
  - region "Client reviews":
    - heading "Client reviews" [level=2]
    - paragraph: What my clients say about my work
    - region "Client reviews":
      - button "View full review from @krislntoronto":
        - text: "@krislntoronto 5"
        - paragraph: "\"Amazing work! Delivered beyond expectations.\""
      - button "Previous review":
        - img
      - button "Next review":
        - img
      - tablist "Choose review":
        - tab "Review 1 of 6" [selected]
        - tab "Review 2 of 6"
        - tab "Review 3 of 6"
        - tab "Review 4 of 6"
        - tab "Review 5 of 6"
        - tab "Review 6 of 6"
  - paragraph: Contact
  - heading "Let's build something meaningful." [level=2]
  - paragraph: Whether you're building a fintech platform, a SaaS product, or a modern web application, I'd love to hear about your next project.
  - paragraph: Send a message
  - text: Your name
  - textbox "Your name"
  - text: Your email
  - textbox "Your email"
  - text: Your message
  - textbox "Your message"
  - button "Send message"
  - status
  - paragraph: Connect
  - link "GitHub @SanaHameed2":
    - /url: https://github.com/SanaHameed22
  - link "LinkedIn Sana Hameed":
    - /url: https://linkedin.com/in/sana-hameed
  - link "Portfolio SanaHameed2.github.io":
    - /url: https://SanaHameed2.github.io/Sana-portfolio
  - link "WhatsApp +44 7727 370653":
    - /url: https://wa.me/447727370653
  - text: Karachi, Pakistan
- contentinfo:
  - link "GitHub":
    - /url: https://github.com/SanaHameed22
  - link "LinkedIn":
    - /url: https://linkedin.com/in/sana-hameed
  - link "WhatsApp":
    - /url: https://wa.me/447727370653
  - paragraph: © 2026 Developed by Sana Hameed. Built with React & Tailwind.
- link "Message on WhatsApp":
  - /url: https://wa.me/923402869594
```

# Test source

```ts
  1 | import { test, expect } from '@playwright/test';
  2 | 
  3 | test('Portfolio Home Page Loads Correctly', async ({ page }) => {
  4 |   await page.goto('http://localhost:5173'); // Ya jo bhi port tumhara ho
> 5 |   await expect(page).toHaveTitle(/Sana Portfolio/);
    |                      ^ Error: expect(page).toHaveTitle(expected) failed
  6 |   await page.screenshot({ path: 'homepage-sanity-check.png' });
  7 |   console.log('✅ Home page loaded successfully!');
  8 | });
```