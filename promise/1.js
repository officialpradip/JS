const log=console.log
const data=[
    {name:"Pradip",address:"ktm"},
    {name:"shyam",address:"pkr"}
]

log(data)
const result =data.filter((address)=>{
    if(address.address==='pkr' || address.address==='ktm'){
        return true
    }
})
log(result)
log(data[0].name) //accessing data from array of objects