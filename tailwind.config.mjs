/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand colors matching CSS variables
        peach: {
          50: 'var(--color-peach-50, #fef7f0)',
          100: 'var(--color-peach-100, #fdeee0)',
          200: 'var(--color-peach-200, #fbd9c0)',
          300: 'var(--color-peach-300, #f8c195)',
          400: 'var(--color-peach-400, #f4a267)',
          500: 'var(--color-peach-500, #f08544)',
          600: 'var(--color-peach-600, #e06b39)',
        },
        gold: {
          50: 'var(--color-gold-50, #fffbeb)',
          100: 'var(--color-gold-100, #fef3c7)',
          200: 'var(--color-gold-200, #fde68a)',
          300: 'var(--color-gold-300, #fcd34d)',
          400: 'var(--color-gold-400, #fbbf24)',
          500: 'var(--color-gold-500, #f59e0b)',
        },
        ocean: {
          50: 'var(--color-ocean-50, #f0f9ff)',
          100: 'var(--color-ocean-100, #e0f2fe)',
          200: 'var(--color-ocean-200, #bae6fd)',
          300: 'var(--color-ocean-300, #7dd3fc)',
          400: 'var(--color-ocean-400, #38bdf8)',
          500: 'var(--color-ocean-500, #0ea5e9)',
        },
        // Legacy colors for compatibility
        'beach-blue': 'var(--primary)',
        'beach-yellow': 'var(--accent)', 
        'beach-dark': 'var(--primary-dark)',
        'beach-light-blue': 'var(--primary-light)',
        'beach-cream': 'var(--sand-light)',
        'primary': 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        'accent': 'var(--accent)',
        'sand': 'var(--sand)',
      },
      fontFamily: {
        'chillax': ['Chillax', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'synonym': ['Synonym', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'sans': ['Synonym', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'heading': ['Chillax', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      spacing: {
        'xs': 'var(--space-xs)',
        'sm': 'var(--space-sm)',
        'md': 'var(--space-md)',
        'lg': 'var(--space-lg)',
        'xl': 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
        '3xl': 'var(--space-3xl)',
        '4xl': 'var(--space-4xl)',
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        'full': 'var(--radius-full)',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        'glow-sm': '0 0 10px rgba(240, 133, 68, 0.3)',
        'glow-md': '0 0 20px rgba(240, 133, 68, 0.3)',
        'glow-lg': '0 0 30px rgba(240, 133, 68, 0.3), 0 0 40px rgba(251, 191, 36, 0.2)',
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '250ms',
        'slow': '350ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}