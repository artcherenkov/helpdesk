import React from 'react';
import { Router as BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from '../../pages/main/main';
import IssuePage from '../../pages/issue/issue';
import OrganizationPage from '../../pages/organization/organization';
import browserHistory from '../../browser-history';

const App = () => (
  <BrowserRouter history={browserHistory}>
    <Switch>
      <Route exact path="/">
        <MainPage/>
      </Route>
      <Route exact path="/issue/:id" component={IssuePage}/>
      <Route exact path="/organizations/:id" component={OrganizationPage}/>
    </Switch>
  </BrowserRouter>
);

export default App;
