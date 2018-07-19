//adding elements
let mobil = [
    "toyota","Avanza","BMW"
];
mobil.push("Nissan");// untuk menambah kan objek paling belakang
//mobil.pop();
mobil.unshift("Lamborghini"); // untuk menambah kan objek paling depan
mobil.splice(5,0, "Ferrary");// untuk menyelipkan objek.
console.log(mobil);

//Finding Elements(primitive)
const numbers = [1,2,1,3,4];

console.log(numbers.indexOf(1));// mencari angka 1 di index ke berapa.
console.log(numbers.lastIndexOf(3));//mencari angka 3 berada di index berapa.
console.log(numbers.indexOf(1) === 0); //menyamakan posisi index.
console.log(numbers.includes(4));//menghitung seberapa banyak array

// finding elements
//memanggil object yg akan di pilih menggunakan find
const person = [
    {name :"Bima Natawijaya", age:18},
    {name :"Alfan Lible", age:20}
];
const Person  = person.find(function(person){
    return person.name === "Bima Natawijaya";
});

console.log(Person);
//arrow function
//membuat simple function dengan ES6
const motor = [
    {merk : "Toyota"},
    {merk : "Avanza"}
];

const Motor = motor.find(Motor => Motor.merk === "Toyota");
console.log(Motor); 


//removimg elements
//menghapus array menggunakan method array.
const no = [1,2,3,4,5,6];

const last = no.pop();
console.log(last);

const start = no.shift();
console.log(start);

//empety array
//membuat nilai array menjadi kosong
let angka = [1,2,3,4,5];
let another = angka;

if (angka.length > 0 ){
     console.log("array kosong");
}else{
    console.log("array masih ada");
}

while (angka.length > 0 ) 
angka.pop();

console.log(angka.length)
console.log(another.length)

//combination and slicing arrays
//--mengkombinasikan 2 array menjadi 1 array
//const first = [1,2,3];
const first = [{id : 1}];
const second = [4,5,6];

const combined = first.concat(second);
first[0].id = 10;

const slice  = combined.slice();

console.log(combined);
console.log(slice);



//filter
//memfileter nilai yg akan di tampilkan

const nomor = [1,2,3];

// const filtered = nomor.filter(function(value){
//     return value >= 1 ;
// });

const filtered = nomor.filter(value => value >= 0);
console.log(filtered);
//const nomor = [1,-1,2,3];
// const filtered = nomor.filter(n => n >= n)

const familly = [1,-1,2,3];
// let Familly = familly.find(function(familly){
//     return familly.name === "Bima Natawijaya";
// });
const items = familly
.filter(n => n >= 0)
.map(n => ({value: n}))
.filter(obj => obj.value > 1)
.map(obj => obj.value)
//const nameFamilly = fullFamilly.map(n => '<li>'+n+'</li>');
//console.log(fullFamilly);
console.log(items);

//array.prototype.reduce()
const nmr = [1,2,3,4,5];

let sum = nmr.reduce((akumulasi, angka) => {
    return akumulasi + angka ;
},0);

console.log(sum);




