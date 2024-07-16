//Loops
//For Loop
for(let i=1;i<11;i++){
    console.log(i,'');
}
let mul = 5;
for(let i=1;i<11;i++){
    console.log(`${mul}*${i}=${mul*i}`);
}

//While loop
let sum=0;
let i=1;
let n =10
while(i<=n){
    sum+=i;
    i++
}
console.log(sum);

let j=10;
let m =1
while(j>=m){
    console.log(j);
    j--;
}

//Do while loop
let a=1;
do{
    console.log(a);
    a++;
}while(a<=5);

let result = 1; 
let b = 5; 

do {
    result *= b;  
    b--;  
} while (b > 0);  
console.log(result); 

//pattern
for (let i = 0; i < 5; i++) {
    let row = '';  
    for (let j = 0; j <= i; j++) {
        row += '*'; 
    }
    console.log(row);  
}

//loop control statements
for(let i=1;i<11;i++){
    if(i==5)
        continue;

    console.log(i,'');
}
for(let i=1;i<11;i++){
    if(i==7)
        break;

    console.log(i,'');
}