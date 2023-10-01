
import type {AppProps} from "next/app";
import { PrimeReactProvider } from 'primereact/api';

import {getInitialLocale} from "../translations/getInitialLocale";

import {GlobalStyle} from "../styles/globals";

const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <PrimeReactProvider>
      <Component {...pageProps} />
      <GlobalStyle />
      </PrimeReactProvider>
  )
};

export default MyApp;
