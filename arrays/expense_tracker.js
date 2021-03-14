const myAccount = {
    name: 'Robson Trajano',
    expenses: [],
    income: [],
    addExpense: function(description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function(description, amount){
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function(){

        let total_expenses = 0
        let total_income = 0
        let account_balance = 0

        this.expenses.forEach((expense) => {
            total_expenses += expense.amount
        })

        this.income.forEach((income) => {
            total_income += income.amount
        })

        account_balance = total_income - total_expenses

        return `${this.name} has a balance of $${account_balance}. $${total_income} in income. $${total_expenses} in expenses.`
    },
}

myAccount.addExpense('rent', 950)
myAccount.addExpense('pizza', 20)
myAccount.addIncome('job', 1000)

console.log(myAccount.getAccountSummary())

