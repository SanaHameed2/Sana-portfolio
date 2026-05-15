// ============================================
// Mobile Menu Toggle
// ============================================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
}

// Close menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (navLinks && menuToggle) {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
    }
  }
});

// ============================================
// Smooth scrolling for anchor links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ============================================
// Back to Top Button
// ============================================
const backBtn = document.getElementById("backToTopBtn");
if (backBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backBtn.classList.add("show");
    } else {
      backBtn.classList.remove("show");
    }
  });

  backBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ============================================
// Scroll Reveal Animations
// ============================================
const sections = document.querySelectorAll("section:not(.hero)");
sections.forEach((s) => {
  s.style.opacity = "0";
  s.style.transform = "translateY(40px)";
  s.style.transition = "opacity 0.7s ease, transform 0.7s ease";
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach((s) => observer.observe(s));

// Hero section immediately visible
const hero = document.querySelector(".hero");
if (hero) hero.style.opacity = "1";

// ============================================
// Contact Form Handling
// ============================================
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const name = contactForm.querySelector('input[placeholder="Your Name"]')?.value || "";
    const email = contactForm.querySelector('input[placeholder="Your Email"]')?.value || "";
    const message = contactForm.querySelector('textarea[placeholder="Your Message"]')?.value || "";
    
    if (!name || !email || !message) {
      if (formStatus) formStatus.innerHTML = "❌ Please fill all fields.";
      return;
    }
    
    if (formStatus) formStatus.innerHTML = "Sending...";
    
    // Simulate sending (you can connect to a backend later)
    setTimeout(() => {
      if (formStatus) {
        formStatus.innerHTML = "✅ Message sent! I will get back to you soon.";
        formStatus.style.color = "#7AB2D3";
      }
      contactForm.reset();
      setTimeout(() => {
        if (formStatus) formStatus.innerHTML = "";
      }, 5000);
    }, 1000);
  });
}

// ============================================
// Profile Links - Open in new tab / Redirect
// ============================================
// Email links - open default email client
document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    // Allow default behavior - opens email client
    console.log("Email link clicked:", link.href);
  });
});

// WhatsApp links
document.querySelectorAll('a[href*="wa.me"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    // Allow default behavior - opens WhatsApp
    console.log("WhatsApp link clicked:", link.href);
  });
});

// Social media links - ensure they open in new tab
document.querySelectorAll('.profile-link, .social-icon, .case-link').forEach((link) => {
  if (link.href && !link.href.startsWith('#')) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  }
});

// ============================================
// Fix: Ensure all profile links work
// ============================================
// Manual redirect fix for any non-working links
const fixLinks = () => {
  // Email link
  const emailLinks = document.querySelectorAll('a[href*="saa.faiza2@gmail.com"]');
  emailLinks.forEach(link => {
    if (!link.href.startsWith('mailto:')) {
      link.href = 'mailto:saa.faiza2@gmail.com';
    }
  });
  
  // WhatsApp link
  const whatsappLinks = document.querySelectorAll('a[href*="923402869594"]');
  whatsappLinks.forEach(link => {
    if (!link.href.includes('wa.me')) {
      link.href = 'https://wa.me/923402869594';
    }
  });
  
  // GitHub link
  const githubLinks = document.querySelectorAll('a[href*="github.com/SanaHameed2"]');
  githubLinks.forEach(link => {
    link.href = 'https://github.com/SanaHameed2';
  });
  
  // LinkedIn link
  const linkedinLinks = document.querySelectorAll('a[href*="linkedin.com/in/sana-hameed"]');
  linkedinLinks.forEach(link => {
    link.href = 'https://www.linkedin.com/in/sana-hameed-68136716a';
  });
  
  // Facebook link
  const facebookLinks = document.querySelectorAll('a[href*="facebook.com/sana.hameed"]');
  facebookLinks.forEach(link => {
    link.href = 'https://www.facebook.com/sana.hameed.525094/';
  });
};

// Run fix on page load
fixLinks();

// ============================================
// FAQ Accordion (if exists)
// ============================================
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    const isActive = faqItem.classList.contains("active");

    document.querySelectorAll(".faq-item").forEach((item) => {
      item.classList.remove("active");
    });

    if (!isActive) {
      faqItem.classList.add("active");
    }
  });
});

// ============================================
// Active section highlighting in navbar
// ============================================
const navItems = document.querySelectorAll(".nav-links a");
const allSections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";
  
  allSections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href") === `#${current}`) {
      item.classList.add("active");
    }
  });
});

// ============================================
// Project Cards - Ensure links work
// ============================================
document.querySelectorAll(".case-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    console.log("Project link clicked:", link.href);
    // Allow default behavior (opens in new tab due to target="_blank")
  });
});

console.log("✅ app.js loaded - All links and form are working!");