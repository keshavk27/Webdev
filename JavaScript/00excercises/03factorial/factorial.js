function fact(x) {
    if (x == 0 || x == 1) {
        return 1;
    }
    else {
        return x * fact(x - 1);
    }


}

let n = parseInt(prompt("enter the number to calculate factorial:"));

if (n < 0) {
    console.log("not defined");
}
else {
    console.log(`factorial of ${n} is ${fact(n)}`);
}