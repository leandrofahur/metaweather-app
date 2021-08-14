import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export default createGlobalStyle`
  :root {
    --black: #000000;    
    --white: #FFFFFF; 
    --light-blue: #3A21DB;    
    --dark-purple: #10093E;
;

  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;     
  }
  
  html, body, #root {  
    max-height: 100vh;
    max-width: 100%;
    margin: 0 auto;
    width: 100vw;
    height: 100vh;        
  }
  
  @media(max-width:1080px) {
    html { 
      font-size: 93.75%
    }
  }
  
  @media(max-width:720px) {
    html { 
      font-size: 87.5%
    }
  }
  
  body { 
    background-image: radial-gradient(var(--light-blue), var(--dark-purple));
    color: var(--white);
    animation: radialColorAnimation 5s infinite alternate linear;
  }

  @keyframes radialColorAnimation {
    from { /* radial-gradient(farthest-corner at top right, ..) */
    background-position:left top;
    background-size:200% 100%;  
    }
    49.9% {
      background-position:left top;  
    }
    50% { /* radial-gradient(farthest-corner at top center, ..) */
      background-size:100% 100%;
    }
    50.1% {
      background-position:right top; 
    }
    to { /* radial-gradient(farthest-corner at top left, ..) */
      background-position:right top;
      background-size:200% 100%;
    }
  }

  body, input, textarea, select, button {
    font: 400 1rem Roboto, sans-serif;
  }  
`;
