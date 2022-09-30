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

  it('Verifica se o retorno de HandlerElephants é uma string', () => {
    expect(handlerElephants('13')).toBe('string');
  });
});
