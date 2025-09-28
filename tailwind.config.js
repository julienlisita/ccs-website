/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Functional tokens (pointent sur les variables CSS)
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        bg: 'var(--color-bg)',
        dark: 'var(--color-dark)',

        // Optionnel : accès direct à la palette "nommée"
        ochre: 'var(--color-ochre)',
        green: 'var(--color-green)',
        cream: 'var(--color-cream)',
        earth: 'var(--color-earth)',
      },
    },
  },
  plugins: [],
};
