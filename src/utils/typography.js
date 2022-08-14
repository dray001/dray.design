import Typography from "typography"
const typography = new Typography({
    baseFontSize: "16px",
    baseLineHeight: 1.666,
    googleFonts: [
      {
        name: "Roboto Serif",
        styles: [700],
      },
      {
        name: "Raleway",
        styles: [400]
      }
    ],
    headerFontFamily: ["Roboto Serif"],
    bodyFontFamily: ["Raleway"],
  })

// const typography = new Typography(fairyGateTheme)

// export const { scale, rhythm, options } = typography
export default typography