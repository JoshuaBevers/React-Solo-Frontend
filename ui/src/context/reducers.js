import { questComplete } from "../engine/quest-completion";

export const addQuest = (state, player) => {
  const { quests } = player;

  switch (player.type) {
    case "ADD_QUEST":
      console.log("Quests in add quest is: ", quests);
      return { ...state, quests };
    case "REMOVE_QUEST":
      questComplete(quests);
      return { ...state, quests: [] };
    default:
      return state;
  }
};
