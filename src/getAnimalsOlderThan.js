const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal).residents.every((obj) => obj.age >= age);
}
// console.log(getAnimalsOlderThan('giraffes', 4));
module.exports = getAnimalsOlderThan;
