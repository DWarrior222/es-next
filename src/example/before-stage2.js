const box = {
  weight: 2,
  getWeight() {
    return this.weight;
  },
};

const { getWeight } = box;

console.log(box.getWeight()); // prints '2'

const bigBox = { weight: 10 };
console.log(bigBox::getWeight()); // prints '10'

console.log(Math.seededPRNG, 'Math.seededPRNG');

console.log(Promise.try, 'Promise.try');