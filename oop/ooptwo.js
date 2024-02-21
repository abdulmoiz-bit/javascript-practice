class BankAccount{
    //customerName;
    //accountNumber;
    #balance;
    
    constructor(customerName, accountNumber, balance){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance 
     }
      deposit(amount){
        this.#balance += amount
     }
    withdraw(amount){
        this.#balance -= amount;
     }
     set balance(amount){
         this.#balance = amount
     }
     get balance(){
         return this.#balance
     }
     /*
     setBalance(amount){
         this.#balance = amount;
     }
     getBalance(){
         return this.#balance;
     }
     */
}

class savingAccount extends BankAccount{
    transactionLimit = 100000
    constructor(customerName, balance){
        super(customerName, balance)
    }
    #calculateInterest(amount){
        console.log("calculating interest", amount)
    }
    takeBuisnessLoan(amount){
        this.#calculateInterest(amount);
        console.log("taking buisness loan is " + amount)
    }
}
    

//const moizAccount = new BankAccount("moiz", 1000)
//moizAccount.setBalance(4000);
//moizAccount.getBalance();
//moizAccount.balace = 4000;
//moizAccount.deposit(2000);
//console.log(moizAccount);
//console.log(moizAccount.balance)
const umerAccount = new savingAccount("umer", 90000)
umerAccount.takeBuisnessLoan(40000);
//umerAccount.calculateInterest(4000);
//umerAccount.deposit(20000);
//umerAccount.balance = 3000
console.log(umerAccount);


