import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';
// import GoogleFontLoader from 'react-google-font-loader';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: 'Sora', sans-serif;
    background: #fff;
    color: ${colors.primaryDarkColor};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${colors.primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: ${colors.primaryColor};
  }

  ul {
    list-style: none;
  }

  h1 {
    font-size: 2em;
    text-align: center;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.successColor}
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${colors.errorColor}
  }
`;

export const Container = styled.section`
  max-width: auto;
  height: 100vh;
  background: #f8f9fa;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// @media screen and (max-width: 480px) {
// }

// @media screen and (min-width: 481px) and (max-width: 768px) {
// }

// @media screen and (min-width: 769px) and (max-width: 1024px) {
// }

// @media screen and (min-width: 1025px) {
// }
