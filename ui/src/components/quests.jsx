import React, { useContext } from "react";
import StateContext from "../context";
import { generateRandomQuest } from "../engine/quest-generation";

function generateFourQuests() {
  const array = [
    generateRandomQuest(),
    generateRandomQuest(),
    generateRandomQuest(),
    generateRandomQuest(),
  ];
  return array;
}

const Quests = () => {
  const [player, dispatch] = useContext(StateContext);
  const { name, quests } = player;
  const questArray = generateFourQuests();

  return (
    <div className="quest-list">
      <h1>Please select a quest, {name}!</h1>
      <h3>Available Quests:</h3>
      questlist is:
      {questArray.map((quest, index) => {
        return (
          <ul key={index}>
            <li>{quest.questName}</li>
            <button
              onClick={() =>
                dispatch({
                  type: "ADD_QUEST",
                  quests: [`${quest.questName}`],
                })
              }
            >
              Accept quest
            </button>
          </ul>
        );
      })}
      <div>
        Current Quests:
        <br />
        {quests}
      </div>
    </div>
  );
};

export default Quests;
