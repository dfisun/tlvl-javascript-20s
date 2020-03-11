const MAX_EXPENSES = 150;
let currentExpenses = 0;

function addExpense(description, price) {
  if (price < 0) {
    return false;
  }

  if (currentExpenses + price <= MAX_EXPENSES) {
    currentExpenses += price;
    return true;
  } else {
    return false;
  }
}
