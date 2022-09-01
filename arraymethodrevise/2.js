//constructor
const log =console.log
let a=[1,2,3,4,56]
let b =a.constructor

log(b)
log(b +"this is type of "+ typeof  b)

//push
const address=["kathmandu","pokhara","illam","sindhupalchok"]
const add=address.push("pkr")
log(address)
log("this is add "+add)
log( typeof add)

//copyWithin
const fruits=["Apple","Banana","Cherry","Dates","Elderberry"]
const upgrade=fruits.copyWithin(2,0,3) 
//target i,e where to copy
//start i.e start index default is 0
//end i.e end position items from end position will not display
log(upgrade)


let arr=[]
log(arr.length)
//arr.length=6
let z =arr.push(1,2,3,4,5,6)
log(arr)
log(arr.length)
log(arr[0])
