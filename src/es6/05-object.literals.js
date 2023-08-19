// object.literals
function newUser(user, age, country, id){
    return{
        user,
        age, 
        country,
        id
    }
}

console.log(newUser('GNDX', 34, 'MX', 1));