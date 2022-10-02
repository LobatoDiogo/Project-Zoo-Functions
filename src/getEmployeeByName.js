const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName = null) {
  if (employeeName === null) {
    return {};
  }
  return employees.find((emp) => emp.firstName === employeeName || emp.lastName === employeeName);
}
// console.log(getEmployeeByName('Nelson'));
module.exports = getEmployeeByName;
