/** Problem 06 :  (Current Salary )  */
// var experience = 40;
// var startingSalary = 30000;
// // write your code here
// var salaryIncrimentPercent = 5;
// var salaryIncrementRate = salaryIncrimentPercent/100;
// var currentSalary = startingSalary;

//   for (var i = 0; i < experience; i++) {
//     currentSalary += currentSalary * salaryIncrementRate;
//   }
//   console.log(currentSalary.toFixed(2));

/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
//write your code here
var salaryIncrimentPercent = 5;
var salaryIncrimentRate = salaryIncrimentPercent/100;
var bortomanSalary = startingSalary;
for(var i = 0; i < experience; i++){
    bortomanSalary += bortomanSalary * salaryIncrimentRate;
}
console.log(bortomanSalary.toFixed(2));
console.log(typeof bortomanSalary);