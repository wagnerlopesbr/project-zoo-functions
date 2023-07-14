const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }
  return data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
};

module.exports = getEmployeeByName;

console.log(getEmployeeByName());
console.log(getEmployeeByName('Emery'));
console.log(getEmployeeByName('Wishart'));
