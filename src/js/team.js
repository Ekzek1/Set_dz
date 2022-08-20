export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(type) {
    if (this.members.has(type)) throw new Error('this character is already in the team');
    this.members.add(type);
  }

  addAll(...type) {
    type.forEach((item) => {
      this.members.add(item);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
