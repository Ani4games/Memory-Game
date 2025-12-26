export default class Board {
  constructor(container, onCardClick) {
    this.container = container;
    this.onCardClick = onCardClick;
  }

  render(cards) {
    this.container.innerHTML = "";
    cards.forEach(card => {
      const el = document.createElement("div");
      el.className = "card";
      el.dataset.id = card.id;
      el.textContent = "❓";

      el.addEventListener("click", () => this.onCardClick(card));

      this.container.appendChild(el);
    });
  }

  flip(card, symbol) {
    const el = this.container.querySelector(`[data-id="${card.id}"]`);
    el.textContent = symbol;
    el.classList.add("flipped");
  }

  hide(card) {
    const el = this.container.querySelector(`[data-id="${card.id}"]`);
    el.textContent = "❓";
    el.classList.remove("flipped");
  }

  lock(card) {
    const el = this.container.querySelector(`[data-id="${card.id}"]`);
    el.classList.add("matched");
  }
}
