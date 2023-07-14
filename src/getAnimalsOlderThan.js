const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  if (!(data.species.find((specie) => specie.name === animal))) {
    return false;
  }
  return data.species
    .find((specie) => specie.name === animal).residents
    .every((resident) => resident.age >= age);
};

module.exports = getAnimalsOlderThan;

console.log(getAnimalsOlderThan('otters', 7));
console.log(getAnimalsOlderThan('penguins', 10));
