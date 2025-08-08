/**
 * create function that will return only the even number
 * return the sum of even number
 */

function evenNumberOnly(){
    const evens = [];
for(const number of numbers){
    if(number % 2 === 0){
        // console.log(number);
        evens.push(number);

    }

}
return evens;
}
const numbers = [5,10,15,20,25,30]
// const evensN = evenNumberOnly(numbers);
// console.log(evensN);

function sumOfEvenNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0){
        // console.log(number);
        sum = sum + number;
    }
    
}
return sum;
}
const sum = sumOfEvenNumbers(numbers);
console.log(sum);
