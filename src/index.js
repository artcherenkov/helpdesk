import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/app/app';
import rootReducer from './store/reducers/root-reducer';
import { fetchIssues, fetchOrganizations } from './store/api-action';
import { createAPI } from './services/api';
import { toggleLoading } from './store/action';

const api = createAPI();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

Promise.all([
  store.dispatch(fetchIssues()),
  store.dispatch(fetchOrganizations()),
])
  .then(() => store.dispatch(toggleLoading()));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById(`root`),
);

// todo нет безопасности
