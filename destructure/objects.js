//object destructure
const log=console.log
let person ={name:"pradipthapa",
address:"kathmandu",
age:23,
contact:9818979696,
education:{school:"BGVS",
college:"Ambition",
university:"ISMT"}}

let {name,address,age,contact,education:{school :schoolname,college,university}}= person
log(name)

log(schoolname)