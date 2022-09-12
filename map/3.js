//callback certain elements in an array
const num=[1,2,3,4]
num[1]=10
console.log(num)

const sq=num.map(n=>{return n%2===1? Math.sqrt(n):n})
console.log(sq)