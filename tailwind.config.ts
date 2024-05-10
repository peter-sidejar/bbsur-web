import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-9': '#2E62FF',
        'neutral-12': 'rgb(var(--neutral-12) / <alpha-value>)',
        'neutral-11': 'var(--neutral-11)',
        'panel-1': 'var(--panel-1)',
        'panel-3': 'var(--panel-3)',
        'panel-4': 'var(--panel-4)',
        'background-1': 'var(--background-1)',
        'background-3': 'var(--background-3)',
        'neutral-alpha-5': 'var(--neutral-alpha-5)',
        'neutral-5': 'var(--neutral-5)',
        'neutral-3': 'var(--neutral-3)',
        'neutral-alpha-12': 'var(--neutral-alpha-12)',
        'neutral-alpha-6': 'var(--neutral-alpha-6)',
        'neutral-alpha-7': 'var(--neutral-alpha-7)',
        'neutral-alpha-3': 'var(--neutral-alpha-3)',
        'neutral-alpha-4': 'var(--neutral-alpha-4)',
        'neutral-alpha-11': 'var(--neutral-alpha-11)',
        'neutral-1': 'var(--neutral-1)',
        'neutral-10': 'var(--neutral-10)',
        'neutral-9': 'var(--neutral-9)',
        'warning-alpha-3': 'var(--warning-alpha-3)',
        'warning-alpha-12': 'var(--warning-alpha-12)',
        'transparent-panels-10': 'var(--transparent-panels-10)',
        'danger-11': 'rgb(var(--danger-11) / <alpha-value>)',
        'danger-9': 'rgb(var(--danger-9) / <alpha-value>)',
        'danger-alpha-4': 'var(--danger-alpha-4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        display: ['var(--font-inter-display)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class', // only generate classes
    }),
  ],
};
export default config;
