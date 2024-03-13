import { createGlobalStyle } from 'styled-components';

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
  

    /* border */

    /* */
    --fs-xxs: 1.2rem;
    --fs-xs: 1.3rem;
    --fs-md: 1.6rem;
    --fs-lg: 1.8rem;
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
    /* font-family: "Fira Code", monospace; */
    font-family: "Inter", sans-serif;
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
  `
  ;

export default GlobalStyles;
