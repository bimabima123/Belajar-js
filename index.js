//memunculkan ke console
console.log("Hello World")

//tipe data
let name = "bima natawijaya"; //string
let age = 30 ; //number
let isWebsite = false ; //boolean
let firstname = undefined;
let lastname = null;


// alert('Belajar Javascript');
//variable
    // const
    const a = "belajar";
    //a = "javascript"; //error karna hanya untuk satu variable tetap
    console.log(a);
    // let
    let b = "belajar Javascript";
    b = "belajar javascripT"
    console.log(b)

//-variable

//type reference

//objek
let person = {
    name: "Bima Natawijaya",
    age :30 
}

//Dot notation 
person.name = 'jhon';

//bracket notation
person['name'] = 'alfan';

console.log(person.name);

//--objek

//Array
let buah = ['pisang','nangka','belimbing'];
console.log(buah[0]);

//function
function mobil(name,warna){
    console.log("Mobil Sedan"+" "+name+" "+warna);
}
mobil('Avanza','Merah');

function perhitungan(number){
    return number+number;
}
console.log(perhitungan(2));

//Arithmatics
let x = 10;
let y = 3;

console.log(x + y );
console.log(x - y );
console.log(x / y );
console.log(x % y );


//Asigment Operators

let c = 10 ;
//x = x + 1;
let hasil = c + 1 ;
console.log(hasil+" "+'Asigment Operators');

//comparison operator 

let q = 1 ; 

console.log(q < 0);
console.log(q > 0 );
console.log(q <= 1);
console.log(q < 1);
console.log(q >= 1);

//equliti
console.log(q === 1);
console.log(q !== 1);

//-comparation operator

// Ternary operator
let points = 110;
let type = points > 100 ? "bima" : "isa";

console.log(type);

// logical operator
let awal = true;
let dua = true;
let AND = awal && dua ; //Logical AND
let OR = awal || dua ; //Logical OR
console.log(OR);

// NOT
let NOT = !OR;
console.log(NOT);

//logical operator
let userColor = undefined;
let defaultColor   = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);

// bitWise Operators
console.log(1 | 2) //bitwise OR
console.log(1 & 2) //bitwise AND

// condition
let nilai = 13;
 if (nilai >= 6 && nilai < 12) {
     console.log('Javascript');
 }
 else if(nilai >= 12 && nilai > 9){
     console.log('Belajar');
 }
 else(console.log('good evening'));

 

let angka = 3;
let o = (angka > 1 && angka < 5);
console.log(o)

var u = 5;
if( !u){
    console.log(!u);
}

console.log(false || true);