//object in js is collection of key value pair
const person={
    name:"Pradip",
    //in js function inside object is considered as methods
    walk: function(){
        console.log("Walk fast")
    },
    talk(){} //anotherr way

}
console.log(person.name)
console.log(person['name'])
console.log(person.walk)

const targetMember="name";
person[targetMember.value]='John'
console.log(targetMember)