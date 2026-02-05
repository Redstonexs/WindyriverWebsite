/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        secondary: '#2ecc71',
        accent: '#e74c3c',
        dark: {
          DEFAULT: '#1a202c',
          darker: '#111827',
        },
        light: {
          DEFAULT: '#f8fafc',
          darker: '#e2e8f0',
        },
        minecraft: {
          dirt: '#8B4513',
          grass: '#228B22',
          stone: '#708090',
          wood: '#A0522D',
          wool: '#FFFFFF'
        }
      },
      fontFamily: {
        minecraft: ['Minecraft', 'HarmonyOS Sans SC', 'Arial', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    }
  },
  plugins: [],
}
