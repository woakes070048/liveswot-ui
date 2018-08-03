import React from 'react';
import ReactDOM from 'react-dom';
import {Switch} from 'react-router';
import {Provider} from 'react-redux';
import WebFontLoader from 'webfontloader';
import {ConnectedRouter} from 'react-router-redux';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import {history} from './store/middlewares/history/history';
import {InitApp} from './store/actions';
import Header from './components/Header';
import Footer from './components/Footer';
import routes from './routes';
import {mapPathsToRoutes} from './routes/routes';


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
        <Header/>
        <Switch>
          {
            routes.map(mapPathsToRoutes)
          }
        </Switch>
        <Footer/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
