import { createGlobalStyle } from "styled-components";

const GlobalSyle = createGlobalStyle`
    :root {
        --blue-1: #BDDEF2;
        --blue-2: #7EBCF2;
        --blue-3: #035AA6;
        --blue-4: #034AA6;
        --grey-0: #FFFFFF;
        --grey-1: #F2F2F2;
        --grey-2: #EFF3F6;
        --grey-3: #000000;
        --title-1: #656565;
    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        font-family: 'Inter', sans-serif;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    h1 {
        font-weight: bold;
        font-size: 1rem;
    }
    
    h2 {
        font-weight: bold;
        font-size: 1rem;
    }
    h3 {
        font-weight: bold;
        font-size: 1rem;
    }
    p {
        font-weight: 400;
        font-size: 0.75rem;
    }
    h4 {
        font-weight: bold;
        font-size: 0.75rem;
    }
    span {
        font-weight: 400;
        font-size: 0.75rem;
        font-style: italic;
    }
`

export default GlobalSyle