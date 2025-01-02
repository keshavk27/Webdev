let div=document.createElement("div");
div.innerHTML="i have inserted"
div.setAttribute("class","created");
document.querySelector(".container").append(div);

let demo=document.querySelector(".container");
demo.insertAdjacentHTML("beforebegin","<b>this the demo </b>")

demo.insertAdjacentHTML("afterend","<b>this is another demo</b>")

document.querySelector(".container").classList;