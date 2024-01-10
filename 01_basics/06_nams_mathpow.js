const num=100;
// console.log(num);

const balance=new Number(20);
// console.log(balance);

// console.log(balance.toString().length);

const one1 = 123.23;
// console.log(one1.toPrecision(2));


const hundred = 100000;
// console.log(hundred.toLocaleString('en-IN'));

// +++++++++++++++++++maths+++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.5));  //hifh value
console.log(Math.floor(4.5));  //low value
console.log(Math.min(5,2,1,0,3));
console.log(Math.max(1,5,4,2));


console.log((Math.random()*6)+1);
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);



const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);