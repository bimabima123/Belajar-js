//--Belajar Switch Case
let role = 'isa' 

switch (role) {
    case 'bima':
        console.log('belajar Javascript');
        break;

    case 'isa':
        console.log('belajar React');
        break;

    default:
    console.log('belajar Android');
        
}
//--belajar Switch Case

// perulangan for
var mobil = ["BMW","Volvo","Ford","Avanza","Toyota"];
var text = "";
var i ;
for (i = 0; i < mobil.length; i++) {
    text += mobil[i];
}

console.log(text);
//
// let ulang;
// for(ulang = 0; ulang <= 10; ulang++){
//     //console.log('Belajar Javascript', ulang);
    
//     //else(console.log(ulang));
// }

// -- perulangan for
// perulangan while 

// let po = 9 ;
// while(po <= 10){
//     if(po % 2 !== 0){
//         console.log(po);
//     }
//     po++;
// }

let po = 9;
do{
    if(po % 2 !== 0)console.log(po);
    po++;
}while(po <= 5);

//for in 

const orang = {
    nama: "bima",
    umur: 30,
    alamat: "Bogor"
};

for (let key in orang)
    console.log("Nama gua" ,orang.nama);
    console.log("gua berumur",orang.umur);
    console.log("Alamat Rumah gua di",orang.alamat);

//for out

const buahh = ['apel','mangga','pisang'];

for(let Buah of buahh){
    console.log(Buah);
}

//Break & Continue
let nmr = 0 ;
while (nmr < 10) {
    //if (nmr === 5) continue; 
    if (nmr === 5) {
        nmr++;
        continue;
    }
    console.log(nmr)
    nmr++;
} 

//landscape
console.log(isLandscape(600,600));
function isLandscape(width,height){
    return (width === height) 
}
//--landscape   

//string property
const movie = {
    film:'The Avenger',
    genre: 'Hero',
    duration: "1 jam",
    rating : 4.5
};

showPropertise(movie);

function showPropertise(obj){
    for (let key in obj)
        if (typeof obj && 'string')
            console.log(obj);
}

//limit(belum paham)

console.log(sum(15));

function sum(limit){
    let sum = 0;
        for(let Sum = 0; Sum < limit; Sum++)
            if(Sum % 3 === 0 || Sum % 5 === 0)
            sum += Sum ;
        
        return sum;
}

//
// Perbedaan antara == dengan ===
// == untuk mencocokan int
// === untuk mencocokan string

var i = ''; 
if(i) {
    console.log("Ini bener");
}else{
    console.log("Ini salah");
}