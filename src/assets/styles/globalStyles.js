import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Bitter&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
