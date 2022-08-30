const log=console.log
let person ={}

Object.defineProperty(person, "name",{
    value:"Ram",
    writable:false
})
person.name="Sam"
log(person)
log(person.name)