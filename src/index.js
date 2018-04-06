import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router';
import { Provider } from 'react-redux';
import WebFontLoader from 'webfontloader';
import { ConnectedRouter } from 'react-router-redux';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { history } from './middlewares/history/history';
import { InitApp } from "./actions";
import Header from './components/Header';
import Footer from './components/Footer';
import routes from './routes';
import Body from "./components/Body/Body";


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
            routes.map((route, i) => {
              const { component, path, exact } = route;
              return (
                <Route
                  key={i}
                  path={path}
                  component={Body(component)}
                  exact={exact}
                />
              );
            })
          }
        </Switch>
        <Footer/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
