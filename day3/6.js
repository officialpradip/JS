const person={
    talk(){
        var self =this;
        setTimeout(function(){
        console.log('self',self)
    },1000)
}
}
const result= person.talk();
console.log(result)