const settingsScreens = require('./tailwind.settings.screens')
const settingsFontSizes = require('./tailwind.settings.fontSizes')


module.exports = {
  content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    screens: settingsScreens,
    fontSize: settingsFontSizes,
    extend: {},
  },
  plugins: [],
}
