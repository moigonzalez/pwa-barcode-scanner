import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './routes/App';

import css from './global.css';
import skeletons from './skeletons.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}
