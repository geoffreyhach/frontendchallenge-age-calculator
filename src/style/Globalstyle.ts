import { createGlobalStyle } from "styled-components";
import PoppinsRegular from "../assets/fonts/Poppins-Regular.ttf";
import PoppinsItalic from "../assets/fonts/Poppins-Italic.ttf";
import PoppinsBold from "../assets/fonts/Poppins-Bold.ttf";
import PoppinsBoldItalic from "../assets/fonts/Poppins-BoldItalic.ttf";
import PoppinsExtraBold from "../assets/fonts/Poppins-ExtraBold.ttf";
import PoppinsExtraBoldItalic from "../assets/fonts/Poppins-ExtraBoldItalic.ttf";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
 }
  @font-face {
  font-family: 'Poppins Regular';
  src: url(${PoppinsRegular});
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  } 
  @font-face {
  font-family: 'Poppins Regular';
  src: url(${PoppinsItalic});
  font-weight: 400;
  font-style: italic;
  font-display: auto;
  } 
  @font-face {
    font-family: 'Poppins Regular';
    src: url(${PoppinsBold});
    font-weight: 600;
    font-style: normal;
    font-display: auto;
    } 
  @font-face {
    font-family: 'Poppins Regular';
    src: url(${PoppinsBoldItalic});
    font-weight: 600;
    font-style: italic;
    font-display: auto;
    } 
  @font-face {
    font-family: 'Poppins Regular';
    src: url(${PoppinsExtraBold});
    font-weight: 800;
    font-style: normal;
    font-display: auto;
    } 
  @font-face {
    font-family: 'Poppins Regular';
    src: url(${PoppinsExtraBoldItalic});
    font-weight: 800;
    font-style: italic;
    font-display: auto;
    } 
`;

export default GlobalStyle;
