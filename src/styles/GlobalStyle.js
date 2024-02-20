import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } 

    body {
        line-height: 1;
        font-family: "Noto Sans KR", sans-serif;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;
