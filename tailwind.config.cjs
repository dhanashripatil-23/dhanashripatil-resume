module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx,ts,tsx}','./components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{ glass:'rgba(255,255,255,0.08)' },
      backdropBlur:{ xl:'30px' }
    }
  },
  plugins: []
}
