export const addQuest = (state, player) => {
  const { quests } = player;
  console.log(player);
  switch (player.type) {
    case "ADD_QUEST":
      return { ...state, quests };
    default:
      return state;
  }
};
