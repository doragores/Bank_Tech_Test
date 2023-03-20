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
    account.deposit(1000, "10/01/2023");
    expect(account.balance).toEqual(1000)
  });

  it('should handle multiple deposits', () => {
    account.deposit(1000, "10/01/2023");
    account.deposit(2000, "13/01/2023");
    expect(account.balance).toEqual(3000);
  })
})