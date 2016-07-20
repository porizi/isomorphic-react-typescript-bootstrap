import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';
import routes from './routes/index';

// Render the application
ReactDOM.render(
  <Router history={browserHistory}>
    { routes }
  </Router>,
  document.getElementById('root')
);
