import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,500,700&display=swap');
  *,*::after,*::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #eaeaea;
    font-family: 'Roboto Slab', serif;
  }
`;
