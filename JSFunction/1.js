//function declaration
/*
SYNTAX
function functionName(parameters) {
  // code to be executed
}
*/

function myfunc(a,b){
    return a + b
}
demo= myfunc(4,4)
console.log(demo)

//global variable
let a=10
function addition(b){
    return a+b  //inside function
}

function subtraction(b){
    return a-b  //inside function
    
}
demo1=addition(1)
console.log(demo1)
console.log(a) //outside function

demo1=subtraction(5)
console.log(demo1)
console.log(a)


//local variable
function mul(b){
    let c=20
    return c*b
}

d=mul(4)
console.log(d)
//console.log(c)


//function inside function
function show(){
    var j=1
    console.log("this is j"+j)
    
    function display(a){
        i=2
        console.log("this is inner j"+j)
        return i+a
    }
    inner=display(2)
    console.log("this is inner"+ inner)
}
outer=show()



