// Income & Expense & Balance related Function
function getIncomeAndExpenses(){
    // Income Input
    const income = document.getElementById('income').value;
    // Expense Input
    const foodExp = document.getElementById('food').value;
    const rentExp = document.getElementById('rent').value;
    const clothesExp = document.getElementById('clothes').value;
    // Balance & Expense output
    const totalExp = document.getElementById('total-expenses');
    const balance = document.getElementById('balance');
    
    // String Error Handling
    if(isNaN(income) || isNaN(foodExp) || isNaN(rentExp) || isNaN(clothesExp)){
        alert("You can't write without numaric value")
    }
    else{
        // Negative Error Handling
        if(parseInt(income) < 0 || parseInt(foodExp) < 0 || parseInt(rentExp) < 0 || parseInt(clothesExp) < 0){
            alert("You can't put negative number")
        }

        // Total Expense Calculation
    const totalExpense = parseInt(foodExp)+parseInt(rentExp)+parseInt(clothesExp);
    // Set Total Expense
    totalExp.innerText = totalExpense;

    // Total Balance Calculation
    const totalBalance = parseInt(income) - totalExpense;
    // Set Total Balance
    balance.innerText = totalBalance;
    } 
}


// Saving Money & Remaining Balance Related Function
function getRemainingBalance (){
    const income = document.getElementById('income').value;
    const savePercentage = document.getElementById('save-percentage').value;
    const balance = document.getElementById('balance');
    // Saving Amount & Remaining Balace Output
    const savingAmount = document.getElementById('saving-Amount');
    const RemainingBalance = document.getElementById('remaining-balance');

    // Total Saving Calculation
    const totalSaving = parseInt(income*savePercentage)/100;
    // Set Saving Amount
    savingAmount.innerText = totalSaving;

    // Remaining Balance Calculation
    const remainingAmount = parseInt(balance.innerText) - totalSaving;
    // Set Remaining Balance
    RemainingBalance.innerText = remainingAmount;

}

document.getElementById('calculate-btn').addEventListener('click', function(){
    getIncomeAndExpenses();
})

document.getElementById('save-btn').addEventListener('click', function(){
    getRemainingBalance();
})