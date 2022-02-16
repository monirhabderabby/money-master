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

document.getElementById('calculate-btn').addEventListener('click', function(){
    getIncomeExpenses()
})
