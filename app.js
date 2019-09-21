const purchaseAmount = 1000;
const bonuses = 900;

let total = purchaseAmount - bonuses;
if (total < 0) {
    total = 0;
}

console.log(total);