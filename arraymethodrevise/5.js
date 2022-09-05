//foreach
const log=console.log
const fruits=["Apple","Banana","Cherry","Dates","Elderberry"]
log(fruits)

const result=fruits.forEach((fruit,index)=>log(index + ": " + fruit))
log(result)