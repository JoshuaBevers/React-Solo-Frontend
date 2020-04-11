export class Player {
  id: number;
  name: string;
  experience: number;
  level: number;
  hp: number;

  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.level = 1;
    this.experience = 0;
  }
}
