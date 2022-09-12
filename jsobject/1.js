let student1={
    studentId:1,
    firstName:"Ram",
    lastName:"Thapa",
    department:'CS',
    email:"ram@gmail.com"
}

let student2={
    studentId:2,
    firstName:"Shyam",
    lastName:"Thapa",
    department:'CS',
    hobbies:["walking","gaming"]
}
let result=Object.assign(student2,student1)
//Object.assign(target,source1,source2)
console.log(student2)