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
        case "health":
          const oldHealth = state;
          const { hp } = oldHealth;
          const newHealth = hp + 1;
          return { ...state, quests: [], hp: newHealth };
        case "intelligence":
          const oldInt = state;
          const { int } = oldInt;
          const newInt = int + 1;
          return { ...state, quests: [], int: newInt };
        case "wisdom":
          const oldWis = state;
          const { wis } = oldWis;
          const newWis = wis + 1;
          return { ...state, quests: [], wis: newWis };
        case "relaxed":
          const oldRelaxed = state;
          const { relaxed } = oldRelaxed;
          const newRelaxed = relaxed + 1;
          return { ...state, quests: [], relaxed: newRelaxed };
        default:
          return state;
      }
    default:
      return state;
  }
};
