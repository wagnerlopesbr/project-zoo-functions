const data = require('../data/zoo_data');

function employeeInfo(info) {
  const input = !info ? {} : info;
  const { name, id } = input;
  const { employees } = data;
  if (name) {
    return { // Retorne as informações da pessoa correspondente ao receber um objeto com a propriedade name:
      info: employees.find((employee) => employee.firstName === name || employee.lastName === name),
      everybody: false,
    };
  }
  if (id) {
    return { // Retorne as informações da pessoa correspondente ao receber um objeto com a propriedade id
      info: employees.find((employee) => employee.id === id),
      everybody: false,
    };
  }
  return { info: employees, everybody: true };
}

function speciesInfo(info) {
  const { species } = data;
  const speciesName = info
    .map((id) => species
      .find((specie) => specie.id === id).name);
  const locations = info
    .map((id) => species
      .find((specie) => specie.id === id).location);
  return { speciesName, locations };
}

const infoObj = (employees) => { // formato desejado para retorno da função getEmployeesCoverage
  const { firstName, lastName } = employees;
  const { speciesName, locations } = speciesInfo(employees.responsibleFor);
  return {
    id: employees.id,
    fullName: `${firstName} ${lastName}`,
    species: speciesName,
    locations,
  };
};

const infos = (employees) => employees.map((employee) => infoObj(employee));

const getEmployeesCoverage = (obj) => { // deverá retornar as informações sobre a pessoa colaboradora e por quais espécies ela é responsável.
  const { info, everybody } = employeeInfo(obj);
  if (!info) {
    throw new Error('Informações inválidas'); // Lance um erro caso o id seja inválido.
  }
  if (everybody) {
    return infos(info);
  }
  return infoObj(info); // A função deve retornar um objeto no seguinte formato:
};

module.exports = getEmployeesCoverage;

// console.log(getEmployeesCoverage({ name: 'Sharonda' })); // caso o objeto passado por parâmetro tenha a propriedade name, deverá retornar somente a pessoa correspondente;
// console.log(getEmployeesCoverage()); // caso não receba parâmetros, deverá retornar uma lista com a cobertura de todas as pessoas colaboradoras;
// console.log(getEmployeesCoverage({ name: 'GABIGOL' })); // caso não haja nenhuma pessoa com o name ou id especificados deverá lançar um error
