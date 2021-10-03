import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/style.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Preferences from './components/Preferences';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Nav />
        <main>
          <div className="wrapper">
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/dashboard" exact>
                <Dashboard />
              </Route>
              <Route path="/preferences" exact>
                <Preferences />
              </Route>
            </Switch>
          </div>
        </main>
        <footer className="footer">
          <div className="wrapper">
            <p className="footer__text">Ferdinand 2021</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
