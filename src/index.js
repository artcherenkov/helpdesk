import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from './components/app/app';
import rootReducer from './store/reducers/root-reducer';
import {loadRequests} from './store/action';
import {generateRequests} from './mock/request';

const mockRequests = generateRequests(30);

const store = createStore(
  rootReducer,
  composeWithDevTools()
);

Promise.all([
  store.dispatch(loadRequests(mockRequests))
]).then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});
