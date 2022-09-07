//freezing a object
//not allowing to change data
const log=console.log

const user1 = {
    age: 26,
    mobile: 8801967402131,
    name: "Talha"
  }
const result =Object.freeze(user1)
user1.age=30
log(user1.age)