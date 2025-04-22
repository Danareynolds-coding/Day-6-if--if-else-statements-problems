// Problem1
let number=25;
if(number>0){
    console.log(`${number} is positive.`);
}else if(number<0){
    console.log(`${number} is negative.`);
}
else{
    console.log(`${number} is zero.`);
}
// Problem2


let score=83;
if (score>=90){
    console.log("Grade:A");
}
else if (score>=80){
    console.log("Grade:B");
}
else if (score>=70){
    console.log("Grade:C");
}
else if (score>=60){
    console.log("Grade:D");
}
else{
    console.log("Grade:F");
}

// Problem3
let eligibility=72;

if (eligibility>=65){
    console.log("Client is Eligible for Senior Citizen Discount.");
}else{
    console.log("Client is not Eligible for Senior Citizen  Discount.");
}
// Problem4
let hour=14;

if (hour > 5 && hour < 12){
    console.log("Good Morning!");
}else if (hour=>12 && hour<=17){
    console.log("Good Afternoon");
}else if(hour>=17 && hour<=21){
    console.log("Good Evening");
}else {
    console.log("Good Night");
}
// Problem5

let age=70;
if (age<=12){
    console.log("Price is $5.00");
}
else if (age<=64){
    console.log("Price is $12.00");
}else (age<=65);{
    console.log("Price is $8.00");
}

// Problem6
let weightKg=70;  //kilograms
let heightM=1.75;  //meter
let bmi=weightKg/(heightM*heightM);
if (bmi<18.5){
console.log("Person is Underweight");
}else if (bmi<25){
    console.log("Person is Normalweight");
}else if (bmi<30){
    console.log("Person is Overweight");
}else{
    console.log("Person is Obese");
}
// console.log(`BMI:${bmi.toFixed(1)}, Category:${category});
