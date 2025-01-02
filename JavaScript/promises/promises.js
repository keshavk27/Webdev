//Promise 01
const promise1=new Promise(function(resolve, reject) {

    //do an async calls 
    //db calls, cryptography etc

    setTimeout(function() {
        console.log("task 01 is complete")
        resolve()
    }, 1000);
    
})

promise1.then(function(){           //resolve is connect through then
    console.log("Promoise 01 consumed")
})


//Promise 02
new Promise(function(resolve,reject){

    setTimeout(() => {
        console.log("task 2 complete")
        resolve()
    }, 2000);
}).then(function(){
    console.log("promise 2 consumed")
})


//Promise 03

const promise3=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username:"keshav",
                 email:"keshav@example"})
    }, 3000);

})

promise3.then(function(userdata){
    console.log(userdata)
    console.log("Promise3 is consumed")
})


//Promise 04

const promise04=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=false;
        if(!error){
            resolve({username:"keshav",
                email:"keshav@example",
                Password:"1234"})
        }
        else{
            reject("error 404")
        }
        
    }, 4000);
})

promise04
.then(function(userdata){
    return userdata.username
})
.then((username)=>{
    console.log(username)
})
.catch(function(e){
    console.log(e)
})
.finally(()=>{
    console.log("Finally promise04 is consumed")
})



//Promise 05

const promise05=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=true;
        if(!error){
            resolve({username:"kk",
                email:"keshav@example",
                Password:"1234"})
        }
        else{
            reject("error 404 :something went wrong")
        }
        
    }, 5000);
})

async function consumepromise(){
    try{
        const response= await promise05
        console.log(response);
    
    }catch(e){
        console.log(e)
    }
}

consumepromise()


// async function getalluser() {
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')

//         // console.log(response)

//         const data=response.json()
//         console.log(data)
    
        
//     } catch (error) {
//         console.log(error)
        
//     }
    
// }
// getalluser()