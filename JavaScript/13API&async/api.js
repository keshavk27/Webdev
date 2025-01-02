async function getdata() 
{
    let x = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)  //fetch API is builtin in javascript  
    let data = await x.json()
    return data

}

async function main() 
{
    console.log("loading...");
    let data = await getdata();     //wait for the data to fetch from json website
    console.log(data)

}
main()