import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import {profileReducer} from './reducers/profile';
import {logger} from 'redux-logger';

const middleware = __DEV__ ? [thunk, logger] : [thunk];
const rootReducer = combineReducers({profileReducer});
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
