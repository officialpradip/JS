//map
const log=console.log
const items=[
    {name:'Book', price:150},
    {name:'Copy', price:50},
    {name:'Pen', price:40},
    {name:'Pencil', price:10},
]
log(items)
//regular
let mapitems=items.forEach(function(p){
    log(p.name,p.price)
})
log(mapitems)
//arrow
let maparrow=items.forEach(p=>log(p.price))
log(maparrow)

//some
let notexpensive=items.some(function(p){
    return p.price<50
})
log(notexpensive)

let everynotexpensive=items.every(function(p){
    return p.price<50
})
log(everynotexpensive)