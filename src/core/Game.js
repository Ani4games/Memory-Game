import State from "./State.js";
import Deck from "./Deck.js";

import Time from "../systems/Timer.js";
export default class Game {
  constructor(board, hud) {
    this.state = new State();
    this.board = board;
    this.hud = hud;
    this.timer = new Time(time => this.hud.updateTimer(time));
    this.hasStarted = false;
  }

  start(symbols) {
    this.state.reset();
    this.hasStarted = false;
    this.timer.reset();
    this.deck = new Deck(symbols);
    this.board.render(this.deck.cards);
    this.hud.updateMoves(0);
  }

  handleFlip(card) {
    if (this.state.locked || this.state.flipped.includes(card)) return;
    if (!this.hasStarted) {
      this.timer.start();
      this.hasStarted = true;
    }
    this.board.flip(card, card.value);
    this.state.flipped.push(card);

    if (this.state.flipped.length === 2) {
      this.state.moves++;
      this.hud.updateMoves(this.state.moves);
      this.checkMatch();
    }
  }

  checkMatch() {
    const [a, b] = this.state.flipped;
    this.state.locked = true;
    if (this.state.matched.size === this.deck.cards.length / 2) {
      this.timer.stop();
    }

    setTimeout(() => {
      if (a.value === b.value) {
        this.board.lock(a);
        this.board.lock(b);
        this.state.matched.add(a.value);
      } else {
        this.board.hide(a);
        this.board.hide(b);
      }

      this.state.flipped = [];
      this.state.locked = false;
    }, 800);
  }
}
