import React, { useContext, useState } from "react";
import StateContext from "../context";
import { generateRandomQuest } from "../engine/quest-generation";
import styled from "styled-components";
import Modal from "../components/questModal";

function generateFourQuests() {
  const array = [
    generateRandomQuest(),
    generateRandomQuest(),
    generateRandomQuest(),
    generateRandomQuest(),
  ];
  return array;
}

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background-color: teal;
  color: purple;
`;

const Quests = () => {
  const [player, dispatch] = useContext(StateContext);
  const { name, quests } = player;
  const questArray = generateFourQuests();
  const [state, setState] = useState({ showModal: false });

  const handleClose = () => {
    setState({ showModal: false });
  };

  return (
    <div className="quest-list">
      <h1>Please select a quest, {name}!</h1>
      {quests.length === 0
        ? questArray.map((quest, index) => {
            return (
              <ul key={index}>
                <li>{quest.questName}</li>
                <Button
                  type="button"
                  onClick={() => {
                    setState({ showModal: true });
                    dispatch({
                      type: "ADD_QUEST",
                      quests: [quest],
                    });
                  }}
                  data-testid="toggle"
                >
                  Accept the Quest
                </Button>
              </ul>
            );
          })
        : quests.map((quest, index) => {
            return (
              <ul key={index}>
                <li>{quest.questName}</li>
                <Button
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_QUEST",
                      quests: [quest],
                    });
                  }}
                  data-testid="accept"
                >
                  Complete the Quest
                </Button>
                {!!state.showModal && (
                  <Modal quest={quest} closeModal={handleClose} />
                )}
              </ul>
            );
          })}
    </div>
  );
};

export default Quests;
