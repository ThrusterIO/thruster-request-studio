import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { mainReducer } from "./modules/main";

export default (history) => combineReducers({
  router: connectRouter(history),
  main: mainReducer,
});
