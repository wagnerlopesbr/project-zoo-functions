const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => ids
  .map((id) => data.species
    .find((specie) => specie.id === id));

module.exports = getSpeciesByIds;

console.log(getSpeciesByIds());
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'));
