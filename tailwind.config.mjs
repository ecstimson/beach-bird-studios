/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}",
    "./public/**/*.html"
  ],
  darkMode: false,
  safelist: [
    "bg-surface","bg-elevated","text-text","text-muted",
    "border-border","rounded-[var(--radius-md)]","rounded-[var(--radius-xl)]",
    "shadow-[var(--shadow-sm)]","shadow-[var(--shadow-md)]"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
        },
        accent: { 600: 'var(--color-accent-600)' },
        bg: 'var(--bg)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        'beach-dark': '#0C3745',
        'beach-blue': '#47A7EB',
        'beach-yellow': '#FFC107',
        'border-light': 'var(--border-light)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        danger: 'var(--color-danger)',
      },
      fontFamily: {
        heading: 'var(--font-heading)',
        sans: 'var(--font-body)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        xl: 'var(--radius-xl)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
      transitionDuration: {
        150: 'var(--duration-150)',
        250: 'var(--duration-250)',
        450: 'var(--duration-450)',
      },
      transitionTimingFunction: {
        custom: 'var(--easing)',
      },
    },
  },
  plugins: [],
}