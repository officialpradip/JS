//loose equality vs strict equality
/*
strict i.e === (triple equals)
loose i.e ==(double equals)
*/


console.log('0===0 =>',0 === 0)
console.log('0===0 =>',0 == 0)

console.log('{}==={} =>',{} == "{}")
console.log('a===a =>','a' == 'a')

console.log("apple"==="apple")
console.log(false===false)
console.log(false===0)
console.log([] === []) //empty array false as we are comparing the references


//difference between undefined and null

/*
undefined is a variable that refers to something that doesn't exist, and the variable isn't defined to be anything.
null is a variable that is defined but is missing a value.
*/
let a
console.log(a)

let b=null
console.log(b)

console.log(null == undefined); //true
console.log(null === undefined); //false