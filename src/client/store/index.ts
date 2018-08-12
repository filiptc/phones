import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { composeEnhancers } from './utils';
import rootReducer from './rootReducer';
import rootEpic from './rootEpic';

export const epicMiddleware = createEpicMiddleware();

export default function configureStore(initialState?: object) {
  const middlewares = [epicMiddleware];
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, initialState!, enhancer);
  epicMiddleware.run(rootEpic);
  return store;
}
