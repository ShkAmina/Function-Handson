// Que-1
function ABC()
{
    let A = 2;
    let B = 2;
    let C = A+B;
    console.log(C);
}
ABC();


// Que-2

function sum(A,B)
{
    console.log(`Sum of 3 , 4 is ${A+B}`);
}
 sum(3,4);


// Que-3

let add = () => { 
    num1=6;
    num2=6;
    num3=num1+num2;
   console.log(num3) ;
}
add();

// Que-4
var x = 21;
function girl() {
    console.log(x);
    var x = 20;
}
girl ();

// Que-5


var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};


// Que-6

var x = 21;
a();
b();

function a() {

    x = 20;
    console.log(x);
};
function b() {

    x = 40;
    console.log(x);
};


// Que-7

function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }

  console.log(factorialize(5));

// DAy-2
// Que-1

function FindSum(a, b) {
    return a + b;
}

function DisplayData(data, batch) {
    console.log(`i am from ${data} and My batch is EA${batch}`)
}

DisplayData("PrepBytes", FindSum(10, 9));

// Que-2

Abc();
const Abc = function () {
    let value = 20;
    console.log(value);
}


// Que-3



var a = 10;
(function (){
    console.log(a);
    var a = 20;
})();


// Que-4


const greet =  function(name){
    return function(m){
    
        console.log(`Hi!! ${name}, ${m}`);
    }
}
  
const greet_message = greet('EA19');
greet_message(""Welcome To PrepBytes"")