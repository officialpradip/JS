//this keyword

const info={
    name:"pradip",
    walk(){
        console.log(this); //returns returns to the current objects
    }
}

info.walk();
console.log(info.walk())

const walk=info.walk.bind(info);
console.log(walk())

//strict mode execution of code in more protective way
//function in js are object