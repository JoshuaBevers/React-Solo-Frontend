import React, { Component } from "react";
import "../component_css/profile.css";
import { Player } from "../interfaces/player";
import displayQuests from "../components/displayQuests";

class Profile extends Component {
  state = {
    player: {},
  };

  displayQuests = async () => {
    const player = await this.getPlayer();
    const { quests } = player;
    console.log(quests);
    quests.map((quest) => {
      console.log(quest);
      return <>{quest}</>;
    });
  };

  getPlayer = async () => {
    const player = this.state.player;
    return player;
  };

  makePlayer = () => {
    const LoadedPlayer = new Player(1, "Joshua", 1, 1, 1, 1, 1, 1, 10, [
      "hello",
      "run",
    ]); // this can connect to backend to grab a user easily later. Given time available.
    this.setState({ player: LoadedPlayer });
  };

  async componentDidMount() {
    await this.makePlayer();
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
      quests,
    } = this.state.player;
    console.log(quests);
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
        <br></br>
        Active Quests:
        {quests.length > 0 ? (
          quests.map((quest) => {
            // Map function to return a child component for each user in the array.
            // We will use the unique number that comes with the JSON user object.
            return (
              <ul key={quest.name}>
                <li>
                  <displayQuests quest={quest} />
                </li>
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
