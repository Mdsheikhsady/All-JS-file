const school = 'DMC';
const sub = 'Eng';
const book = 'eng'
console.log(school.toLowerCase());
console.log(school);
if(sub.toLowerCase() === book.toLowerCase()){
    console.log('valo exm dibo');
}
else{
    console.log('fail');
}

const liquid = 'water   ';
const drink = '   water';
if(liquid.trim() === drink.trim()){
    console.log('panir opr nam jibon');
}
else{
    console.log('somudre pani ase khete pari na');
}