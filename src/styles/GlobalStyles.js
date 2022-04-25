import { createGlobalStyle } from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }
  body {
    background: #fefefe;
    min-height: 100vh;
    margin: 0 auto;
    overscroll-behavior: none;
    width: 100%; 
  }
  #root {
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    min-height: 100vh;
    margin: 3px 7px;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;
