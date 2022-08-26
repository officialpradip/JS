//difference between let const var
//1. Var
/*
#scope
var declarations are globally scoped or function/locally scoped
global scope= when declared outside a function
function/local scope=when decleared within a function
*/
var message="hello there"

function demo(){
    var hello="hello"
}
console.log(hello) //local scope get error
console.log(message) //global scope

// var variables can be re-declared and updated

var message="hi"
var message="how are you?"

var msg="heyy"
msg="hey there"

//hoisting of var

console.log(para)
var para="this is from"

//interpretion of above hoisting
var para
console.log(para)
para="this is from"


//2. Let
/*
let is block scoped
*/
let msg="hi"
let times=5
if (times >3){
    let there="hello there";
    console.log(there)
}
console.log(there)

//let canbe updated but not re-declared

let msg="hi"
let msg="hello how are you" //error returns

//no errors for same variable define in different scopes

let name="ram"
if(true){
    let name="shyam"
    console.log(name)
}
console.log(name)
//let declarations are hoisted on the top


//3. Const
/*block scoped: accessed within the blocked where they were declared
const cannot be updated or re-decleared
*/
const address="ktm"
address="kathmandu" //error

//hoisted to the top but are not initialized