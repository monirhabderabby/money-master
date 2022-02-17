function getIncomeAndExpenses() {
  // Income Input
  const income = document.getElementById("income").value;
  // Expense Input
  const foodExp = document.getElementById("food").value;
  const rentExp = document.getElementById("rent").value;
  const clothesExp = document.getElementById("clothes").value;
  // Balance & Expense output
  const totalExp = document.getElementById("total-expenses");
  const balance = document.getElementById("balance");

  // Error Handling
  if (isNaN(income) || isNaN(foodExp) || isNaN(rentExp) || isNaN(clothesExp)) {
    alert("Warning! Please Input Numaric Value");
  } else if (
    income == "" ||
    foodExp == "" ||
    rentExp == "" ||
    clothesExp == ""
  ) {
    alert("Warning! Please Enter Your Income & Expense Properly");
  } else if (
    parseInt(income) < 0 ||
    parseInt(foodExp) < 0 ||
    parseInt(rentExp) < 0 ||
    parseInt(clothesExp) < 0
  ) {
    alert("Warning! You can't Enter Negative Value");
  } else {
    // Total Expense Calculation
    const totalExpense =
      parseInt(foodExp) + parseInt(rentExp) + parseInt(clothesExp);
    // Set Total Expense
    totalExp.innerText = totalExpense;

    // Total Balance Calculation
    const totalBalance = parseInt(income) - totalExpense;

    // Error Handling
    if (totalBalance < 0) {
      alert("You don't have sufficient balance for doing expense");
    } else {
      balance.innerText = totalBalance;
    }
  }

  // Reset Input Value
  document.getElementById("food").value = "";
  document.getElementById("rent").value = "";
  document.getElementById("clothes").value = "";
}

// Saving Money & Remaining Balance Related Function
function getRemainingBalance() {
  const income = document.getElementById("income").value;
  // Input saving percentage
  const savePercentage = document.getElementById("save-percentage").value;
  // Total Balance
  const balance = document.getElementById("balance").innerText;
  // Saving Amount & Remaining Balace Output
  const savingAmount = document.getElementById("saving-Amount");
  const RemainingBalance = document.getElementById("remaining-balance");

  if (isNaN(savePercentage)) {
    alert("Warning! Please Input Numaric Value as Your Saving Percentage");
  } else if (savePercentage == "") {
    alert("Warning! Please Enter Your Saving Percentage Properly");
  } else if (parseInt(savePercentage) < 0) {
    alert("Warning! Your can't Enter Negative Value as your Saving Percentage");
  } else {
    // Total Saving Calculation
    const totalSaving = parseInt(income * savePercentage) / 100;
    if (totalSaving > parseInt(balance)) {
      alert("You don't have sufficient Balance for Saving");
    } else {
      // Set Saving Amount
      document.getElementById("saving-Amount").innerText = totalSaving;

      // Reset Income Value
      document.getElementById("income").value = "";
      document.getElementById("save-percentage").value = "";

      // Remaining Balance Calculation
      const remainingAmount = parseInt(balance) - totalSaving;
      // Set Remaining Balance
      RemainingBalance.innerText = remainingAmount;
    }
  }
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  getIncomeAndExpenses();
});
document.getElementById("save-btn").addEventListener("click", function () {
  getRemainingBalance();
});
