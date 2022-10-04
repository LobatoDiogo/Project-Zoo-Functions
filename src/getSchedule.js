const data = require('../data/zoo_data');

const { species } = data;

function getSchedule(scheduleTarget) {
  const target = species.find((e) => e.name === scheduleTarget);
  if (target === null || target === undefined) return null;
  return target.availability;
}
console.log(getSchedule());
module.exports = getSchedule;

// Para isso:

// Crie um objeto e adicione todos os dias da semana como chave;

// Os valores de cada dia da semana deve ser um objeto, possuindo as chaves officeHour e exhibition:

// officeHour deve possuir o texto com o horário que o zoológico abre e fecha naquele dia da semana;

// exhibition deve possuir um array com o nome de todos os animais disponíveis para visitação naquele dia da semana.
