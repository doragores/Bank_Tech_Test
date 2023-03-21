class Account {
  constructor() {
    this.balance = 0;
    this.transactions = []
  }

  deposit(date, amount) {
    this.balance += amount;
    this.transactions.push({ date, credit: amount, debit: '', balance: this.balance})
  }

  withdraw(date, amount) {
    this.balance -= amount;
    this.transactions.push({ date, credit: '', debit: amount, balance: this.balance})
  }

  statement() {
    let statement = "date || credit || debit || balance"; // Adding header to statement

    // Looping through transactions array in reverse order 
    for (const transaction of this.transactions.reverse()) {
    
    // Checking if each transaction has a truthy value for each credit and debit
    //If it does, converts it to 2 decimals, otherwise returns an empty string
    const creditAmount = transaction.credit ? transaction.credit.toFixed(2) : '';
    const debitAmount = transaction.debit ? transaction.debit.toFixed(2) : '';
    
    // Adding each date and transaction bellow statement header
    statement += `\n${transaction.date} ||${creditAmount ? ` ${creditAmount}` : ''} ||${debitAmount ? ` ${debitAmount}` : ''} || ${transaction.balance.toFixed(2)}`;
    }

    return statement;
  }
};

module.exports = Account;


// Example use

// const account = new Account();
// account.deposit("10/01/2023", 1000)
// account.deposit("13/01/2023", 2000)
// account.withdraw("14/01/2023", 500)

// console.log(account.statement());