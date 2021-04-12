import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    #gatsby-focus-wrapper {
        background-color: #f9f9f9;
    }

    html.has-scroll-smooth {
        overflow: hidden;
    }

    html.has-scroll-dragging {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .has-scroll-smooth body {
        overflow: hidden;
    }

    .has-scroll-smooth [data-scroll-container] {
        min-height: 100vh;
    }

    .c-scrollbar {
        position: absolute;
        right: 0;
        top: 0;
        width: 11px;
        height: 100%;
        transform-origin: center right;
        transition: transform 0.3s, opacity 0.3s;
        opacity: 0;
    }

    .c-scrollbar:hover {
        transform: scaleX(1.45);
    }

    .c-scrollbar:hover, .has-scroll-scrolling .c-scrollbar, .has-scroll-dragging .c-scrollbar {
        opacity: 1;
    }

    .c-scrollbar_thumb {
        position: absolute;
        top: 0;
        right: 0;
        background-color: black;
        opacity: 0.5;
        width: 7px;
        border-radius: 10px;
        margin: 2px;
        cursor: -webkit-grab;
        cursor: grab;
    }

    .has-scroll-dragging .c-scrollbar_thumb {
        cursor: -webkit-grabbing;
        cursor: grabbing;
    }
`

export default GlobalStyles
