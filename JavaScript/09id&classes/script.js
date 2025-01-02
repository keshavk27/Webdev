console.log("hello")

let box=document.getElementsByClassName("box")       //selecting by class
console.log(box)

box[2].style.backgroundColor="red"

let box1=document.getElementById("alaghai")      //selecting doc by ids
console.log(box1)

box1.style.backgroundColor="green"


console.log(document.querySelectorAll(".box"))       //returns multiple elements in node list

console.log(document.getElementsByTagName("div"))