import Typography from "typography"
const typography = new Typography({
    baseFontSize: "18px",
    baseLineHeight: 1.666,
    googleFonts: [
      {
        name: "Roboto",
        styles: [700],
      },
      {
        name: "Raleway",
        styles: [300]
      }
    ],
    headerFontFamily: ["Roboto"],
    bodyFontFamily: ["Raleway"],
  })

// const typography = new Typography(fairyGateTheme)

// export const { scale, rhythm, options } = typography
export default typography