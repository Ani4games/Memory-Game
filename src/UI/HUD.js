export default class HUD {
  constructor(moveEl) {
    this.moveEl = moveEl;
  }

  updateMoves(count) {
    this.moveEl.textContent = `Moves: ${count}`;
  }
}
