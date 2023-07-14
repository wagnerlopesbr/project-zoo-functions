const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managersIds = [stephanieId, olaId, burlId];

const isManager = (id) => managersIds.includes(id);

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const employeesData = data.employees
    .filter((employee) => employee.managers.includes(managerId));
  return employeesData.map((employee) => `${employee.firstName} ${employee.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };

console.log(isManager(stephanieId));
console.log(isManager('GABIGOL'));
console.log(getRelatedEmployees(burlId));
// console.log(getRelatedEmployees('GABIGOL'));
