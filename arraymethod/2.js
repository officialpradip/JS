
let a=[1,2,"Hello",true]

let b=a[Symbol.iterator]()
console.log(b.next())
console.log(b.next())
console.log(b.next())
console.log(b.next())
console.log(b.next())

//.at

let demo=[10,20,30,40]

console.log(demo.at(-1))

//function to return last item
function last(demo){
    return demo.at(-1)
}
let w=last(demo);
console.log(w)

//getting last item
const item1 = last(demo);
console.log(item1)

//adding items
demo.push(50) //.push to add elements
console.log(demo)

console.log(demo.slice(-2,-1))