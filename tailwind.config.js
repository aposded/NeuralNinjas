/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports={
  content: ['./src/**/*.{js,jsx,ts,tsx,svg}'],
  theme: {
    extend: {
      animation: {
        'horizontal-scroll': 'horizontal-scroll 20s linear infinite alternate',
      },
      keyframes: {
        'horizontal-scroll': {
          '0%': {
            transform: 'translate3d(0 , 0, 0)',
          },
          '100%': {
            transform: 'translate3d(-100%, 0, 0)',
          }
        },
      },
      transitionProperty: {
        'position': 'left, right, bottom, top'
      },
      colors: {
        'primary': {
          '50': '#edfbff',
          '100': '#d6f4ff',
          '200': '#b5eeff',
          '300': '#83e5ff',
          '400': '#48d4ff',
          '500': '#1eb8ff',
          '600': '#069bff',
          DEFAULT: '#0085fa',
          '800': '#0867c5',
          '900': '#0d589b',
          '950': '#0e355d',
        },
        'dark': {
          '400': '#5b5b6e',
          DEFAULT: '#151530',
          '600': '#13132b',
          '700': '#101024'
        },'light': {
          '000': '#ffffff',
          DEFAULT: '#FAFAFA',
          '600': '#e1e1e1',
          '700': '#bcbcbc',
          '800': '#969696',
          '900': '#7b7b7b'
        },'warning': {
          '50': '#fefcf7',
          '100': '#fef9ef',
          '200': '#fbefd7',
          '300': '#f9e5bf',
          '400': '#f5d28e',
          DEFAULT: '#f0bf5e',
          '600': '#d8ac55',
          '700': '#b48f47',
          '800': '#907338',
          '900': '#765e2e'
        },'success': {
          '50': '#f7fdf8',
          '100': '#f0faf1',
          '200': '#d9f3dc',
          '300': '#c3ecc7',
          '400': '#95de9e',
          DEFAULT: '#68d074',
          '600': '#5ebb68',
          '700': '#4e9c57',
          '800': '#3e7d46',
          '900': '#336639'
        },'danger': {
          '50': '#fff2f4',
          '100': '#ffe6ea',
          '200': '#ffbfca',
          '300': '#ff99aa',
          '400': '#ff4d6b',
          DEFAULT: '#ff002b',
          '600': '#e60027',
          '700': '#bf0020',
          '800': '#99001a',
          '900': '#7d0015'
        },'node': {
          'gray': '#e1e2e2',
          'brown': '#c6aaa0',
          'orange': '#ffdbc5',
          'yellow': '#fceebb',
          'green': '#beedc5',
          'blue': '#d6e1ff',
          'purple': '#eedaff',
          'pink': '#ffd5fe',
          'red': '#d6e1ff',
          'white': '#ffffff'
        },
      },
      maxWidth: {
        tiny: '16rem',
        '2tiny': '8rem',
        '3tiny': '4rem',
        '8xl': '88rem',
        '9xl': '96rem'
      },
      spacing: {
        '128': '32rem',
        '192': '48rem',
        '256': '64rem',
      },
      borderWidth: {
        0.5: '0.5px',
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xs': '0.5rem',
        '4xs': '0.375rem',
      },
      fontFamily: {
        flowsage: ['Open Sans','sans-serif'],
      },
    },
  },
  plugins: [],
}
