const user={
    username:"keshav",
    price: 222,
    
    welcomemessage: function(){
        console.log(`Hi ${this.username} ,welcome to website`)
        console.log(this)
    }

}

user.welcomemessage()
user.username="kumar"
user.welcomemessage()

console.log(this)           //refers to empty object but in browser it refers to the window