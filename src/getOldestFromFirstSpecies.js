const data = require('../data/zoo_data');

function checkingAnimalAge(animalId) {
  const { species } = data;
  const animals = species.find((specie) => specie.id === animalId);
  const oldest = animals.residents.reduce((a, b) => (a.age > b.age ? a : b));
  return oldest;
}

const getOldestFromFirstSpecies = (id) => {
  const { employees } = data;
  const employeesId = employees.find((employee) => employee.id === id);
  const firtSpecieId = employeesId.responsibleFor[0];
  const { name, sex, age } = checkingAnimalAge(firtSpecieId);
  return [name, sex, age];
};

module.exports = getOldestFromFirstSpecies;
