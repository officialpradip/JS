const log=console.log
let info={
    name:"Pradip"
}

const newPerson =Object.assign({},{
    name:"Pradip Thapa",
    age:24
})
log(info)
log(newPerson)

const easynewPerson={...newPerson}
log(easynewPerson)