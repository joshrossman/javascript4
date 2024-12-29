function Account(accountNumber,balance,owner){
    this.accountNumber=accountNumber;
    this.balance=balance;
    this.owner=owner;
}

Account.prototype.addFunds = function(funds){
    this.balance+=funds;
    console.log("Funds added successfully. New Balance is: " + this.balance)
}
Account.prototype.withdrawFunds = function(funds){
    this.balance-=funds;
    console.log("Funds withdrawn successfully." + "$"+funds+"taken out. New Balance is: " + this.balance)
}
Account.prototype.compoundInterest = function(rate,perYear, accountYears){
    compound= this.balance*Math.pow((1+rate/perYear),(perYear*accountYears));
    console.log(compound);
    return compound;
}

let joshAccount = new Account(123,0,"Josh");
joshAccount.addFunds(2000);
console.log(joshAccount);
joshAccount.withdrawFunds(100);
console.log(joshAccount);
compound=joshAccount.compoundInterest(.03,4,3);
console.log(compound);




