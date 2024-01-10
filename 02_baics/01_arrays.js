// Arrays

const myarray=[1,2,3,4]
const arr=["a","c","ssas","bd"]


console.log(arr[1]);
console.log(myarray[2]);

// Array method


arr.push("gagan");
console.log(arr);

arr.pop();
console.log(arr);


// arr.unshift("kumar");
// arr.shift("jkbjbj");
console.log(arr);

console.log(arr.includes("kohli..."));  //false
console.log(arr.includes("a"));//true
console.log(arr.indexOf(0));




const newarr = myarray.join()
console.log(myarray);
console.log(typeof newarr);

// slice ,splice
console.log("A",myarray);

const myn1 = myarray.slice(1,3);
// console.log(myn1);
console.log("B",myarray);

// splice

const myn2 = myarray.splice(1,3);
console.log("Z",myn2);