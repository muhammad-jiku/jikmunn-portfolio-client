module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#88594B',
          secondary: '#7C7C7C',
          // accent: '#3A4256',
          // neutral: '#3d4451',
          // 'base-100': '#ffffff',
        },
      },
      // 'dark',
      // 'cupcake',
    ],
  },
  plugins: [require('daisyui')],
};
