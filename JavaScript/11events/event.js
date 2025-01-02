let button = document.getElementById("btn");

// button.addEventListener("click", () => {
//     alert("i was clicked");
//     document.querySelector(".box").innerHTML = "<b>Bahut badhiya</b>"
// })

button.addEventListener("dblclick", () => {
    alert("to kaise hai aap");
})

document.addEventListener("keydown",(e)=>{
    alert(e.key);
})