/* eslint-disable no-shadow */
const data = require('../data/zoo_data');

const { prices } = data;

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

function countEntrants(entrants) {
  const visitors = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((e) => {
    if (e.age < 18) visitors.child += 1;
    if (e.age >= 18 && e.age < 50) visitors.adult += 1;
    if (e.age >= 50) visitors.senior += 1;
  });
  return visitors;
}

function calculateEntry(entrants = null) {
  if (entrants === null || Object.entries(entrants).length === 0) return 0;
  const total = countEntrants(entrants);
  const adulto = total.adult * prices.adult;
  const crianca = total.child * prices.child;
  const idoso = total.senior * prices.senior;
  return (adulto + crianca + idoso);
}
// console.log(calculateEntry(entrants));
module.exports = { calculateEntry, countEntrants };
