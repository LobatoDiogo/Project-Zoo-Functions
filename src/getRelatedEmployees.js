const data = require('../data/zoo_data');

function isManager(id) {
  let validateManager = false;
  data.employees.forEach((e) => e.managers.forEach((m) => {
    if (m === id) {
      validateManager = true;
    }
  }));
  return validateManager;
}
function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const persons = data.employees.filter((e) => e.managers.includes(managerId));
    return persons.map((person) => `${person.firstName} ${person.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
// console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = { isManager, getRelatedEmployees };
