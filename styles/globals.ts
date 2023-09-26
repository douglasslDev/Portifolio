import {createGlobalStyle} from "styled-components";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                                       
import 'primeicons/primeicons.css';

export const GlobalStyle = createGlobalStyle`

  html,

  body {
    font-family: var(--font-family);
}  

  a {
    color: inherit;
    text-decoration: none;
    color: blue;
  }

  * {
    box-sizing: border-box;
  }
`;
