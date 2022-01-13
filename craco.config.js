// module.exports = {
//     style: {
//       postcss: {
//         plugins: [
//           require('tailwindcss'),
//           require('autoprefixer'),
//         ],
//       },
//     },
//   }
const tailwindcss = require("tailwindcss");
module.exports = {
plugins: [tailwindcss("./tailwind.config.js"), require("autoprefixer")],
};