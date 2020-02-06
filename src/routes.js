import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main  from './pages/Main';
import CalcularNota from './pages/CalcularNota';
import EmBreve from './pages/EmBreve';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/calcular-notas" component={CalcularNota} />
      <Route path="/embreve" component={EmBreve} />
    </Switch>
  </BrowserRouter>
);

export default Routes;