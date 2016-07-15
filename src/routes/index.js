import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App } from '../containers/App';
import { Home } from '../containers/Home';

const routes = (
  <Route component={App}>
    <Route path="/" component={Home} />
  </Route>
);

export default routes;
