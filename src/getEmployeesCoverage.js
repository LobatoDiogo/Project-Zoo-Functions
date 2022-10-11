const data = require('../data/zoo_data');

const { employees, species } = data;

const employeesObj = (obj) => {
  const listAnimal = obj.responsibleFor
    .map((specId) => species.find((specie) => specie.id === specId).name);
  return {
    id: obj.id,
    fullName: `${obj.firstName} ${obj.lastName}`,
    species: [...listAnimal],
    locations: listAnimal
      .map((currSpecie) => species.find((specie) => specie.name === currSpecie).location),
  };
};

function allEmployees() {
  return employees.reduce((acc, curr) => {
    const array = [];
    array.push(employeesObj(curr));
    return [...acc, ...array];
  }, []);
}

function setEmployee(obj) {
  return employees.find((e) => [e.firstName, e.lastName]
    .includes(obj.name) || e.id === obj.id);
}

function getEmployeesCoverage(param) {
  if (param === undefined) return allEmployees();
  if (param.name || param.id) {
    const paramEmployee = setEmployee(param);
    if (paramEmployee === undefined) throw new Error('Informações inválidas');
    return employeesObj(paramEmployee);
  }
}

module.exports = getEmployeesCoverage;
