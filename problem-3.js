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

// var lastDay = 11;
// if(lastDay%3 === 0){
//     console.log(lastDay, "-Medicine");
// }else{
//     console.log(lastDay, "- Rest");
// }

// let lastDay = 11;
// while (lastDay % 3 === 0) {
//   console.log(lastDay);
//   lastDay++;
// }