import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle` 
 :root {
    --maxWidth: 1280px;
    --white: #fff;
    --lightBlue: #4174ff;
    --lightRed: #ff4190;
    --lightGrey: #eee;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  }
  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    
    h1 {
      font-size: 3rem;
      font-weight: 800;
      color: var(--lightBlue);
    }
    h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--lightRed);
    }
    p {
      font-size: 1rem;
      color: var(--lightRed);
    }
  }


`;
