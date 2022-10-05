const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });

  it('Verifica se ao não receber parâmetro retorna todos os dias e horários', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });

  it('Verifica se ao receber parâmetro com dia e horário indisponível retorna a mesnagem The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
  });

  it('Verifica se ao receber parâmetro com dia e horário disponível retorna a mensagem The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
    expect(getOpeningHours('Sunday', '10:30-AM')).toEqual('The zoo is open');
  });

  it('Verifica se os argumentos são strings', () => {
    expect(typeof getOpeningHours('Monday', '09:00-am')).toBe('string');
  });

  it('Verifica se para os argumentos Friday e 09:00-ZM deve lançar uma mensagem do tipo error', () => {
    const actual = () => getOpeningHours('Friday', '09:00-ZM');
    const expected = new Error('The abbreviation must be \'AM\' or \'PM\'');
    expect(actual).toThrow(expected);
  });

  it('Verifica se para os argumentos Thu e 09:00-AM deve lançar uma exceção com mensagem de error', () => {
    const actual = () => getOpeningHours('Thu', '09:00-AM');
    const dayError = 'The day must be valid. Example: Monday';
    const expected = new Error(dayError);
    expect(actual).toThrow(expected);
  });

  it('Verifica se para os argumentos Saturday e C9:00-AM deve lançar uma exceção com a mensagem de error', () => {
    const actual = () => getOpeningHours('Saturday', 'C9:00-AM');
    const expected = new Error('The hour should represent a number');
    expect(actual).toThrow(expected);
  });
});
