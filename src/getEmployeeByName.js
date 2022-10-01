const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName = null) {
  if (employeeName === null) {
    return {};
  }
  return employees.find((emp) => emp.firstName === employeeName || emp.lastName === employeeName);
}
console.log(getEmployeeByName('Nelson'));
module.exports = getEmployeeByName;

// Retorne um objeto vazio caso a função não receba parâmetros;

// Retorne as informações da pessoa colaboradora caso o parâmetro seja igual ao nome ou igual ao último nome no seguinte formato:

// A função deve retornar um objeto vazio caso não receba parâmetros;

// A função deve retornar o objeto da pessoa colaboradora caso receba o seu primeiro nome como parâmetro;

// A função deve retornar o objeto da pessoa colaboradora caso receba o seu último nome como parâmetro.

// const animalSpecie = data.species.find((specie) => specie.name === animal);
