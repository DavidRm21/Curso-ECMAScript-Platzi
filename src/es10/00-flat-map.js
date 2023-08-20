// flat
const array = [-4,-3,-2,-1,[0,2,4,6,[1,3,5,7]]];
console.log(array.flat(3));

// flatmap
const array1 = [-4,-3,-2,-1,0,2,4,6,1,3,5,7];
console.log(array1.flatMap(v => [v, v ** 2]));

