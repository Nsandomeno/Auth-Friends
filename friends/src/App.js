import React from 'react';
import { Route, Link, Switch, NavLink } from 'react-router-dom';

import './App.css';

import Login from './components/login.js';
import Home from './components/home.js';

function App() {
  return (
    <div className="App">
      <div>
        <Home />
      </div>
      <section className="Routes">
      <Switch>
      <Route component={Login} />
      </Switch>
      </section>

    </div>

  );
}

export default App;
