

function getIncomeExpenses (){
    const income = document.getElementById('input-income').value;
    const foodExpenses = document.getElementById('food').value;
    const rentExpenses = document.getElementById('rent').value;
    const clothExpense = document.getElementById('clothes').value;
    const expense = document.getElementById('total-expenses');
    const balance = document.getElementById('balance');

    // Total Expense Calculation
const totalExpenses = parseInt(foodExpenses)+ parseInt(rentExpenses)+parseInt(clothExpense);
    expense.innerText = totalExpenses;
    // Total balance Calculation

    const totalBalance = parseInt(income) - totalExpenses;
    balance.innerText = totalBalance;
    

   
}
 // Money Save Percentage
 function moneySavePercentage(){
    const inputPercentage = document.getElementById('save-percentage');
    const income = document.getElementById('input-income').value;
    const savingAmount = document.getElementById('saving-Amount');
    const remainingBalanceInput = document.getElementById('remaining-balance');

    const totalBalance = document.getElementById('balance').innerText;

    
    // Total Save
    const totalSave = (income*inputPercentage.value)/100;
    savingAmount.innerText = totalSave;
    inputPercentage.value = '';

    // Remaining Balance
    const totalRemainingBalance = parseInt(totalBalance.innerText) - parseInt(totalSave) ;
    remainingBalanceInput.innerText = totalRemainingBalance;
    
}



document.getElementById('calculate-btn').addEventListener('click', function(){
    getIncomeExpenses()
})
document.getElementById('save-btn').addEventListener('click', function(){
    moneySavePercentage()
})
