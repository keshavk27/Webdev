// console.log("harry is a hacker")
// console.log(("rohan is a hecker"))

// setTimeout(()=>{console.log("i am inside timmer")},2000);

// console.log("timier k baad wala hai")


const callback=(arg)=>{
    console.log(arg)
}
const loadscript = (src,callback)=>{
    
    let sc=document.createElement("script");
    sc.src=src;
    sc.onload=callback("harry")
    
    document.head.append(sc);


}
loadscript("https://en.wikipedia.org/wiki/Harry_Potter",callback)