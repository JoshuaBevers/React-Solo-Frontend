import * as attributes from "../util/attribute-quests/strength";

export function generateRandomQuest() {
  const randomQuest = pickRandomQuest();
  return randomQuest;
}

function pickRandomQuest() {
  const randomAttribute = getRandomQuestAttribute();
  const randomNumber = Math.floor(Math.random() * randomAttribute.length);
  return randomAttribute[randomNumber];
}

function getRandomQuestAttribute() {
  const arrayOfAttributes = createAttributeArray();
  const randomNumber = Math.floor(Math.random() * arrayOfAttributes.length);
  return arrayOfAttributes[randomNumber];
}

function createAttributeArray() {
  const strength = attributes.strength;
  const constitution = attributes.constitution;
  const arrayOfAttributes = [strength, constitution];
  return arrayOfAttributes;
}
