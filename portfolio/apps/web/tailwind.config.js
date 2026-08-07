/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 🔥 Font Sizes
      fontSize: {
        hero: ['clamp(3rem, 8vw, 4.5rem)', { lineHeight: '1.1' }],
        body: ['1.125rem', { lineHeight: '1.75' }],
      },

      // 🔥 Spacing
      spacing: {
        gutter: '2rem',
      },

      // 🔥 Max Width
      maxWidth: {
        container: '80rem', // 1280px
      },

      // 🔥 Height
      height: {
        button: '3rem', // 48px
      },

      // 🔥 Border Radius
      borderRadius: {
        button: '9999px',
      },

      // 🔥 Colors
      colors: {
        background: '#0f172a',
        primary: '#1e63f0',
        'primary-hover': '#0050c8',
        success: '#22c55e',

        // Border colors
        border: {
          DEFAULT: '#1e293b',
          hover: '#334155',
        },

        // Neutral
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },

        // Brand
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#1e63f0',
          600: '#0050c8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#172554',
        },

        // Ink
        ink: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },

      // 🔥 Transition
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};