import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {MetaMaskProvider} from '@metamask/sdk-react';

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MetaMaskProvider debug={false} sdkOptions={{dappMetadata: 'EduLink',url: window.location.href}}>
    <App />
  </MetaMaskProvider>
);
