//adding elements
let mobil = [
    "toyota","Avanza","BMW"
];
mobil.push("Nissan");
mobil.unshift("Lamborghini");
mobil.splice(5,0, "Ferrary");
console.log(mobil);

//Finding Elements(primitive)
const numbers = [1,2,1,3,4];

console.log(numbers.indexOf(1));
console.log(numbers.lastIndexOf(3));
console.log(numbers.indexOf(1) === 0);
console.log(numbers.includes(4));

// finding elements
const person = [
    {name :"Bima Natawijaya", age:18},
    {name :"Alfan Lible", age:20}
];
const Person  = person.find(function(person){
    return person.name === "Bima Natawijaya";
});

console.log(Person);
//arrow function
const motor = [
    {merk : "Toyota"},
    {merk : "Avanza"}
];
const Motor = motor.find(Motor => Motor.merk === "Toyota");
console.log(Motor); 


//removimg elements
const no = [1,2,3,4,5];

const last = no.pop();
console.log(last);