import Typography from "typography"
const typography = new Typography({
    baseFontSize: "18px",
    baseLineHeight: 1.666,
    googleFonts: [
      {
        name: "Figtree",
        styles: [700],
      },
      {
        name: "Figtree",
        styles: [500]
      }
    ],
    headerFontFamily: ["Figtree"],
    bodyFontFamily: ["Figtree"],
  })

// const typography = new Typography(fairyGateTheme)

// export const { scale, rhythm, options } = typography
export default typography