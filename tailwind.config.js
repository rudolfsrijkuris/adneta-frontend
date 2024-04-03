/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blueGradientBottom: '#28a2ec',
        blueGradientTop: '#70b9ff',
        blueAccent: '#28a2ec',
        grayAccent: '#4d5969',
        redGradientBottom: '#ff774f',
        redGradientTop: '#d74b81',
        purpleGradientBottom: '#d43ec0',
        purpleGradientTop: '#751bbd',
        tealGradientBottom: '#8de9d5',
        tealGradientTop: '#32c4c0',
        dashboardSidebarBG: '#f2f2f2',
        dashboardSidebarAccentColor: '#69788d',
      },
      fontFamily: {
        urbanist: ['var(--font-urbanist)'],
      },
    },
  },
  plugins: [],
}
