//Control Structures
// Activity One- If else statements 
let num1=45;
if(num1==0){
    console.log("Number is zero");
}else if(num1<0){
    console.log("Number is negative");
}else{
    console.log("Number is positive");
}

let age=19;
if(age>=18){
    console.log("the person is eligible to votee");
}else{
    console.log("he is not eligible to vote");
}

//Activity 2 Nestes If-Else statements
let firstNumber =134;
let secondNumber =35;
let thirdNumber =78;

if(firstNumber>secondNumber){
    if(firstNumber>thirdNumber){
        console.log("first number is greatest");
    }else{
        console.log("third number is greatest");
    }
}else if(secondNumber>thirdNumber){
    if(secondNumber>thirdNumber){
        console.log("second number is greatest");
    }else{
        console.log("third number is greatest");
    }
}else{
    console.log("third is greatest");
}


//Activity 3 Switch case
let number=1;
switch(number){
    case 1:
        console.log("the day is monday");
        break;
    case 2:
        console.log("the day is tuesday");
        break;
    case 3:
        console.log("the day is wednesday");
        break;  
    case 4:
        console.log("the day is thursday");
        break; 
    case 5:
        console.log("the day is friday");
        break;
    case 6:
        console.log("the day is saturday");
        break;
    case 7:
        console.log("the day is sunday");
        break;
    default:
        console.log("the day is not defined");
}
let score=67;
let grade;
switch (true) {
    case (score >= 90):
        grade = 'A';
        break;
    case (score >= 80):
        grade = 'B';
        break;
    case (score >= 70):
        grade = 'C';
        break;
    case (score >= 60):
        grade = 'D';
        break;
    default:
        grade = 'F';
        break;
}
console.log(`grades are ${grade}`);

//Activity 4 conditional operator(ternary)
let num69=67;
let ans=(num69%2==0 ? "number is even" : "number is odd")
console.log(ans);

//Activity 5 Combining Conditions
let year =2100;
if( year%400==0){
    console.log(`${year} is leap year`);
}else if(year%4==0 && year%100!=0){
    console.log(`${year} is leap year`);
}else{
    console.log(`${year} is not leap year`);
}