//Functions
// Activity 1: Function Declaration
function checkNum(n){
    if(n%2==0){
        // return (`${n} is a even number`);
        console.log(`${n} is a even number`);
    }else{
        // return (`${n} is a odd number`);
        console.log(`${n} is a odd number`);
    }
}
checkNum(56);
console.log("****************************");
function squareNum(n){
    console.log(`square of ${n} is ${n**2}`);
}
squareNum(23);

//Activity 2: Function Expression
console.log("****************************");
function maxNum(a , b){
    console.log((a > b) ? a : b);  
}
maxNum(45,67);
console.log("****************************");
function concatString(a,b ){
    console.log(a+' '+b);
}
concatString("sachin","singh")
console.log("****************************");
//Arrow Function 
const sum = (a,b)=>  a+b;

console.log(sum(23,23));
console.log("****************************");

const character = (str, char) => str.includes(char);
console.log(character("sachin singh", "n"));
console.log("****************************");

//Function Parameters and Default Values
const mul = (a,b=1) => a*b;
console.log(mul(5,4));
console.log("****************************");

const greetings = (name,age=32) => console.log(`Hello ${name} and your ${age}`);

console.log(greetings("bharat","21"));
console.log(greetings("bharat"));
console.log("****************************");

//High-order functions
function printt(){
    console.log("a"); 
}

function HighOrder(fn , n){
    for(let i =0 ; i<n ;i++){
        fn();
    }
}
console.log(HighOrder(printt,4));

console.log("****************************");

function HighOrder1(fn1, fn2, value){
    return fn2(fn1(value));
};

function square(value){
    return value**2;
}
function double(value){
    return value*3;
}

console.log(HighOrder1(square, double, 2));