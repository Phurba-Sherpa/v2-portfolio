import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

:root {
    /* Navy */
    --color-brand-200: #233554;
    --color-brand-300: #112240;
    --color-brand-400: #0a192f;
   
    /* slate */
    --color-slate-200: #ccd6f6;
    --color-slate-300: #a8b2d1;
    --color-slate-400: #8892b0;

    /* green */
    --color-green: #64ffda;
    --color-white: #e6f1ff;

    /* width */
    --navy-shadow: rgba(2, 12, 27, 0.7);

    /* border */
    --rounded-sm: 6px;
    --rounded-sm: 9px;
    --rounded-md: 12px;
    
    /* */
    --fs-xxs: 1.2rem;
    --fs-xs: 1.3rem;
    --fs-sm: 1.4rem;
    --fs-md: 1.6rem;
    --fs-lg: 1.8rem;
    --fs-xl: 2rem;
    --fs-xxl: 2.2rem;
    --fs-head: 3.2rem;

    /* family */
    --ff-sans: "Inter", sans-serif;
    --ff-mono: "Fira Code", monospace;
}
  
////////////////////
/* BASIC RESET */
////////////////////
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  

  //////////////////////
  /* GENERAL STYLE */
  //////////////////////
  html {
    font-size: 62.5%;
  }
  
  body {
    background-color: var(--color-brand-400);
    color: var(--color-slate-400);
    font-family: var(--ff-sans);
    font-size: var(--fs-lg);
    line-height: 1.3;

  
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.5rem;
  }

  img {
    max-width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.1;
    font-weight: 600;
    color: var(--color-slate-200);
  }

  p {
    max-width: 60ch;
    font-size: var(--fs-md);
    margin-bottom: 1em;
  }
  `
export default GlobalStyles
