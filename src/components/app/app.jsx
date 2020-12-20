import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import MainPage from '../../pages/main/main';
import RequestPage from '../../pages/request/request';
import SunEditorComponent from '../sun-editor/sun-editor';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/request/:id" component={RequestPage} />
        <Route exact path="/suneditor">
          <SunEditorComponent />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
