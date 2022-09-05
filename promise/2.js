const log=console.log
const data=[
    {name:"Pradip",address:"ktm"},
    {name:"shyam",address:"pkr"}
]

//creating dunction
function getDatas(){
    setTimeout(()=>{
        let output="";
        data.forEach((d,index)=>{
            output+= `<li>${d.name}</li>`

        })
       document.body.innerHTML=output;

    },1000)

}

function createdata(newdata,callBack){
    setTimeout(()=>{
        data.push(newdata);
        callBack();

    },2000)

}
createdata({name:"hari",address:'prk'},getDatas)
//calling function
getDatas();