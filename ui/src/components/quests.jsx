import React, { Component } from "react";
import "../component_css/profile.css";
import { Player } from "../interfaces/player";

class Quests extends Component {
  state = {
    player: {},
  };

  getPlayer = () => {
    //grabs player
    console.log("The player has been grabbed.");
  };

  componentDidMount() {
    this.getPlayer();
  }

  render() {
    return (
      <div className="quest-list">
        <h1>Please select a quest!</h1>
        <br></br>
        <h2>Strength quests</h2>
        <ul>
          <li>button goes here. Need to figure out how to craft it.</li>
          <li>Button goes here. Need to figure out how to craft it.</li>
        </ul>
        <h2>Inteligence Quest</h2>
        <ul>
          <li>button goes here. Need to figure out how to craft it.</li>
          <li>Button goes here. Need to figure out how to craft it.</li>
        </ul>
        <h2>Constitution Quest</h2>
        <ul>
          <li>button goes here. Need to figure out how to craft it.</li>
          <li>Button goes here. Need to figure out how to craft it.</li>
        </ul>
      </div>
    );
  }
}

export default Quests;
