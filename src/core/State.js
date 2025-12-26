export default class State {
  constructor() {
    this.flipped = [];
    this.matched = new Set();
    this.moves = 0;
    this.locked = false;
  }

  reset() {
    this.flipped = [];
    this.matched.clear();
    this.moves = 0;
    this.locked = false;
  }
}
