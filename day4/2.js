//spread operator
/*
spread syntax allows an iterable such as an array expression or string to be expanded
in places where zero or more elements are expected or an object expression to be expanded 
in paces where zero or more key-value pairs are expected.

syntax ...demo
*/
const log = console.log
let a =[1,2,3,4]
let b=[5,6,7]
let c=[...a,...b]
a[0]=10;


log("this i a data "+a[0])
log("this i b data "+b[0])

log("this i a data "+a)
log("this i b data "+b)

log("this i c data "+c)


let info={
    fname:"pradip",
    lname:"thapa",
    age:20
}

let y={...info, isHere:"Yes"};

let z={...info,...y}
info['age']=30

console.log(info)
console.log(y)

console.log(z)

