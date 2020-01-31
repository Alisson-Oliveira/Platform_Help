import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main  from './pages/Main';
import Media from './pages/Media';
import Locate from './pages/Locate';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/media" component={Media} />
      <Route exact path="/locate" component={Locate} />
    </Switch>
  </BrowserRouter>
);

export default Routes;