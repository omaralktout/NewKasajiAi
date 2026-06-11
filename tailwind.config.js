/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        ink: '#07143D',
        muted: '#5E6B8D',
        mist: '#F6F8FF',
        brandBlue: '#4B5596',
        brandPurple: '#6450A0',
        cyanx: '#4B5596',
        violetx: '#6450A0',
        bluex: '#4B5596'
      },
      boxShadow: {
        soft: '0 24px 90px rgba(7,20,61,0.10)',
        glow: '0 24px 80px rgba(125,76,255,0.20)'
      }
    }
  },
  plugins: []
};
