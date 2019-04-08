import { applyMiddleware, createStore, compose } from 'redux';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';

import logger from 'redux-logger'

import reducer from './reducer';

const store = createStore(
  reducer,
  undefined,
  compose(
    applyMiddleware(logger),
    offline(offlineConfig)
  )
);

export default store;
