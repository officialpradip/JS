const log=console.log

const user1 = {
    age: 26,
    mobile: 8801967402131,
    name: "Talha"
  }

  const user2={
    id:1,
    ...user1
  }

  log(user2.age)

const assignobj=Object.assign(user1,user2)
log(assignobj)
