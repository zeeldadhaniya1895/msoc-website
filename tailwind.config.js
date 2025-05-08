/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#FF8C00',      // ડાર્ક ઓરેન્જ
        'secondary': '#FFD700',    // ગોલ્ડન યલો
        'accent': '#FF4500',       // ઓરેન્જ રેડ
        'success': '#10B981',      // ગ્રીન કલર
        'warning': '#FFBF00',      // એમ્બર કલર
        'error': '#EF4444',        // રેડ કલર
        'background': '#111827',   // ડાર્ક બેકગ્રાઉન્ડ
        'paper': '#1F2937',        // ડાર્ક સરફેસ
        'textPrimary': '#F9FAFB',  // વ્હાઇટ ટેક્સ્ટ
        'textSecondary': '#E5E7EB',// લાઇટ ગ્રે ટેક્સ્ટ
        'border': '#374151',       // ડાર્ક ગ્રે બોર્ડર
        'sunset-yellow': '#FFD700',
        'sunset-light-orange': '#FFAA33',
        'sunset-orange': '#FF8C00',
        'sunset-deep-orange': '#FF4500',
        'sunset-amber': '#FFBF00',
        'mstc-blue': '#0078D4',
        'mstc-dark': '#001F3F',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)',
        'button': '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.16)',
        'hover': '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.14)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(to right, #FF8C00, #FFD700)',
        'gradient-sunset': 'linear-gradient(to right bottom, #FF4500, #FF8C00, #FFD700)',
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-primary',
    'bg-secondary',
    'bg-accent',
    'bg-success',
    'bg-warning',
    'bg-error',
    'text-primary',
    'text-secondary',
    'text-accent',
    'text-success',
    'text-warning',
    'text-error',
    'hover:bg-primary',
    'hover:bg-secondary',
    'hover:text-primary',
    'hover:text-secondary',
  ]
} 