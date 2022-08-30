//filter
const log=console.log
const items=[1,2,3,4,5]
log(items)
//regular function
const fs=items.includes(0)
log(fs)
//arrow function
const aitems=items.reduce((total,item)=>{
    return item + total
},0)
log(aitems)
log(items)

