import React, { useContext } from "react";
import StateContext from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
  background-color: black;
  color: red;
`;

const Profile = () => {
  const [player, dispatch] = useContext(StateContext);
  const { name, hp, str, int, con, relaxed, wis, level, quests } = player;
  console.log(
    "Thols: Checking our stats, eh? Good choice. I like the relaxed one."
  );
  return (
    <div className="character">
      Name: {name}
      <br />
      <br />
      level: {level}
      <br />
      Health: {hp}
      <br />
      Strength: {str}
      <br />
      Intellect: {int}
      <br />
      Constitution: {con}
      <br />
      Wisdom: {wis}
      <br />
      Relaxed: {relaxed}
      <br />
      Active Quests:
      {quests.length > 0 ? (
        quests.map((quest, index) => {
          return (
            <ul key={index}>
              <li>
                {quest.questName}
                <br />
              </li>
              <Button
                onClick={() => {
                  dispatch({
                    type: "REMOVE_QUEST",
                    quests: [quest],
                  });
                }}
              >
                Complete the Quest
              </Button>
            </ul>
          );
        })
      ) : (
        <p>
          You don't have a quest! <Link to={`/quests`}>Go get one!</Link>
        </p>
      )}
    </div>
  );
};

export default Profile;
