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
      <div>
        <p> This is the quests tab!</p>
      </div>
    );
  }
}

export default Quests;
