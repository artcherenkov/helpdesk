import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from './components/app/app';
import rootReducer from './store/reducers/root-reducer';
import {loadIssues} from './store/action';
import {generateIssues} from './mock/issue';

const mockIssues = generateIssues(30);

const store = createStore(
  rootReducer,
  composeWithDevTools()
);

Promise.all([
  store.dispatch(loadIssues(mockIssues))
]).then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});
