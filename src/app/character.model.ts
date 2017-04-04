export class Character {
  public points: number;
  public health: number;
  public skillPoints: number;
  public healthPotions: number;

  constructor(public name: string, public height: string, public race: string, public charisma: number, public acrobatics: number, public dexterity: number, public strength: number, public luck: number) {
    this.points = 0;
    this.health = 100;
    this.skillPoints = 0;
    this.healthPotions = 3;
  }
}
