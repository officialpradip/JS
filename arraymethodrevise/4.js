//fill
//fill method fills the value in arrray on desired index
const log=console.log
const fruits=["Apple","Banana","Cherry","Dates","Elderberry"]
log(fruits)
//const result =fruits.fill("Fresh")
const update_result =fruits.fill("Fresh",0,4)

log(update_result)

//filter 
const age=[1,2,3,4,5,6,10]
const b=age.filter(ages=>ages>5)
log(b)

//find
const list=[1,2,3,4,5]
const r=list.find(result=> result>5)
log(r)
