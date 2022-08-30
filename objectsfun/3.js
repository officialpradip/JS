
const log=console.log
const person = {};
log(person)
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

log(person)
log(person.age)

//demo
const person1 = {
    fname:"John",
    lname:"Doe",
    age:25
  }; 
  person1.nationality="US"
  delete person1.lname
  
  let txt = "";
  for (let x in person1) { //loop executed once for each loop
    txt += person1[x] + " ";
  }
log(txt)

//nested objects

firstobj={
    id:1,
    info:{
        name:"ram",
        address:"kathmandu"

    }
}
log(firstobj['info']['address'])
//or
log(firstobj.info.address)
