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
let mapitems=items.map(function(p){
    return p.price
})
log(mapitems)
//arrow
let maparrow=items.map(p=>p.name)
log(maparrow)
