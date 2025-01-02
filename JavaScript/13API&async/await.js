async function getdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(455)
        },3500); 
    })
 }

 
 async function main()
 {
    console.log("loading...");
    console.log("fetching data...");
   
    let data= await getdata()      //wait for getdata to execute
    console.log(data); 
    console.log("completed.");
 }

 main()
//  data.then((e)=>{
//     console.log("data loaded");
//     console.log("modules..");
//  })