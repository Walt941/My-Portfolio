/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // bg and cards (sometimes text)
        'main-primary': 'var(--main-primary)',
        'main-secondary': 'var(--main-secondary)',
        'main-third': 'var(--main-third)',
        // text
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-third': 'var(--text-third)',

        // misc
        'bg-input': 'var(--bg-input)',
        'border-primary': 'var(--border-primary)'
      },
      animation: {
        'right-to-left': 'right-to-left 1.5s ease forwards', 
        'left-to-right': 'left-to-right 1.5s ease forwards', 
       'navani': 'navani 1s ease forwards',
       'fade-in': 'fadeIn 500ms ease-out forwards',
      },
      keyframes: {
        'right-to-left': {
          '0%': { transform: 'translateX(120px)', opacity: '0' }, 
          '100%': { transform: 'translateX(0)', opacity: '1' }, 
        },
        
        'left-to-right': {
          '0%': { transform: 'translateX(-100px)', opacity: '0' }, 
          '100%': { transform: 'translateX(0)', opacity: '1' }, 
        },
        'navani': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fadeIn': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

