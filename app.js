const purchaseAmount = 2000;
const availableBonuses = 10000;

const maxBonuses = purchaseAmount / 2;
let appliedBonuses;

if (maxBonuses <= availableBonuses) {
    appliedBonuses = maxBonuses;
} else {
    appliedBonuses = availableBonuses;
}

console.log(appliedBonuses)

const total = purchaseAmount - appliedBonuses;

console.log(total);