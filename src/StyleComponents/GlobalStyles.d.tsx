import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');

body{
    font-family:"JetBrains Mono", monospace;
    min-height:100vh;
    background-color:#1a1a1a;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
}

*{
    margin: 0;
    padding: 0;
    box-sizing:border-box
}
html{
    font-size:62.5%
}
`;
