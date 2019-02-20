import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './redux/configureStore';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

if (process.env.NODE_ENV === "development") {
  require('react-hot-loader/patch'); // eslint-disable-line
  require('webpack-hot-middleware/client'); // eslint-disable-line
}

const store = configureStore();

const render = Component => ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppContainer>
        <Component store={store} history={history} />
      </AppContainer>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

render(App);

if (module.hot) {
  module.hot.accept('./App', () => render(App));
}
