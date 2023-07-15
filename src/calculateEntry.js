const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const visitors = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((entrance) => {
    if (entrance.age < 18) {
      visitors.child += 1;
    } else if (entrance.age < 50) {
      visitors.adult += 1;
    } else {
      visitors.senior += 1;
    }
  });
  return visitors;
};

const calculateEntry = (entrants) => {
  if (!entrants) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  const childMoney = child * data.prices.child;
  const adultMoney = adult * data.prices.adult;
  const seniorMoney = senior * data.prices.senior;
  return childMoney + adultMoney + seniorMoney;
};

module.exports = { calculateEntry, countEntrants };
