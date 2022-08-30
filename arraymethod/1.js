//array methods
//length
const log=console.log
let address=["kathmandu","pokhara","bhaktapur"]
log(address) //displaying adress
log(address[0])//displaying first element from address
log(address.length)//calculating length of address
log(address[0].length) //calculating length of first element from address
log(address[0]="Kathmandu")
log(address)

//demo
const listA=[1,2,3]
const listB= new Array(10**2) //defining array length
//length always positive within range

log(listA.length)
log(listB.length)

//demo
const arr=[1,2,3,4,5]
log(arr)
log(arr.length)
arr.length=100
log(arr)

arr.forEach((element) => console.log(element));

//demo
const numbers = [1, 2, 3, 4, 5];
const length = numbers.length;
for (let i = 0; i < length; i++) {
  numbers[i] *= 2;
}
log(numbers)

//Shortening an array
const number = [1, 2, 3, 4, 5];
if (number.length >3){
    number.length=3;
}
log(number)
log(number.length)
//making empty array of fixed length

let empty_arr=[]
empty_arr.length=5
log(empty_arr)
log(empty_arr.length)