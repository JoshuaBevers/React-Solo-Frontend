import * as attributes from "../util/attribute-quests/quests";

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
  const health = attributes.health;
  const wisdom = attributes.wisdom;
  const intelligence = attributes.intelligence;
  const relaxed = attributes.relaxed;
  const arrayOfAttributes = [
    strength,
    constitution,
    health,
    wisdom,
    intelligence,
    relaxed,
  ];
  return arrayOfAttributes;
}
