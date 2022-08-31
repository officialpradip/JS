//arry destructure
const log=console.log
let person =["pradipthapa","kathmandu",23,9818979696,["BGVS","Ambition","ISMT"]]

//general way
// let name =person[0]
// let address =person[1]
// let age =person[2]
// let contact =person[3]

let[name,address,age,contact,[school,college,university]]=person

log(name)
log(address)
log(age)
log(contact)
log(school)
log(college)
log(university)


//function demo
function person_info(){
    return ["pradipthapa"]
}
let nam= person_info()
log(nam)