import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: 'ThiccCboi', sans-serif;
  background-color: #181818;
  color: #fff;
  height: 100vh;
}

#__next {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

p, h1, h2, h3, h4, h5, h6, ol, ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

`;

export default GlobalStyle;
