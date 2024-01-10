// dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


// let mynewDate=new Date(2023, 0, 23)
// let mynewDate=new Date(2023, 0, 23,5,3)
let mynewDate=new Date("2023-01-14")

// console.log(mynewDate.toLocaleString());


let myTime =Date.now();
// console.log(myTime);
// console.log(mynewDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth());
console.log(newdate.getDay());


newdate.toLocaleString('default',{
    weekday:'long',
    timeZone:'UTC',
});

console.log(newdate.getMonth());