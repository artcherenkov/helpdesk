import React from 'react';
import {Router as BrowserRouter, Switch, Route} from "react-router-dom";

import MainPage from '../../pages/main/main';
import RequestPage from '../../pages/request/request';
import browserHistory from "../../browser-history";

export default function App() {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/request/:id" component={RequestPage}/>
      </Switch>
    </BrowserRouter>
  );
};
