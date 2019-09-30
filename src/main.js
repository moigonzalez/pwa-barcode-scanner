import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

import './global.css';
import './skeletons.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}
