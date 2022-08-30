let age=[10,30,20,60,90,55,66]
let sortage=age.sort()
console.log(sortage)

let asort=age.filter(ages => ages >=60);
console.log(asort)


let forage= age.forEach(function(ages,index){
    console.log(ages + " has index "+ index)

});