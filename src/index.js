import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from 'App';
import { isDebugging } from './utils/common.utils';
const container = document.getElementById('root');
const root = createRoot(container);
// isDebugging(true)
root.render(
  <React.StrictMode>
     <App/>
  </React.StrictMode>
);

reportWebVitals();
