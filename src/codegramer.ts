import { Ability } from './abilities';

export interface Skill {
  name: string;
  level: number;
}

export class Codegramer {
  name: string;
  skills: Skill[];
  ability: any;

  constructor(name = '', skills: Skill[] = [], ability: any) {
    this.name = name;
    this.skills = skills;
    this.ability = ability;
  }

  cry() {
    return `Waaaa waaaa! My name is ${this.name} and I cry all the time!`;
  }

  getSkill(name: string): Skill {
    return this.skills.find(skill => skill.name === name) || { name, level: 0 };
  }

  raisePower() {
    this.ability.raisePower();  
  }

  attack() {
    console.log("I'm gonna kill you with my super ability:\n");
    console.log(this.ability.use());
  }
}
