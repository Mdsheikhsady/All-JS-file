/**
 * objective : write a function to give me the sum of all numbers in an array
step 1: declare a function function>> sumOfNumbers()
step 2: call check whether the function is called properly >>const sum = sumOfNumbers();
step3 : set a parameter(s)
step 4: pas the parameter(s), check whether parameter is passed in a proper formate
step 5: do the function tasks (step by step)
*/

function sumOfNumbers(numbers){
    let sum = 0;
 for(const number of numbers ){
    console.log(number);
    sum = sum + number;
 }
 return sum;
}
const numbs = [5,10,15,20,25,30,55,245,250]
const sum = sumOfNumbers(numbs);
console.log('sum of numbers: ', sum);