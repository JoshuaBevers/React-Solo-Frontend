import React, { Component, useReducer } from "react";
import "./profile.css";
import { Player } from "../interfaces/player";
import displayQuests from "../components/displayQuests";

class Profile extends Component {
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
      quests,
    } = this.props.player;
    console.log("the player is: ", this.props.player);
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
        <br />
        Active Quests:
        {quests.length > 0 ? (
          quests.map((quest) => {
            return (
              <ul key={quest.name}>
                <li>{quest}</li>
              </ul>
            );
          })
        ) : (
          <p> You got jack in that ternary, bud.</p>
        )}
      </div>
    );
  }
}

export default Profile;
