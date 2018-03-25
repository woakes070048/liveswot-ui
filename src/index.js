import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import WebFontLoader from 'webfontloader';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { history } from './middlewares/history/history';
import { InitApp } from "./actions";
import routes from "./routes";

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

store.dispatch(InitApp());

ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <div>
        {routes.map((route, i) => (
          <Route key={i} {...route}/>
        ))}
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
