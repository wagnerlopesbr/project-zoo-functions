const getOpeningHours = require('../src/getOpeningHours');

const daysObjToTest = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};
const closedMsg = 'The zoo is closed';
const openMsg = 'The zoo is open';

describe('Testes da função getOpeningHours', () => {
  it('Verifica se funcao getOpeningHours existe', () => {
    expect(getOpeningHours()).toBeDefined();
  });
  it('não passando argumentos. Deverá retornar o objeto "daysObjToTest"', () => {
    expect(getOpeningHours()).toEqual(daysObjToTest);
  });
  it('Para os argumentos Monday e 09:00-AM deve retornar a string "The zoo is closed"', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual(closedMsg);
  });
  it('Para os argumentos Tuesday e 09:00-AM deve retornar a string "The zoo is open"', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual(openMsg);
  });
  it('Para os argumentos Wednesday e 09:00-PM deve retornar a string "The zoo is closed"', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual(closedMsg);
  });
  it('argumento DIA inválido deve retornar a string "The day must be valid. Example: Monday"', () => {
    expect(() => getOpeningHours('Hoje', '10:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  it('argumento HORA:minutos:abreviação inválido deve retornar a string "The hour should represent a number"', () => {
    expect(() => getOpeningHours('Monday', 'Q0:00-AM')).toThrow('The hour should represent a number');
  });
  it('argumento hora:MINUTOS:abreviação inválido deve retornar a string "The minutes should represent a number"', () => {
    expect(() => getOpeningHours('Monday', '10:q0-AM')).toThrow('The minutes should represent a number');
  });
  it('argumento hora:minutosABREVIAÇÃO na hora inválido deve retornar a string "The abbreviation must be \'AM\' or \'PM\'"', () => {
    expect(() => getOpeningHours('Monday', '10:00-MM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('caso o argumento HORA:minutos:abreviação não seja um número inteiro entre 0 e 12 deve retornar a string "The hour must be between 0 and 12"', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });
  it('caso o argumento hora:MINUTOS:abreviação não seja um número inteiro entre 0 e 59 deve retornar a string "The minutes must be between 0 and 59"', () => {
    expect(() => getOpeningHours('Monday', '10:61-AM')).toThrow('The minutes must be between 0 and 59');
  });
  it('se argumento HORA for passado com digito invalido lança erro', () => {
    expect(() => getOpeningHours('Tuesday', 'três:00-XM')).toThrow();
  });
  it('verifica se a funcionalidade da função fix12 retorna o esperado dependendo no período do dia acompanhado da hora "12:00"', () => {
    expect(getOpeningHours('Wednesday', '12:00-AM')).toEqual(closedMsg);
    expect(getOpeningHours('Wednesday', '12:00-PM')).toEqual(openMsg);
    expect(getOpeningHours('Wednesday', '07:59-AM')).toEqual(closedMsg);
    expect(getOpeningHours('Wednesday', '09:01-PM')).toEqual(closedMsg);
    expect(getOpeningHours('Wednesday', '12:00-AM')).toEqual(closedMsg);
    expect(getOpeningHours('Wednesday', '09:00-AM')).toEqual(openMsg);
    expect(getOpeningHours('Wednesday', '05:59-PM')).toEqual(openMsg);
    expect(getOpeningHours('Wednesday', '12:00-PM')).toEqual(openMsg);
  });
  it('verifica se a função getOpeningHours não é CASE SENSITIVE', () => {
    expect(getOpeningHours('TUESDAY', '09:00-AM')).toEqual(getOpeningHours('Tuesday', '09:00-AM'));
    expect(getOpeningHours('TuEsDaY', '09:00-AM')).toEqual(getOpeningHours('Tuesday', '09:00-AM'));
    expect(getOpeningHours('tUESDAY', '09:00-AM')).toEqual(getOpeningHours('Tuesday', '09:00-AM'));
  });
});
