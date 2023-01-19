import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalSyle from 'styles/global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalSyle/>
    <App />
  </React.StrictMode>
);
