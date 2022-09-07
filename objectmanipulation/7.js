//sealing an object avoid adding new properties

const log=console.log

const user1 = {
    age: 26,
    mobile: 8801967402131,
    name: "Talha"
  }

Object.seal(user1)
user1.address="ktm"
log(user1.age)
log(user1.address)
  