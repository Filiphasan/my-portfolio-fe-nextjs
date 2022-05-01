module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/constants/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1360px',
        '2xl': '1480px',
      },
    },
  },
  plugins: [],
}
