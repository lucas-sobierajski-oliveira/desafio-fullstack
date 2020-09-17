import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');


   * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root{
    height: 100%;
  }


  body {
    -webkit-font-smoothing: antialiased ;
  }

  a {
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
`;
