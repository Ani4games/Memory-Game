import Game from "./core/Game.js";
import Board from "./UI/Board.js";
import HUD from "./UI/HUD.js";

const symbols = ["🍎", "🍌", "🍇", "🍒", "🍉", "🥝"];

const boardEl = document.getElementById("board");
const movesEl = document.getElementById("moves");

const hud = new HUD(movesEl);
const game = new Game(
  new Board(boardEl, card => game.handleFlip(card)),
  hud
);

game.start(symbols);




