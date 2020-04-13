export const addQuest = (state, player) => {
  const { quests } = player;
  switch (player.type) {
    case "ADD_QUEST":
      return { ...state, quests };
    default:
      return state;
  }
};
