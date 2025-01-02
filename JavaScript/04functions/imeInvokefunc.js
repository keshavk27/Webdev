(function chai(){
    //this is a named IIFE
    console.log("hello chai")
})
();          //we have to give a ; for ending the function

//syntax :- ()()

//this functions are used to invoke the function immedietly and also so that function get unaffected by global scope variables


((name)=>{
    console.log(`to kaise hai aap ${name}`)
})('keshav') 