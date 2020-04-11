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
  //strength, int, wis, con, relaxed, idle.
  constructor(
    id: number,
    name: string,
    hp: number,
    str: number,
    int: number,
    wis: number,
    con: number,
    relaxed: number,
    idle: number
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
  }
}
