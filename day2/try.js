//The Difference Between Regular Functions and Arrow Functions
/*
-Arrow function is also known as fat arrow function
-new features in es6
-both regular and arrow function work in similar manner
*/
//1.  differences on syntax


//regular function

var add = function(x,y){
    return x + y;
}
//arrow function
let addition = (x,y) => {return x + y};
//or
let adds = (x,y) => x+y; //curly brackets aren't required
let squareNum =x => x*x; //parentheses are not required for one argument

let sayHi = _ => console.log("Js");

//2. arguments binding


/*
- Arrow functions do not have an arguments binding
  but access to the arguments objects of the closest non-arrow parent function
*/
//regular function

let myFunc={
    showArgs(){
        console.log(arguments);
    }
};
myFunc.showArgs(1,2,3,4);
//arrow function
let myFunction={
    showArgs : () =>{
        console.log(...arguments);
    }
};
myFunction.showArgs(5,6,7)

//3. Use of this keyword
/*
//arrow functions do not have their own this keyword
 */
let info = { 
    name: "ram",
    age:12, 
    thisInArrow:() => { 
    console.log("Hello I am " + this.name + ".I am "+ this.age); // 'this'not bind in arrow  function
    }, 
    thisInRegular(){ 
    console.log("Hello I am " + this.name + ".I am "+ this.age); // 'this' bind in regular function
    } 
   };

info.thisInArrow(); 
info.thisInRegular();

//4.Using new keyword
/*
'new' keyword can be used to call regular function
'new'keyword cannot be invoked in arrow function
arrow function not constructible
*/
let sub = (x,y) => console.log(x-y)
new sub(5,3)

//5. No duplicate named parameters
/* Arrow functions can never have duplicate named parameters */
let mul = (x,x) => console.log(x-x)