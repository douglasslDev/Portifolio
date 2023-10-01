import {createGlobalStyle} from "styled-components";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                                       
import 'primeicons/primeicons.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const GlobalStyle = createGlobalStyle`

  html, body {
    font-family: var(--font-family);
    margin: 0;
    padding:0;
    display: flex;
    background: linear-gradient(180deg, rgba(7,34,71,1) 2%, rgba(17,64,104,1) 25%, rgba(47,148,196,1) 66%);

}  


`;
