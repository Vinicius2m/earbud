import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: 'Open Sans', sans-serif;
    }

    html, body, div, span, applet, object, iframe, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
        border: 0;
        font-size: 100%;
    }


    ol, ul {
    	list-style: none;
    }

    h1 {
        font-size: 26px;
        font-weight: bold;
        border: 0;
    }

    h2 {
        font-size: 22px;
        font-weight: bold;
        border: 0;
    }

    h3 {
        font-size: 18px;
        font-weight: bold;
        border: 0;
    }

    :root {
        /* --primary-color: ;
        --secondary-color: ;
        --gray4: ;
        --gray3: ;
        --gray2: ;
        --gray1: ;
        --gradient-1: ;
        --gradient-2: ; */
    }

    .App {
        max-width: 1500px;
        margin: 0 auto;
    }

    body {
        min-height: 100vh;
        height: 100%;
        padding: 0 16px;
    }

    button {
        font-family: inherit;
    }

    button:hover {
        cursor: pointer;
    }
`;

export default GlobalStyle;
