//class declaration

class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    //getter
    get area(){
        return this.calculate();
    }
    //method
    calculate(){
        return this.height * this.width
    }
  }

const square=new Rectangle(5,5)
console.log(square.area)


//
class Car{
    constructor(name,year){
        this.name=name
        this.year=year
    }
}

const carInfo=new Car("Honda",2022)
let carInfo1=new Car("Creta",2022)

//
hello = function() {
    return "Hello World!";
  }

add=function(num1,num2){
    return num1 + num2
}

add =(num1,num2) =>{
    return num1 + num2
}

let person={
    firstName:"Ram",
    lastName:"Shyam",
    fullname : () =>{
    return person.firstName + " " + person.lastName;
}
};
console.log(person.firstName)