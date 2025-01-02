let obj={
    a:5,
    b:"keshav"
}

console.log(obj);


let animal={
    eats:true
}
let rabbit={
    run:true

}

rabbit.__proto__=animal;          //prototypal inheritance

console.log(rabbit.eats);

class Animal
{
    constructor(name)
    {
        this.name=name;
        console.log("constructor is created");
    
    }
    eats(){
        console.log("khana kha rha hai\n");
    }

    jumps()
    {
        console.log("jumps to the mauntain");
    }

}

let x=new Animal("bunny");

console.log(x.jumps());
console.log(x.name);

class Lion extends Animal{         //inheritence

}

let l=new Lion("sheru");
console.log(l.name);