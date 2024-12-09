'use client';
import {createGlobalStyle} from 'styled-components';

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
        radius: '.35rem',
        line: '.15rem',
        border: '.05rem'
    },
    font: {
        sans: 'var(--font-geist-sans), sans-serif',
        mono: 'var(--font-geist-mono), monospace'
    },
    shadows: {
        light: '0 0 .15rem .25rem #ffffff05',
        medium: '0 0 .25rem .5rem #ffffff10',
        heavy: '0 0 .38rem .75rem #ffffff15',
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
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active{
        -webkit-background-clip: text;
        -webkit-text-fill-color: #ffffff;
        transition: background-color 5000s ease-in-out 0s;
    }

    a {
        text-decoration: none;
        color: inherit;
        text-decoration: underline .15em transparent;
        transition: text-decoration-color 200ms ease;
    }
    a:hover {text-decoration-color: ${styles.colors.text.default}; color: ${styles.colors.text.default}}

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