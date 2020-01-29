import React from 'react';
import { Route, Link, Switch, NavLink } from 'react-router-dom';

import './App.css';

import Login from './components/login.js';
import Home from './components/home.js';
import FriendsDisplay from './components/friendsdisplay.js';
import PrivateRoute from './components/PrivateRoute.js';

function App() {
  return (
    <div className="App">
      <div>
        <nav className="nav">
          <NavLink to="/api/friends"> My Friends (Protected) </NavLink>
          <NavLink to="/api/login"> Login </NavLink>
        </nav>
        <Home />
      </div>
      <section className="Routes">
      <Switch>
        <PrivateRoute exact path="/api/friends" component={FriendsDisplay} />
        <Route exact path="/api/login" component={Login} />
        <Route path="/" component={Login} />
      </Switch>
      </section>

    </div>

  );
}

export default App;
