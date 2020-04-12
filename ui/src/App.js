import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

//components
import Profile from "./components/profile";
import Quests from "./components/quests";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      <Router>
        <nav>
          <div className="nav-wrapper">
            <a className="brand-logo">D&Me</a>

            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to={`/user/quests`}>Quests</Link>
              </li>
              <li>
                <Link to={`/user/profile`}>Profile</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="App-header">
          {<Route path="/:user?/quests" component={Quests}></Route>}
          {<Route path="/:user?/profile" component={Profile}></Route>}
        </div>
      </Router>
    </div>
  );
}

export default App;
