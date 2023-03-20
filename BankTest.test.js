const Account = require('./BankTest.js');

describe('Account', () => {
  let account;

  beforeEach(() => {
    account = new Account();
  });

  it('should start with balance at 0', () =>{
    expect(account.balance).toEqual(0);
  });

  it('should handle a single deposit', () => {
    account.deposit("10/01/2023", 1000);

    expect(account.balance).toEqual(1000)
  });

  it('should handle multiple deposits', () => {
    account.deposit("10/01/2023", 1000);
    account.deposit("13/01/2023", 2000);

    expect(account.balance).toEqual(3000);
  });

  it('should handle a single withdrawal', () => {
    account.deposit("10/01/2023", 1000);
    account.deposit("13/01/2023", 2000);
    account.withdraw("14/01/2023", 500);
    expect(account.balance).toEqual(2500);
  });

  it('should print a statement', () => {
    account.deposit("10/01/2023", 1000);
    account.deposit("13/01/2023", 2000);
    account.withdraw("14/01/2023", 500);

    expect(account.statement()).toEqual(
      "date || credit || debit || balance\n" +
      "14/01/2023 || 500.00 || 2500.00\n" +
      "13/01/2023 || 2000.00 || || 3000.00\n" +
      "10/01/2023 || 1000.00 || || 1000.00"
    );
  });
});