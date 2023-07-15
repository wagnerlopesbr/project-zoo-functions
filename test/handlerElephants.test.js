const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se funcao HandlerElephants existe', () => {
    expect(handlerElephants('param')).toBeDefined();
  });
  it('Verifica se "count" retorna quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Verifica se "names" retorna um array com a extensão sendo o total de residentes', () => {
    expect(handlerElephants('names')).toHaveLength(4);
  });
  it('Verifica se "names" retorna um array contendo o nome "Jefferson"', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Verifica se "names" retorna um array com os nomes dos residentes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Verifica se "averageAge" retorna a média da idade dos residentes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5, 4);
  });
  it('Verifica se, caso não haja parâmetro, a função retorna "undefined"', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Verifica se, caso o parâmetro utilizado não exista, a função retorna "null"', () => {
    expect(handlerElephants('GABIGOL')).toBeNull();
  });
});
