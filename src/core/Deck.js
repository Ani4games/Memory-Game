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
//const generateRandom = (size = 4) => {
//   //temporary array
//   let tempArray = [...items];
//   //initializes cardValues array
//   let cardValues = [];
//   //size should be double (4*4 matrix)/2 since pairs of objects would exist
//   size = (size * size) / 2;
//   //Random object selection
//   for (let i = 0; i < size; i++) {
//     const randomIndex = Math.floor(Math.random() * tempArray.length);
//     cardValues.push(tempArray[randomIndex]);
//     //once selected remove the object from temp array
//     tempArray.splice(randomIndex, 1);
//   }
//   return cardValues;
// };