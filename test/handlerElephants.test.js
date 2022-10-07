const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se HandlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });

  it('Verifica se ao não receber um parâmetro o retorno é undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Verifica se ao não receber um parâmetro em string o retorno é inválido', () => {
    expect(handlerElephants(1)).toBe('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Verifica se ao receber count retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toEqual(4);
  });

  it('Verifica se ao receber names como parâmetro retorna um array', () => {
    expect(Array.isArray(handlerElephants('names'))).toBe(true);
  });

  it('Verifica se ao receber averageAge como parâmetro retorna a média de idade', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });

  it('Verifica se ao receber um argumento em string inválido retorna null', () => {
    const actual = handlerElephants('string inválida');
    expect(actual).toBeNull();
  });

  it('Verifica se ao receber o argumento popularity retorna um número maior ou igual a 5', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
});
