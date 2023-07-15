const data = require('../data/zoo_data');

const allAnimals = data.species.map((specie) => specie.name);
const allDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

function checking(parameter) {
  const animals = allAnimals.includes(parameter);
  const days = allDays.includes(parameter);
  if (animals) {
    return 'animal';
  }
  if (days) {
    return 'day';
  }
  return 'all';
}

function completeSchedule() {
  const schedule = {};
  for (const day of allDays) {
    schedule[day] = {};
    const { open, close } = data.hours[day];
    const openTime = `Open from ${open}am until ${close}pm`;
    const animalsList = data.species
      .filter((animal) => animal.availability.includes(day))
      .map((animal) => animal.name);
    if(day === 'Monday') {
      schedule.Monday.officeHour = 'CLOSED';
      schedule.Monday.exhibition = 'The zoo will be closed!';
    } else {
      schedule[day].officeHour = openTime;
      schedule[day].exhibition = animalsList;
    }
  }
  return schedule;
}

const animalSchedule = (animal) => data.species
  .find((specie) => specie.name === animal)
  .availability;

function daySchedule(day) {
  if (day === 'Monday') {
    return {
      Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  }
  const { species, hours } = data;
  const specieDay = species
    .filter((specie) => specie.availability.includes(day))
    .map((specie) => specie.name);
  return {
    [day]: {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: specieDay,
    },
  };
}

const getSchedule = (scheduleTarget) => {
  const choice = checking(scheduleTarget);
  switch (choice) {
  case 'animal':
    return animalSchedule(scheduleTarget);
  case 'day':
    return daySchedule(scheduleTarget);
  case 'all':
    return completeSchedule();
  default:
    break;
  }
};

module.exports = getSchedule;
