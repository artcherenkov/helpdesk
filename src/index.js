import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from './components/app/app';
import rootReducer from './store/reducers/root-reducer';
import {fetchIssues} from './utils/fetch-api';

const store = createStore(
  rootReducer,
  composeWithDevTools()
);

Promise.all([
  fetchIssues(store)
]).then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});

// todo причесать весь код, встроить middleware и axios
// todo не приходят ошибки из бд и вообще с сервера
// todo нет безопасности
