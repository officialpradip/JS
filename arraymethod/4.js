//join
const elements= ['fire','Air','water']

console.log(elements.join());// join all the elements
console.log(elements.join("  ")); //elements by seperated whitespace
console.log(elements.join("-")); //elements join by -between elements

const a = ['Wind', 'Water', 'Fire'];
console.log(a.join());
console.log(a.join('+'));
console.log(a.join("+"))


function f(a, b, c) {
    const s = Array.prototype.join.call(arguments);
    console.log(s); // '1,a,true'
  }
f(1, 'a', true);
