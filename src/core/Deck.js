export default class Deck {
  constructor(symbols) {
    this.cards = this.shuffle([...symbols, ...symbols]);
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.map((value, index) => ({
      id: index,
      value,
      matched: false
    }));
  }
}
