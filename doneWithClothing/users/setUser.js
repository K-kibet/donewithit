class User {
    
    constructor(name, imageURL, password){
        this.name = name,
        this.image = imageURL.User,
        this.password = password,
        this.key = this.setKey()
    }

    setKey(){
        const keyValue = this.name + this.password
        return keyValue

    }
}



const dom = new User("dom", "...", '*******')


console.log(dom)