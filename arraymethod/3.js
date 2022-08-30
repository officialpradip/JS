const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);

//three arrays concat

let a=[1,2]
let b=[2,3]
let c=[3,4]
let res =a.concat(b,c)
console.log(res)
console.log(res.concat(5,[6,7,8,9]))


const num1=[[1]]
num1[0].push(4)
console.log(num1)

const num2 = [2, [3]];
num2[1].push(4)
console.log(num2)

const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, 
    [Symbol.isConcatSpreadable]: true };

console.log([0].concat(obj1, obj2));

const arr = [1,2,3,4,5];
console.log(arr.copyWithin(0,1,1))