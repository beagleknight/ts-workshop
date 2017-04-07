export class Codegramer {
  constructor(name = '', skills = []) {
    this.name = name;
    this.skills = skills;
  }

  cry() {
    return `Waaaa waaaa! My name is ${this.name} and I cry all the time!`;
  }

  getSkill(name) {
    return this.skills.find(skill => skill.name === name);
  }
}
