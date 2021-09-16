import React from 'react';
import ReactDOM from 'react-dom';

import App from './ui/components/App';

import reportWebVitals from './bootstrap/reportWebVitals';

import * as serviceWorkerRegistration from './app/services/serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();

reportWebVitals();
