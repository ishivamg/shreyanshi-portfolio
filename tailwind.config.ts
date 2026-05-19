import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.25rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '2rem'
      },
      screens: {
        '2xl': '1440px'
      }
    },
    extend: {
      colors: {
        noir: {
          950: '#000000',
          900: '#070708',
          800: '#0C0C0E',
          700: '#121215',
          600: '#1A1A1F'
        },
        chalk: {
          50: '#FFFFFF',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#BFBFBF',
          400: '#8A8A8A'
        },
        lime: {
          100: '#F4FFB8',
          200: '#E8FF80',
          300: '#DBFF40',
          400: '#CCF500',
          500: '#B8DD00',
          600: '#9CBA00',
          700: '#7ECC00'
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'serif'],
        serif: ['var(--font-serif)', 'serif'],
        mono: ['var(--font-mono)', 'monospace']
      },
      fontSize: {
        'display-2xl': ['clamp(3rem, 13vw, 14rem)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        'display-xl': ['clamp(2.5rem, 8vw, 8rem)', { lineHeight: '0.96', letterSpacing: '-0.035em' }],
        'display-lg': ['clamp(2rem, 5vw, 4.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(1.625rem, 3.2vw, 2.75rem)', { lineHeight: '1.08', letterSpacing: '-0.025em' }]
      },
      letterSpacing: {
        tightest: '-0.05em'
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem'
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
        smooth: 'cubic-bezier(0.65, 0, 0.35, 1)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2.6s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
