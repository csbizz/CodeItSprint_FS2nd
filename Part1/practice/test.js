const numbers = [1,2,3,4];

const fac = numbers.reduce((acc,e,i,arr) => acc + 2*e, 0);

console.log(fac);
