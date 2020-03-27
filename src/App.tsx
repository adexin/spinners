import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Page from './Page';
import * as angularProps from './props/angular';
import * as reactProps from './props/react';

const App = () => (
  <Router>
    <Switch>
      <Route path="/angular">
        <Page tabIndex={1} {...angularProps} />
      </Route>
      <Route path="/">
        <Page tabIndex={0} {...reactProps} />
      </Route>
    </Switch>
  </Router>
);

export default App;
