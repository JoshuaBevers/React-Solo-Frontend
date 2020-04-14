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
      {quests.length === 0
        ? questArray.map((quest, index) => {
            return (
              <ul key={index}>
                <li>{quest.questName}</li>

                <button
                  onClick={() => {
                    {
                      console.log("the quest object is: ", quest);
                    }
                    dispatch({
                      type: "ADD_QUEST",
                      quests: [quest],
                    });
                  }}
                >
                  Accept the Quest
                </button>
              </ul>
            );
          })
        : quests.map((quest, index) => {
            return (
              <ul key={index}>
                <li>{quest.questName}</li>
                <button
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_QUEST",
                      quests: [quest],
                    });
                  }}
                >
                  RemoveQuest{" "}
                </button>
              </ul>
            );
          })}
    </div>
  );
};

export default Quests;
