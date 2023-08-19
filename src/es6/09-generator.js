function* iterate(array){
    for (const value of array) {
        yield value;
    }
}

const iter = iterate(['Oscar', 'David', 'Ana', 'Sara', 'Ulises']);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
