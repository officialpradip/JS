//var is accessiable inside all function block
//prefer usage of let
//const to define constant
function sayHello(){
    for(let i=0; i<5; i++){
        console.log(i);
    }
    //console.log(i)
}

sayHello();

//use of let to re-assigne variable
const x=1;
//x=2
console.log(x)