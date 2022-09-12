//reformat objects in an array

var demo=[{
    id:1,
    name:"sam",
    caste:"Doe"
},
{
    id:2,
    name:"sham",
    caste:"Joe"
},
{
    id:3,
    name:"shyam",
    caste:"Lama"
},
]

let change=demo.map(fullname=>{
    let newObje={};
    newObje["fullname"]=fullname.name + " "+ fullname.caste;
    return newObje;
})
console.log(demo)
console.log(change)