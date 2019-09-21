const purchaseAmount = 2000;
const availableBonuses = 10000;

const maxBonuses = purchaseAmount / 2;
const appliedBonuses = maxBonuses <= availableBonuses ? maxBonuses : availableBonuses;

console.log(appliedBonuses)

const total = purchaseAmount - appliedBonuses;

console.log(total);