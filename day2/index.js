//activity 1
let a=12;
let b=34;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//activity 2 Assignment operator
let first=23;
let second =2;
second+=first;
console.log(first,second);
second-=first;
console.log(second);

//activity 3 comparison operator
let age1= 34;
let age2=43;
console.log(age1>age2);
console.log(age1<age2);
console.log(age1<=age2);
console.log(age1>=age2);

let sachin =22;
let ram = 22;
console.log(sachin==ram);
console.log(sachin===ram);


//activity 4 logical operators
let ramu=23;
let shamu=24;
if(ramu>18 && shamu>18){
    console.log("they are allowed to drink");
}else{
    console.log("they are not allowed");
}


let raj=23;
let kiran=3;
if(ramu>18 || shamu>18){
    console.log("they are allowed to drink");
}else{
    console.log("they are not allowed");
}

let raju=23;
if(ramu!=0){
    console.log("raju is  born");
}else{
    console.log("raju is not borned yet");
}

let mail=true;

let sent= (mail ==true) ? "mail is sent": "mail is not sent";
console.log(sent);