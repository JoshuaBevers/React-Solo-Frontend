export class Player {
  id;
  name;
  experience;
  level;
  hp;
  str;
  int;
  wis;
  con;
  relaxed;
  idle;
  quests;

  constructor(id, name, hp, str, int, wis, con, relaxed, idle, quests) {
    this.id = id;
    this.name = name;
    this.level = 1;
    this.experience = 0;
    this.hp = hp;
    this.str = str;
    this.int = int;
    this.wis = wis;
    this.con = con;
    this.relaxed = relaxed;
    this.idle = idle;
    this.quests = quests;
  }
}
