import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './pages/Login';

export default function App() {
  return (
    <Router>
      <main className="h-screen">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route>No match</Route>
        </Switch>
      </main>
    </Router>
  );
}
