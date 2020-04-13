import React, { useContext } from "react";
import StateContext from "../context";

const Quests = () => {
  const [player, dispatch] = useContext(StateContext);
  const { name, quests } = player;
  return (
    <div className="quest-list">
      <h1>Please select a quest, {name}!</h1>
      <h3>Available Quests:</h3>
      <br />
      Destroying the world.
      <br />
      <button
        onClick={() =>
          dispatch({
            type: "ADD_QUEST",
            quests: ["Destroying the world"],
          })
        }
      >
        Accept quest
      </button>
      <div>
        Current Quests:
        <br />
        {quests}
      </div>
    </div>
  );
};

export default Quests;
