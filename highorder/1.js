//highorder function

const log=console.log
const companies=[
    {name:"Google", category:"Product Based",established:1981},
    {name:"Amazon", category:"Product Based",established:1891},
    {name:"Paytm", category:"Service Based",established:2001},

]
log(companies.length)

const ages=[20,21,22,23,24,25,26,27,28]
log(ages.length)

for(i=0; i <=companies.length; i++){
    log("date from loop "+i)

}
//foreach
companies.forEach(function(company,index){
    log(company.name +" has "+ index +" index ")

})
companies.forEach((company,index)=>{
    log(company.category, index)
})

ages.forEach((age,index)=>log(age +" has index", index))

//filter
for(let i=0; i<=ages.length;i++){
    if(ages[i]>25){
        log(ages[i])
    }
}
//using filter in regular function
const age=ages.filter(function(age){
    if(age>25){
        return true;
    }
})
log(age)

//using filter in arrow function
const a=ages.filter(age=> age >25)
log("this is arrow age"+a)


const pb=companies.filter(function(company){
    if(company.category==="Product Based"){
        return true;

    }

})
log(pb)


const apb=companies.filter(company=>company.category==="Product Based")
log(apb)

//map
const m=companies.map(function(company,index){
    log(company)
})

const am=companies.map((company,index)=>{
    return `${company.name} ${company.category}` //string literals
})
log(am)

//sort
const sorted=companies.sort(function(c1,c2){
    if(c1.established > c2.established){
        return 1;
    }else{
        return -1;
    }

})
log(sorted)

const asorted=companies.sort((c1,c2)=>c1.established > c2.established ? 1:-1)
log(asorted)

const sortage=ages.sort((a,b)=>(b-a))
log(sortage)