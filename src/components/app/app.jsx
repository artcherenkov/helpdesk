import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from '../../pages/main/main';
import IssuePage from '../../pages/issue/issue';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <MainPage/>
      </Route>
      <Route exact path="/issue/:id" component={IssuePage}/>
    </Switch>
  </BrowserRouter>
);

export default App;
