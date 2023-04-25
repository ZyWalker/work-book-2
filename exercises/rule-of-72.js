var interestRate = 8 ;
var time = 72 / interestRate ;
var savings = 50000 ;
var futureSavings = savings*(1.08**(time));

console.log("At a " + interestRate + "% interest rate, your savings will be worth " + futureSavings.toFixed(2) + " in " + time + " years.") ;
