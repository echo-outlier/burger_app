import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(to right, #e96443, #904e95);
    height: 100vh;

    }
    * {
    box-sizing: border-box;
    }
`;

export default GlobalStyle;
