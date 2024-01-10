const marvel_hero =["gagan","anil","akhil","amogh"];
const dc_heros=["superman","flash","batman"];

// marvel_hero.push(dc_heros);
// console.log(marvel_hero);


// const a=marvel_hero.concat(dc_heros);
// console.log(a);


const all_heroo =[...marvel_hero, ...dc_heros];
console.log(all_heroo);

const another_array=[1,2,3,[4,6,7],9,[4,2,1,[1,2]]]

const real_array=another_array.flat(Infinity);
console.log(real_array);

console.log(Array.isArray("gagan"));
console.log(Array.from("Gagan"));
console.log(Array.from({name:"gagan"}));  ///interesting


let score1=10;
let score2=20;
let score3=30;

console.log(Array.of(score1,score2,score3));
