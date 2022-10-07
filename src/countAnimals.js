const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (animal === undefined) {
    const animalsList = species.filter((e) => e).map((sp) => ({ [sp.name]: sp.residents.length }));
    return Object.assign(...animalsList);
  }
  const specieName = species.find((spec) => spec.name === animal.specie);

  if (Object.keys(animal).length !== 1) {
    return specieName.residents.filter((e) => e.sex === animal.sex).length;
  }
  return specieName.residents.length;
}

// console.log(countAnimals({ specie: 'penguins', sex: 'male' }));

module.exports = countAnimals;
