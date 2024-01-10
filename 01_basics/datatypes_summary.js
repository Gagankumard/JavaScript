// primitive

// 7 types -->string , Number,boolean,null(empty),undefined,symbol,
// BigInt

const score=200;
const string="gagan"
const inLoggedIn= false;
const outSideTemp=null;
// const userEmail=undefined;
let userEmail; //undefined


const bigNumber=31531548456456n;


console.log(typeof(bigNumber));

// Reference (Non primitive)

//Array,objects ,functions


const heros=["gagan","anil","shaktiman","naagraj"];

let obj={
    name1:"gagan",
    age:22,
}

const a =function (){
    console.log("helloo");
};




// stack(primitive)  ,Heap(non-primitive)
let name123="gagan";

let anothername=name123;
anothername="kumar";

console.log(name123);
console.log(anothername);



let oneone={
    name:"gagan",
    email:"gaga@gmail.com",
    upi:"gaga@ybl",
};

let twotwo=oneone;

twotwo.name="kumar"


console.log(twotwo.name);
console.log(oneone.name);