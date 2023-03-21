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
    let statement = "date || credit || debit || balance";
    for (let i = this.transactions.length - 1; i >= 0; i--) {
    const transaction = this.transactions[i];
    const creditAmount = transaction.credit ? transaction.credit.toFixed(2) : '';
    const debitAmount = transaction.debit ? transaction.debit.toFixed(2) : '';
    statement += `\n${transaction.date} ||${creditAmount ? ` ${creditAmount}` : ''} ||${debitAmount ? ` ${debitAmount}` : ''} || ${transaction.balance.toFixed(2)}`;
    }
    return statement;
  } 
};

module.exports = Account;


// Example use

const account = new Account();
account.deposit("10/01/2023", 1000)
account.deposit("13/01/2023", 2000)
account.withdraw("14/01/2023", 500)

console.log(account.statement());