import Typography from "typography"
const typography = new Typography({
    baseFontSize: "18px",
    baseLineHeight: 1.666,
    googleFonts: [
      {
        name: "Playfair Display",
        styles: [800],
      },
      {
        name: "Raleway",
        styles: [400]
      }
    ],
    headerFontFamily: ["Playfair Display"],
    bodyFontFamily: ["Raleway"],
  })

// const typography = new Typography(fairyGateTheme)

// export const { scale, rhythm, options } = typography
export default typography