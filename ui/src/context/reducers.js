export const addQuest = (state, player) => {
  let { quests } = player;
  switch (player.type) {
    case "ADD_QUEST":
      return { ...state, quests };
    case "REMOVE_QUEST":
      //quest complete rewards
      switch (quests[0].type) {
        case "strength":
          const oldStr = state;
          const { str } = oldStr;
          const newStr = str + 1;
          return { ...state, quests: [], str: newStr };
        case "constitution":
          const oldCon = state;
          const { con } = oldCon;
          const newCon = con + 1;
          return { ...state, quests: [], con: newCon };
        default:
          return state;
      }
    default:
      return state;
  }
};
