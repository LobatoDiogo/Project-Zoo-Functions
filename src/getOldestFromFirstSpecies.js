const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const employeeID = employees.find((person) => person.id === id);
  // console.log(employeeID);
  const animals = species.find((specie) => specie.id === employeeID.responsibleFor[0]).residents
    .sort((a, b) => b.age - a.age)[0];
  return Object.values(animals);
}
console.log(getOldestFromFirstSpecies('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = getOldestFromFirstSpecies;

// Implemente a função getOldestFromFirstSpecies que deverá encontrar o animal mais velho da espécie gerenciado por uma pessoa colaboradora.

// A função recebe um parâmetro ID referente à pessoa colaboradora e a partir desse ID:

// A função deverá encontrar a pessoa colaboradora que possui o ID passado por parâmetro;

// A função deverá encontrar a primeira espécie de animal que a pessoa colaboradora é responsável;

// A função deverá encontrar o animal mais velho daquela espécie;

// A função deverá retornar um array com as informações do animal mais velho daquela espécie.

// O que será testado:

// Passado o id de uma pessoa colaboradora, a função getOldestFromFirstSpecies deverá encontrar a primeira espécie de animal gerenciado por essa pessoa, e retornar um array com nome, sexo e idade do animal mais velho dessa espécie.
