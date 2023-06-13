import { createGlobalStyle } from "styled-components"
// import Wotfard from "./public/fonts/Wotfard-Regular.otf"
// import Wotfard2 from "./fonts/wotfard-regular-webfont.ttf"
// import Wotfard3 from './fonts/wotfard-regular-webfont.woff2'

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Wotfard Regular';
  src: url('/fonts/wotfard-regular-webfont.woff2') format('woff2');
}

body {
    font-family: 'Wotfard Regular';
}
`

export default FontStyles;