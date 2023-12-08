import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      //sans é o padrão
      sans: ['var(--font-inter)', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        color1: '#0D4B98', 
        color2: '#001B3D', 
        color3: '#86A5CB',
      },
      backgroundImage: {
        'dropBg': "url('/images/drop item.svg')",
        'fieldBg': "url('/images/field.svg')"
      }
    },
  },
  plugins: [],
}
export default config
