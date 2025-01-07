/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      backgroundImage: {
        bannerImg1: "url('/src/assets/sportify-banner-1.jpg')",
        bannerImg2: "url('/src/assets/sportify-banner-2.jpg')",
        bannerImg3: "url('/src/assets/sportify-banner-3.jpg')",
        loginImg: "url('/src/assets/login.webp')",
        addEquipmentBg: "url('/src/assets/sportsEquipment.jpg')",
        allSportEquipmentBg: "url('/src/assets/allSportsEquipmentBg.jpg')",
        UpdateEquipmentBg: "url('/src/assets/UpdateEquipment.jpg')",
        myEquipmentBg: "url('/src/assets/my-equipments-banner-image.jpg')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

