//prototype 1
var Account = {
  accountNumber: null,
  amount: null,
  getBalance: function () {
    return amount;
  },
};

//prototype 2
var LoanAccount = {
  loanType: null,
  loanAmount: null,
  getLoanDetails: function () {
    return loanAmount;
  },
};

//create 3 objects

//object 1 using prototype 1
var normalAccount = Object.create(Account);
normalAccount.accountNumber = 1111;
normalAccount.amount = 100000;

//object 2 using prototype 2
var loanAccount1 = Object.create(LoanAccount);
loanAccount1.loanType = "debt";
loanAccount1.loanAmount = 1000;

//object 3 using prototype 2
var loanAccount2 = Object.create(LoanAccount);
loanAccount2.loanType = "Financial Aids";
loanAccount2.loanAmount = 10000;

//null prototype object
var mergedAccount = Object.create({});

//merge object
Object.assign(mergedAccount, normalAccount, loanAccount1, loanAccount2);
console.log(mergedAccount);

//create 3 objects in another way
var normalAccount = new Object(Account);
var loanAccount21 = new Object(LoanAccount);
var loanAccount22 = new Object(LoanAccount);
