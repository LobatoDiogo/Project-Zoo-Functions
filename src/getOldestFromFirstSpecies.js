const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const employeeID = employees.find((person) => person.id === id);
  // console.log(employeeID);
  const animals = species.find((specie) => specie.id === employeeID.responsibleFor[0]).residents
    .sort((a, b) => b.age - a.age)[0];
  return Object.values(animals);
}
// console.log(getOldestFromFirstSpecies('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = getOldestFromFirstSpecies;
