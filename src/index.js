import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";

import AppContextProvider from "./context/AppContext";
import MUIContextProvider from "./context/MUIContext";

function getLibrary(provider) {
  //const library = new ethers.providers.InfuraProvider(4,provider)
  const library = new ethers.providers.Web3Provider(provider)
  return library
}

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <MUIContextProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </MUIContextProvider>
    </Web3ReactProvider>
  </React.StrictMode>
);


