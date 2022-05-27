import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

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

/* checkbox */

.check-label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.check-container {
  display: inline-block;
  vertical-align: middle;
}

.check-styled {
  width: 28px;
  height: 28px;
  background: ${colors.white};
  border: 1px solid ${colors.gray400};
  border-radius: 7px;
  transition: all 150ms;
}

.check-input {
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.check-input:checked + .check-styled {
  background: ${colors.primary};
  border: 1px solid ${colors.primary};
}

.check-input:hover + .check-styled {
  background: ${colors.gray400};
  border: 1px solid  ${colors.gray400};
}

.check-input:checked:hover + .check-styled {
  background: ${colors.red400};
  border: 1px solid  ${colors.red400};
}

.check-input:checked:focus + .check-styled {
  box-shadow: 0 0 0 4px rgb(252 88 66 / 30%);
}

.check-input:focus + .check-styled {
  box-shadow: 0 0 0 4px rgb(252 252 252 / 30%);
}

.check-input:disabled + .check-styled {
   opacity: 0.5;
   background: ${colors.white};
   border: 1px solid ${colors.white};
}

.check-input:checked:disabled + .check-styled {
   opacity: 0.5;
   background: ${colors.red400};
   border: 1px solid ${colors.red400};
}

.check-input:hover:disabled + .check-styled {
   opacity: 0.5;
   background: ${colors.white};
   border: 1px solid ${colors.white};
}

.check-input:checked:hover:disabled + .check-styled {
   opacity: 0.5;
   background: ${colors.red400};
   border: 1px solid ${colors.red400};
}

`;

export default GlobalStyle;
