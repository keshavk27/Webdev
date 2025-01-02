const randomcolor=function(){
    const hex="0123456789ABCDEF"
    let colour='#'
    for(let i=0;i<6;i++)
    {
        colour+=hex[Math.floor(Math.random()*16)]

    }
    return colour;

}
let count=0;
const changeColor = function () {
    let colour=randomcolor();
    document.body.style.backgroundColor=colour;
    count++
    console.log(`color changed ${count}`);
}

let intId;

const startbtn = document.querySelector('#start');
const stopbtn = document.querySelector('#stop');


startbtn.addEventListener('click', function () {
    intId = setInterval(changeColor, 1000)
})
stopbtn.addEventListener('click', function () {
    clearInterval(intId);
    intId=null;
    count=0;
})


