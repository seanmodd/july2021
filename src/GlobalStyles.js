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

  .App {
  text-align: center;
  background-color: black;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}



`;
