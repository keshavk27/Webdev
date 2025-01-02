console.log("this is promises")

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        console.log("Rejected...")
        setTimeout(()=>{
            reject("bhago");
        },2000);
    }
    else {
        console.log("Resolve is running...");
        setTimeout(() => {
            resolve("harry")
        }, 3000);
    }
})

prom1.then((a) => { 
    console.log(a)
}).catch((err) => { 
    console.log(err) 
});  