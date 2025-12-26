import State from "./State.js";
import Deck from "./Deck.js";

export default class Game {
  constructor(board, hud) {
    this.state = new State();
    this.board = board;
    this.hud = hud;
  }

  start(symbols) {
    this.state.reset();
    this.deck = new Deck(symbols);
    this.board.render(this.deck.cards);
    this.hud.updateMoves(0);
  }

  handleFlip(card) {
    if (this.state.locked || this.state.flipped.includes(card)) return;

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
