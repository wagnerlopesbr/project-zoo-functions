// mapeamento geográfico dos animais de cada espécie
// realize filtros de localização, nome em ordem alfabética e sexo.

const data = require('../data/zoo_data');

const locations = () => {
  const { species } = data;
  return species.reduce((acc, b) => {
    const { location, name } = b;
    if (!acc[location]) {
      acc[location] = [];
    }
    acc[location].push(name);
    return acc;
  }, {});
};

const animalNames = (name, gender, order) => {
  const namesOfAnimals = {};
  const speciesResidents = data.species.find(
    (resident) => resident.name === name, // filtra o animal pelo nome escolhido
  ).residents;
  const filterByGender = gender
    ? speciesResidents.filter((resident) => (resident.sex === gender)) // filtra o animal pelo genero escolhido
    : speciesResidents;
  const speciesNames = filterByGender.map((resident) => resident.name); // gera novas infos com os nomes
  const namesInOrder = order ? speciesNames.sort() : speciesNames; // coloca os nomes em ordem alfabética
  namesOfAnimals[name] = namesInOrder; // cada index será o nome da vez na ordem alfabética
  return namesOfAnimals;
};

const locationsNames = (gender, order) => {
  const { species } = data;
  return species.reduce((acc, b) => {
    const { location, name } = b;
    if (!acc[location]) { // se a localização informada não existir no array, criá-la
      acc[location] = [];
    }
    const animalNamesVarr = animalNames(name, gender, order);
    acc[location].push(animalNamesVarr);
    return acc;
  }, {});
};

const getAnimalMap = (options) => {
  if (!options) {
    return locations();
  }
  const { includeNames = false, sorted = false, sex = false } = options;
  if (includeNames) {
    return locationsNames(sex, sorted);
  }
  return locations();
};

module.exports = getAnimalMap;
