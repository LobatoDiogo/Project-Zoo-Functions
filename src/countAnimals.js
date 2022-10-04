const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (animal === undefined) {
    const animalsList = species.filter((e) => e).map((sp) => ({ [sp.name]: sp.residents.length }));
    return Object.assign(...animalsList);
  }
  // species.forEach((e) => {
  //   if (animal.specie === e.name) {
  //   e.residents.forEach((genre) => {
  //     genre.sex
  //   })};
  // });
  // return (species.find((e) => e.name === animal)).residents.length;
}
console.log(countAnimals('penguins'));
module.exports = countAnimals;

// //Retorne a quantidade de animais residentes no zoológico da espécie passada por parâmetro. Por exemplo:

// ao receber o argumento { specie: 'penguins' }, retorna apenas a quantidade (número) de pinguins que residem no zoológico;

// ao passar o argumento { specie: 'giraffes', sex: 'female' }, retorna apenas a quantidade (número) de girafas fêmeas que residem no zoológico.

// O que será testado:

// A função countAnimals, caso não receba nenhum parâmetro, deve retornar todas as espécies e a quantidade de residentes de cada uma;

// A função countAnimals, caso receba como parâmetro um objeto com a chave specie, deve retornar a quantidade de animais daquela espécie;

// A função countAnimals, caso receba como parâmetro um objeto com as chaves specie e sex, deve retornar a quantidade de animais daquela espécie, no sexo selecionado.
