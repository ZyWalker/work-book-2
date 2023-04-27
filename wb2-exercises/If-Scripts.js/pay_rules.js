var payRate = 25;
var hoursWorked = 40;
var pay = payRate*hoursWorked;

if (hoursWorked>40) {
pay = (payRate*40)+((hoursWorked-40)*(payRate*1.5))
}

console.log("After " + hoursWorked + " hours worked, you will get paid " + pay + "$ dollars")