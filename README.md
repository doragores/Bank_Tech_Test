# Bank Tech Test 

Bank Tech Test is an application that runs using Node, simulating a bank account that accepts deposits, withdrawals and can print a statement, where it displays a header with date, credit, debit and balance and any transactions bellow it.

## Approach

For this application, I chose JavaScript as the programming language to improve my proficiency in it and challenge myself.

To ensure that I followed best practices, I adhered to the principles of Test-Driven Development (TDD) as this helped me avoid the common trap of writing code first, ensuring my code meets the requirements. 

## Structure

For simplicity, this application is composed of a single class `Account` with 4 methods: 

- Constructor: handles balance starting at 0 and an empty array for transactions.
- Deposit: handles deposits being made to the account and adds it to the balance.
- Withdraw: handles withdrawals being made from the account and is reflected in the total balance
- Statement: Prints a statement with an initial header consisting of 'date', 'credit', 'debit' and 'balance' and each transaction added bellow the header satisfying each element.


## Installation

This applications is written in JavaScript and uses 'npm' as its package manager. 

1. Change directory to the desired location
2. Fork and clone the repo into your local machine
3. Install all the dependencies needed:

```
npm install
```

## How to run it

You can see it running by un-comment the Example use in BankTest.js file and run:

```
node BankTest.js
``` 

Or you can run it using the Node REPL:

```javascript
Bank_Tech_Test git:(main) ✗ node
Welcome to Node.js v16.18.1.
Type ".help" for more information.
> const Account = require('./BankTest.js')
undefined
> const account = new Account()
undefined
> account.deposit('10/01/2023', 1000)
undefined
> account.deposit('13/01/2023', 2000)
undefined
> account.withdraw('14/01/2023', 500)
undefined
> console.log(account.statement())
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
undefined
```

## Testing

The project uses Jest for testing.

To run all the tests with code coverage you can use the command:

```
npm test
```











