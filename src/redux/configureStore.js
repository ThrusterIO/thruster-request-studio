import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';
import createRootReducer from './rootReducer';

const logger = createLogger();

export const history = createBrowserHistory();

let reduxDevTools = (f => f);
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(
        thunk,
        logger,
        routerMiddleware(history), // for dispatching history actions
      ),
      reduxDevTools,
    ),
  );

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./rootReducer', () => {
        store.replaceReducer(createRootReducer(history));
      });
    }
  }

  return store;
};
