import React, { useContext } from "react";
import StateContext from "../context";

const Profile = () => {
  const [player] = useContext(StateContext);
  const { name, hp, str, int, con, idle, relaxed, wis, level, quests } = player;
  return (
    <div className="character">
      <h2>HelloTest!</h2>
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
        quests.map((quest, index) => {
          return (
            <ul key={index}>
              <li>{quest.questName}</li>
            </ul>
          );
        })
      ) : (
        <p> You have no quests! Go get some!</p>
      )}
    </div>
  );
};

export default Profile;
