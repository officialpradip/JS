//isfrozen
const log=console.log

const user1 = {
    age: 26,
    mobile: 8801967402131,
    name: "Talha"
  }

  
  log(Object.isFrozen(user1))
  Object.freeze(user1)
  log(Object.isFrozen(user1))
  