let arr=[5,9,7,86,41,10];

let newarr=[];
for(let i=0;i<arr.length;i++)
    {
        const x=arr[i];
        newarr.push(x**2);
    }
console.log(newarr)

//we can use a another method for this 

let newarray=arr.map((e)=>{
    return e**2

})
console.log(newarray)