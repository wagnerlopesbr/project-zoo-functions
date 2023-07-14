const data = require('../data/zoo_data');

const managersIds = [
  '9e7d4524-363c-416a-8759-8aa7e50c0992',
  'fdb2543b-5662-46a7-badc-93d960fdc0a8',
  '0e7b460e-acf4-4e17-bcb3-ee472265db83',
];

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

console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
console.log(isManager('GABIGOL'));
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
console.log(getRelatedEmployees('GABIGOL'));
