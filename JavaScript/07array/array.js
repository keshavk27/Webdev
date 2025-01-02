let arr = [1, 2, 5, 6, 9];
let a1=[6,8,10,99]

console.log(arr);
console.log(arr.length);
console.log(arr[1]);

arr[0] = 8;
console.log(arr[0]);
console.log(arr);      //arrays are mutable in javascript

console.log(typeof arr)

//Methods of array

arr.toString;
console.log(arr.join(" and "))
console.log(arr.pop())
arr.push(100)
console.log(arr)
arr.push("keshav")
console.log(arr)
arr.reverse()
console.log(arr)

delete arr[5]        //memory is still allocated to that place but element is deleted
console.log(arr)

console.log(a1.concat(arr))

//Loops in array
for(let i=0;i<a1.length;i++)
    {
        let x=a1[i];
        console.log(x);
    }

    a1.forEach((value,index,arr)=>{
        console.log(value,index,arr)
    })


    