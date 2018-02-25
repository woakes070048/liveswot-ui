import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import WebFontLoader from 'webfontloader';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
