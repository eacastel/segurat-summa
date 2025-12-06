module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    extend: {
      colors: {
        'brand-orange': 'rgb(255, 147, 9)', // A deep, professional orange (Orange-600)
        'brand-orange-hover': '#c2410c', // Darker orange for hover
        'brand-black': '#111827', // Rich dark grey/black
        'brand-green': '#15803d', // Forest green (for checkmarks/accents)
        'whatsapp-green': '#25D366', // Official WhatsApp color
        'off-white': '#f9fafb',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      },
      boxShadow: {
        'card': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'), 
  ],
}