import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Search from './containers/Search';
import Stats from './containers/Stats';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Search} />
    <Route path="/stats" component={Stats} />
  </Switch>
);

export default Routes;
