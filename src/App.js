import React from 'react';
import './App.css';
import Home from "./pages/home/home"
import About from "./pages/about/about"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>            
            </li>
            <li>
              <Link to="/about">
                About
              </Link>
            </li>
            <li>
              <Link to="/users">
                User
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <User />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>    
  );
}



function User() {
  return (
    <div>
      Exemplo User
      <br />
      <em> Este é o componente user </em>
    </div>
  );
}

export default App;
