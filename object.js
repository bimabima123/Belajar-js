// basic object
const circel = {
    radius : 1,
    opacity : 3,
    location :{
        x : 1,
        y : 2
    },
    draw: function(){
        console.log('belajar Js');
    }
};
    console.log(circel.opacity);  
    circel.draw();

//function factory
function createCircle(radius){
    return {
        radius,
        draw(){
            console.log('draw');
        }    
    };
}
const Circel1 = createCircle(1);
console.log(Circel1);

//construct function
function construct(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const Construct  = new construct(2);
console.log(Construct);

//Dynamic Number of Object
const Circel = {
    radius : 1
};

Circel.color = 'yellow';
Circel.draw = function(){}

delete Circel.color;
delete Circel.draw;

console.log(Circel);

//Constructor Property

function Object(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
Object.call({},1);
Object.apply({},[1,2,3,4]);
const anothe = new Object();
console.log();

// value SVGScriptElement.referency types
let obj = {value : 10};

function increas(obj){
    obj.value++;
}
increas(obj);
console.log(obj);

function Belajar(){
    const a = "belajar Javascript";

    if (a === "belajar Javascript") {
        console.log("oke");
    }else{
        console.log("gagal");
    }
}
Belajar();

const isa = [
    {name :"isa",age:15},
    {name :"adik",age :7}
];

let isaFamilly = isa.map(isa => isa.name);

console.log(isaFamilly);