import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { reducer as photosReducer } from '../ducks/photos';
import { reducer as albumsReducer } from '../ducks/albums';

const rootReducer = combineReducers({
    photos: photosReducer,
    albums: albumsReducer,
});

const asyncFunctionMiddleware = storeAPI => next => action => {
    if (typeof action === 'function') {
      return action(storeAPI.dispatch, storeAPI.getState)
    }
  
    return next(action)
};

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(asyncFunctionMiddleware),
);

const store = createStore(rootReducer, enhancer);

export default store;
