module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        sideNavShadow: '5px 1px 6px 0px rgba(179,179,179,0.75)',
        btnShadow: '0px 20px 50px rgba(0, 0, 0, 0.12)',
        transactionBoxShadow: '0px 1px 14px 3px rgba(0,0,0,0.17)',
      },
      colors:{
        "color1": "rgba(255, 255, 255, 0.28)",
        "color2": "rgba(1, 58, 142, 1)",
        "white": "#FFFFFF",
        "color3": "#E5E5E5",
        "color4": "#858585",
        "color5": "#8E8EA1",
        "color6": "#F7F7F7",
        "color7": "#F0F0F0",
        "color8": "#B3B3B3",
        "color9": "#06AB2B",
        "color10": "#ECF102",
        "color11": "#FE8794",
        "color12": "#F5F5F5",
        "color13": "#22242C",
      },
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
     },
      width: {
        30: "30%",
        35: "35%",
        45: "45%",
        55: "55%",
        
        
      },
      height: {
        55: "55%",
        45: "45%",
        95: "95%",
        90: "90%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
