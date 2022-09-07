//includes
const log=console.log
const fruits=["Apple","Banana","Cherry","Dates","Elderberry"]
log(fruits)

const result =fruits.includes("Apple")
const result1 =fruits.includes("Apple",2) //2 checks the position
log(result)
log(result1)