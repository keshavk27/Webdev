function calculate(...num1)         //for multiple values passed in function
{
    return num1
}

console.log(calculate(20,50,40))    //it put htem into array


//passing object in the function

function handleobj(anyobj)
{
    console.log(`user name is ${anyobj.username} and price is ${anyobj.price}`)

}

// const user={
//     username: "keshav",
//     price: 101
// }
// handleobj(user)


handleobj({        //passing object without creating it first
    username:"keshav",
    price:100
})

 
