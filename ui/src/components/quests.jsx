import React, { useContext } from "react";
import StateContext from "../context";
import * as JSON from "../util/attribute-quests/strength.json";

const Quests = () => {
  const [player, dispatch] = useContext(StateContext);
  console.log(player);
  const { name, quests } = player;
  return (
    <div className="quest-list">
      <h1>Please select a quest, {name}!</h1>
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
      Current quests: {quests}
    </div>
  );
};

export default Quests;
