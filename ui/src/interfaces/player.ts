export class Player {
  id: number;
  name: string;
  experience: number;
  level: number;
  hp: number;
  str: number;
  int: number;
  wis: number;
  con: number;
  relaxed: number;
  idle: number;
  quests: Object;

  constructor(
    id: number,
    name: string,
    hp: number,
    str: number,
    int: number,
    wis: number,
    con: number,
    relaxed: number,
    idle: number,
    quests: Object
  ) {
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
