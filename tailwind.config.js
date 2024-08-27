/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'federal-blue': '#03045eff', // background color for buttons and charts
      'marian-blue': '#023e8aff', // border color for buttons and charts
      'honolulu-blue': '#0077b6ff',
      'blue-green': '#0096c7ff',
      'pacific-cyan': '#00b4d8ff',
      'vivid-sky-blue': '#48cae4ff',
      'non-photo-blue': '#90e0efff',
      'non-photo-blue-2': '#ade8f4ff',
      'light-cyan': '#caf0f8ff', // light border color for input and text color
    },
  },
  plugins: [],
};
