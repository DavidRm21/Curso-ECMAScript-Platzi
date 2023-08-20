const user = {
    gndx: {
        country: 'MX'
    },
    ana: {
        country: 'CO'
    }
}

console.log(user.name?.country || 'No existe el dato');