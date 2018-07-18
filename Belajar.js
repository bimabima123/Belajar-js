function person(){
    var lastName = "Natawijaya";
    var firstName = "bima";

    var lastName = "Hermawan";
    console.log(firstName+" "+lastName);
}
person();

function Hitung(){
    let i;
    for(i=0; i <= 5; i++ ){
        console.log(i);
    } 
    i = 5000;
    console.log(i);
}

Hitung();
const mobil = {
    merk : ["toyota","avanza","BMW"],
    warna : "merah"
}
Mobil(mobil);
function Mobil(obj){
    for(let key in obj){
        console.log("Mobil saya merk "+obj.merk);
    }
}

const motor = () => {
    let y = 1;
    let z = 2;

    if (y===2) {
        console.log("Berhasil");
    }else{
        console.log("tidak berhasil");
    }
}
motor();

const lampuMerah = (lampu,warna) => {
    if(lampu === "merah" && warna === "ungu"){
        console.log("Berhenti");
    }else if(lampu === "kuning" && warna ==="pink"){
        console.log("Hati-hati");
    }else if(lampu === "hijau" && warna ==="jingga"){
        console.log("jalan");
    }else{
        console.log("Tidak ada lampu");
    }
}
lampuMerah("merah","ungu");



const data = (motor) => {
    console.log(motor);
}
data("yamaha");

function dataa(mobil){
    console.log(mobil);
}

dataa("Avanza");