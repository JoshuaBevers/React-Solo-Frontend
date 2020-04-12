import React, { Component } from "react";
import "../component_css/profile.css";
import { Player } from "../interfaces/player";

class Profile extends Component {
  state = {
    player: {},
  };

  getPlayer = () => {
    const LoadedPlayer = new Player(1, "Joshua", 1, 1, 1, 1, 1, 1, 10); // this can connect to backend to grab a user easily later. Given time available.
    this.setState({ player: LoadedPlayer });
  };

  componentDidMount() {
    this.getPlayer();
  }

  render() {
    const {
      name,
      hp,
      str,
      int,
      con,
      idle,
      relaxed,
      wis,
      level,
    } = this.state.player;
    return (
      <div>
        Name: {name}
        <br />
        <br />
        level: {level}
        <br />
        Health: {hp}
        <br />
        Strength: {str}
        <br />
        Intelect: {int}
        <br />
        Constitution: {con}
        <br />
        Wisdom: {wis}
        <br />
        Idleness: {idle}
        <br />
        Relaxed: {relaxed}
      </div>
    );
  }
}

export default Profile;
