//convert a string to an array

const log=console.log

const language="Javascript"
const map=Array.prototype.map
const letters = map.call(language,eachLetter=>{
    return `${eachLetter}`
})
log(letters)