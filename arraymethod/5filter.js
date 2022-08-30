//filter
const log=console.log
const items=[
    {name:'Book', price:150},
    {name:'Copy', price:50},
    {name:'Pen', price:40},
    {name:'Pencil', price:10},
]
log(items)
//regular function
const fs=items.filter(function(p){
    if(p.price<50){
        return true;
    }
})
log(fs)
//arrow function
const aitems=items.filter((item)=>{
    return item.price>50
})
log(aitems)
log(items)

