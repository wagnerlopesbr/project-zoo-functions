const data = require('../data/zoo_data');

function totalForSpecie() {
  const specieTotal = {};
  data.species.forEach((specie) => specieTotal[specie.name] === specie.residents.length);
  return specieTotal;
}

const countAnimals = (animal) => {
  if (!animal) {
    return totalForSpecie();
  }
  const { species, sex } = animal;
  const specieResidents = data.species.find(
    (specie) => specie.name === species,
  ).residents;
  return !sex
    ? specieResidents.length
    : species.residents.reduce((acc, resident) => (resident.sex === sex ? acc + 1 : acc), 0);
};

module.exports = countAnimals;

console.log(countAnimals('penguins'));