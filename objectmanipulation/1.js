const log=console.log

//object declaration two ways
let firstway = new Object();
let secondway={};

//declaring object type by writing constructor function
function demo(name,age){
    this.name=name;
    this.age=age
}
let result = new demo("Pradip",22)
log(result)

//
demo2={
    name:"Pradip",
    age:12
}