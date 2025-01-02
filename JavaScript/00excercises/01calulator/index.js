/*Faulty calcilator using javascirpt*/

let random = Math.random()

let a = prompt("Enter first number:")
let b = prompt("Enter second number:")
let c = prompt("Enter operation:")

let obj = {
    "+": "-",
    "-": "*",
    "*": "/",
    "/": "+"
}


if (random > 0.1) {
    //right calculation
    console.log(random)
    alert(`Result is ${eval(`${a} ${c} ${b}`)}`)   //works as a calculator

}
else {
    //wrong calculaiton
    c = obj[c];
    console.log(random)

    alert(`Result is ${eval(`${a} ${c} ${b}`)}`)

}    