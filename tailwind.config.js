/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bannerImg: "url('/src/assets/sportify-banner.avif')",
        bannerImg2: "url('/src/assets/bannerImg2.avif')",
        bannerImg3: "url('/src/assets/banerImg3.avif')",
        loginImg: "url('/src/assets/login.webp')",
        addEquipmentBg: "url('/src/assets/sportsEquipment.jpg')",
        allSportEquipmentBg: "url('/src/assets/allSportsEquipmentBg.jpg')",
        UpdateEquipmentBg: "url('/src/assets/UpdateEquipment.jpg')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

