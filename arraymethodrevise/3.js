//entries()
//The entries() method returns an Array Iterator object with key/value pairs:
const log=console.log
const fruits=["Apple","Banana","Cherry","Dates","Elderberry"]
const f=fruits.entries()
for(let x of f){
    log(x)

}

//every
//every checks all items to return true. if one faile return will be false
const ages = [32, 33, 16, 40];

const result=ages.every(checkAge)

function checkAge(age) {
  return age > 15;
}
log(result)