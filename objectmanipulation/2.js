//Accessing Object Properties:
const log=console.log

const user = {
    name: "Talha",
    age: 26,
    marks: {
      math: 20,
      eng:30
    }
  };

log(user.marks.eng)
log(user["marks"]["eng"])

//Get Values(keys)from an Object
const userobj=Object.values(user)
log(userobj)