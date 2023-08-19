class User{};

class user{
    greeting(){
        return 'Hello';
    }
};



class user {
    constructor(){
        console.log('nuevo usuario');
    }
    greeting(){
        return 'Hello';
    }
}

const hndx = new user(); 
console.log(hndx.greeting());
const developer = new user();
console.log(developer.greeting());
