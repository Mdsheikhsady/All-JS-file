/** Problem -01 ( Divide the Asset ) */
var area = 1100;
//write your code here
var totalUttoradhikar = 2;
var divideAsset = area/totalUttoradhikar;
console.log(divideAsset);

/** Problem -02 ( Cycle or Laptop ) */
var money = 44999;
//write your code here

if(money >= 45000){
    console.log("Laptop");
} else if(money >= 10000){
    console.log("Cycle");
} else{
    console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here
for(var restOrMedicine = 1; restOrMedicine <= lastDay; restOrMedicine++){
    if(restOrMedicine % 3 === 0){
        console.log(restOrMedicine.toString(), "- medicine");
    } else{
        console.log(restOrMedicine.toString(), "- rest");
    }
}

/** Problem 04 - (Delete / Store) */
var fileName= "result.pdf";
//write your code here
if(fileName.includes('#')){
    console.log("Store");
} else if(fileName.includes('.pdf')){
    console.log('Store');
}
else if(fileName.includes('.docx')){
    console.log('Store');
}
else{
    console.log("Delete");
}

/** Problem 05 - ( PH Email Generator )  */
var student= { name: "mewo" , roll: 96 ,department: "cse"  }
//write your code here
var studentEmail = student.name+student.roll+'.'+student.department+'@ph.ac.bd';
console.log(studentEmail);

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