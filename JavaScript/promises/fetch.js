fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
    return data[0].username
})
.then((username)=>{
    console.log(username)
}) 
.catch((error)=>{
    console.log(error)
});
 