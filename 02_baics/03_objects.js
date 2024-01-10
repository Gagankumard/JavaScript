// singleton

// object literals
const mysys=Symbol("key");

const jsuser ={
name:"Gagan",
"Full name":"Gagan_kumar",
mysys:"keyyy1230",
age:15,
location:"Mysore",
email:"gaga@gmail.com",
isloggedIn:false,
}

// console.log(jsuser.name);
// console.log(jsuser["email"]);
// console.log(jsuser.email);
// console.log(jsuser[mysys]);



jsuser.email="gagaggagga@gmail.com";
// Object.freeze(jsuser);
jsuser.email="vavgvahvaj@gmail.com";
// console.log(jsuser);




jsuser.greeting =function(){
    console.log("Hello iam here to learn Objects..");

}

jsuser.greeting2 = function(){
    console.log(`hello js user ${this.name}`);
}


console.log(jsuser.greeting2());
console.log(jsuser.greeting());