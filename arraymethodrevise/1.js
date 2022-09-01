//concat
const log=console.log
let a=[1,2,3,4,5]
let b=[6,7,8,9,10]
let c =a.concat(b)
log(c)

//spread operator
let d=[1,2,3,4]
let e=[...d]
d[0]=10
log(d)
log(e)

let info={
    fname:"pradip",
    lname:"thapa",
    age:20
}

let y={...info, isHere:"Yes"};

let z={...info,...y}
info['age']=30



console.log(z)