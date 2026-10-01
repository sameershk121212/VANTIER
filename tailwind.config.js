export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { ivory: '#FAF7F0', green: { DEFAULT: '#1B3A2D', dark: '#12281F' }, charcoal: '#26282A', line: '#E6E1D5' },
    fontFamily: { serif: ['"Cormorant Garamond"', 'Georgia', 'serif'], sans: ['Inter', 'system-ui', 'sans-serif'] }
  } }, plugins: []
}
