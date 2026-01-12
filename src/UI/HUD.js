export default class HUD {
  constructor(moveEl, timeEl) {
    this.moveEl = moveEl;
    this.timeEl = timeEl;
  }

  updateMoves(count) {
    this.moveEl.textContent = `Moves: ${count}`;
  }

  updateTimer(seconds) {
    const min = String(Math.floor(seconds / 60)).padStart(2, "0");
    const sec = String(seconds % 60).padStart(2, "0");
    this.timeEl.textContent = `Time: ${min}:${sec}`;
  }
}
