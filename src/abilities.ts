const raisePower = (ability: any) => {
  if (typeof (ability) === 'string') {
    return `Super '${ability}' no-jutsu!`;
  } else if (ability.power) {
    return {
      ...ability,
      power: ability.power + 1
    };
  }

  return ability;
};

export class Ability {
  ability: any;

  constructor(ability: any) {
    this.ability = ability;
  }

  raisePower() {
    this.ability = raisePower(this.ability);
  }

  use() {
    if (typeof (this.ability) === 'string') {
      return this.ability;
    } else if (this.ability.power) {
      return `${this.ability.name}${this.ability.power} using ${this.ability.mp} mp`;
    }
    return 'WTF?';
  }
}

const cry = new Ability({
  name: 'Cry',
  mp: 10,
  power: 5
});

const mad = new Ability("I'm mad!!!");

const whatev =  new Ability({
  foo: 'bar'
});

export const abilities = {
  cry,
  mad,
  whatev
};

