'use client';
import {createGlobalStyle, css} from 'styled-components';

const styles = {
    colors: {
        primary: '#293dea',
        secondary: '#671dd8',
        tertiary: '#11195b',

        disabled: '#272727',
        enabled: '#fafafa',
        warning: '#7f1d1d',
        success: '#15803d',
        destructive: '#7f1d1d',

        background: '#09090b',
        foreground: '#18181b',
        muted: '#27272a',
        border: '#27272a',

        text: {
            default: '#fafafa',
            secondary: '#9e9eaa',
            muted: '#b6b6bb'
        }
    },
    values: {
        radius: '.5rem',
        line: '.15rem',
        border: '.05rem'
    },
    font: {
        sans: 'var(--font-geist-sans), sans-serif',
        mono: 'var(--font-geist-mono), monospace'
    },
    shadows: {
        light: '0 0 .05rem .10rem #ffffff05',
        medium: '0 0 .10rem .15rem #ffffff10',
        heavy: '0 0 .15rem .20rem #ffffff15',
    }
};

const Globals = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${styles.font.sans};
        outline: none;
        scrollbar-color: ${styles.colors.border} transparent;
        line-height: 1.6;
        font-weight: 500;
    }

    body {
        background-color: ${styles.colors.background};
        color: ${styles.colors.text.default};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active{
        -webkit-background-clip: text;
        -webkit-text-fill-color: #ffffff;
        transition: background-color 5000s ease 0s;
    }

    a {
        color: inherit;
        position: relative;
        cursor: pointer;
        text-decoration: underline;
    }

    button {
        border: none;
        background: none;
        cursor: pointer;
    }

    h1 {font-size: 2.99rem}
    h2 {font-size: 2.49rem}
    h3 {font-size: 2.07rem}
    h4 {font-size: 1.73rem}
    h5 {font-size: 1.44rem}
    h6 {font-size: 1.2rem}
    p {font-size: 1rem}
    b {font-weight: 600}
    span {font-size: 1rem}
    small {font-size: .88rem}
    h1, h2, h3, h4, h5, h6 {line-height: 1.15; font-weight: 700; letter-spacing: -.02rem}


    // * Util classes
    // * All can be found on the website


    .spin {animation: spin 1500ms linear infinite}
    @keyframes spin {
        0% {transform: rotate(0deg)}
        100% {transform: rotate(360deg)}
    }
`;

export {styles};
export default Globals;