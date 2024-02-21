function BankAccount(customerName, balance, accountNumber){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance
/*
    this.deposit = function(amount){
    this.balance = this.balance + amount
}
*/
}

BankAccount.prototype.deposit= function (amount){
this.balance = this.balance + amount
}
BankAccount.prototype.withdraw= function (amount){
this.balance = this.balance - amount
}

function currentAccount(customerName, balance){
BankAccount.call(this, customerName, balance)
this.transactionLimit = 10000;
}
/*
currentAccount.prototype.deposit = function(amount){
this.balance = this.balance+amount
}
currentAccount.prototype.withdraw= function(amount){
this.balance = this.balance-amount
}
*/
currentAccount.prototype =  Object.create(BankAccount.prototype);
const hasnainAccount = new BankAccount("hasnain", 10000)
const moizAccount = new BankAccount("moiz", 10000)
const umerAccount = new currentAccount("umer", 20000);
console.log(hasnainAccount)
console.log(moizAccount);
console.log(umerAccount);
//umerAccount.withdraw(4000);
//umerAccount.deposit(30000);
//moizAccount.deposit(2000);
//moizAccount.withdraw(8000);