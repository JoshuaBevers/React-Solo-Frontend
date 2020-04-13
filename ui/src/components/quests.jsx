import React, { Component } from "react";
import { Player } from "../interfaces/player";
import * as JSON from "../util/attribute-quests/strength.json";

class Quests extends Component {
  state = {
    player: { quests: [] },
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
