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
const fs=items.reduce(function(total,p){
    return p.price+total;
    
},0)
log(fs)
//arrow function
const aitems=items.reduce((total,item)=>{
    return item.price + total
},0)
log(aitems)
log(items)

