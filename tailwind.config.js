/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        'dash-1': '#EAF3FC',
        'dash-2': '#FAFCFE',
        'dash-3': '#0560FD',
        'dash-4': '#E5EAEF',
        'dash-5': '#212325',
        'dash-6': '#C2C7CE',
        'dash-7': '#5C6272',
      },
      textColor: {
        'dash-1': '#EAF3FC',
        'dash-2': '#FAFCFE',
        'dash-3': '#0560FD',
        'dash-4': '#E5EAEF',
        'dash-5': '#212325',
        'dash-6': '#C2C7CE',
        'dash-7': '#5C6272',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
  }),
  ],
};
