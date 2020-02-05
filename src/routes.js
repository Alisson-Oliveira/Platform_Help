import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main  from './pages/Main';
import SemPeso from './pages/SemPeso';
import EmBreve from './pages/EmBreve';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/sempeso" component={SemPeso} />
      <Route path="/embreve" component={EmBreve} />
    </Switch>
  </BrowserRouter>
);

export default Routes;