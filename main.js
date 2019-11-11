const util = require("./myUtils.js");
const any=require("readline-sync");
let x=any.questionInt("enter the first positive integer: ");
// x is the first number
const y=any.questionInt("enter the second positive integer: ");
// y is the second number 
let prime_numbers=[]
for(;x<=y;x++){
    if(util.isPrime(x)){
        prime_numbers.push(x);
    }
}
console.log(prime_numbers);