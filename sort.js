const numbers = [6,1,8,2,3,5];
// console.log(numbers);
numbers.sort();
// console.log(numbers);

const friends = ['sakib', 'nokib', 'akib', 'rakib', 'bakib']
friends.sort();
console.log(friends);
const ages = [1,5,100,15,8,2,28]
// ages.sort();
// console.log(ages);
const sort_ages = ages.sort(function(a,b){return a-b})
// console.log(ages);

const sort_ages_dsc = ages.sort(function(a,b){return b-a})
console.log(ages);


const users = [{ name: "Alice" }]
console.log(users[0].name);