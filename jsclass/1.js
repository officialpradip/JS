//class declarations
const log=console.log

class info{
    constructor(givenname,givenage,givensalary){
        this.givenname=givenname;
        this.givenage=givenage;
        this.givensalary=givensalary;
    }
    show(){
        return `I am ${this.name}`
    }
    salary(){
        return 1000 + this.salary;
    }
    static add(a,b){ //static doesn't required to be created new objects
        return a+b;
    }
}

let ram= new info("Ram",25,25000)
log(ram)
//accesing method
log(info.add(10,10))