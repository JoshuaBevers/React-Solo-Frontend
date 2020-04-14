import React, { useReducer } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Player } from "./interfaces/player";
import { StateProvider } from "./context";
import { addQuest } from "./context/reducers";

//components
import Profile from "./components/profile";
import Quests from "./components/quests";
import Home from "./components/home";

function App() {
  const LoadedPlayer = new Player(1, "Joshua", 1, 1, 1, 1, 1, 1, 10, []);

  const initialState = {
    player: LoadedPlayer,
  };

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
            <a href="/" className="brand-logo">
              D&Me
            </a>

            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to={`/quests`}>Quests</Link>
              </li>
              <li>
                <Link to={`/profile`}>Profile</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="App-header">
          <p>hello</p>
          <StateProvider value={useReducer(addQuest, initialState.player)}>
            {<Route exact path="/" component={Home} />}
            {<Route path="/quests" component={Quests} />}
            {<Route path="/profile" component={Profile} />}
          </StateProvider>
        </div>
      </Router>
    </div>
  );
}

export default App;
