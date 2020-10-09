module.exports = {
  plugins: [
    require("postcss-import"),
    require('tailwindcss'),
    //require("@fullhuman/postcss-purgecss")({
    //  content: [
    //    "./src/pages/**/*.tsx",
    //    "./src/components/**/*.tsx",
    //  ],
    //}),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
