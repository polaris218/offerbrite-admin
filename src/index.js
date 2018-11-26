import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import * as serviceWorker from './serviceWorker';

import App from 'components/App';
import reducers from 'reducers';
import 'index.scss';

const middleware = [reduxThunk, logger];

// TODO: turn off logger in production mode

const store = createStore(reducers, {}, applyMiddleware(...middleware));

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
