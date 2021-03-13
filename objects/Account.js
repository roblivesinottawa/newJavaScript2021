let myAccount = {
    name: 'Rob Trajano',
    expenses: 0,
    income: 0
}

// create a function to add an expense
addExpense = (account, amount) => {
    account.expenses += amount
    
}

// function to add income
addIncome = (account, income) => {
    account.income += income
 
}

// function to reset account
resetAccount = (account, amount) => {
    account.expenses = 0
    account.income = 0
}


// get a summary of the account
getAccountSummary = (account) => {
   let newBalance = account.income - account.expenses
   return `Account for ${account.name} has $${newBalance}. $${account.income} in income. $${account.expenses} in expenses.`
}


// adding income to the account
addIncome(myAccount, 2000)
// adding expenses
addExpense(myAccount, 500)
console.log(getAccountSummary(myAccount))
// resetting account
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))

