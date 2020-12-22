import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import MainPage from '../../pages/main/main';
import IssuePage from '../../pages/issue/issue';
import SunEditorComponent from '../sun-editor/sun-editor';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/issue/:id" component={IssuePage} />
        <Route exact path="/suneditor">
          <SunEditorComponent />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
