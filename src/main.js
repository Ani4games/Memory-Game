import Game from "./core/Game.js";
import Board from "./UI/Board.js";
import HUD from "./UI/HUD.js";

const symbols = ["🍎", "🍌", "🍇", "🍒", "🍉", "🥝"];

const boardEl = document.getElementById("board");
const movesEl = document.getElementById("moves-count");
const timeEl = document.getElementById("time");

const hud = new HUD(movesEl, timeEl);
const game = new Game(
  new Board(boardEl, card => game.handleFlip(card)),
  hud
);
document.getElementById("start").addEventListener("click", () => {
  game.start(symbols);
});

