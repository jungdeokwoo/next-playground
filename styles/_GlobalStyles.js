import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  line-height: 1.6;
  font-size: 18px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  color: black;
  text-decoration: none;
}

a:hover {
  /* text-decoration: underline; */
}

img {
  max-width: 100%;
  display: block;
}
`;

export default GlobalStyles;