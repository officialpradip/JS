//callback function passing one function as paramater to another function

const log= console.log

function sayHello(){
    log("Hello")

}

function sayHi(){
    log("this is sayhi")

}

function add(num1,num2,hello,hi){
    log(num1 +num2)
    log(hello)
    hello()
    hi()
}
let a=20
let b =30
add(a,b,sayHello,sayHi)