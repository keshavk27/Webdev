const arr = [1, 5, 8, 7, 9, 3]

const result = arr.map((item) => {         //this is used for performing some oper on specific values
    return item + 3
})
console.log(result)


const arr2 = [1, 5, 8, 7, 9, 3]

const result2 = arr2.map((item2) => {         
    return item2 > 3                      //it will return true false instead of elements
})
console.log(result2)



const arr3=[2,5,7,9]

const newitem=arr3.map((item3)=>item3*2).map((item3)=>item3+2).map((item3)=>item3/10)
console.log(newitem)