
// const giveLastName = (lastName) => {
//     return lastName
// }

// const sayHello = (name) => {
//     return `Hello ${name} ${giveLastName('de Leon')}!`
// }
// console.log(sayHello('Alan'));


/*
    input: integer
    output: integer

    base case : n === 1 -> return 1
    recursive case: n !== 1
    recursive step: n + rec_sum(n - 1)

*/

const rec_sum = (n) => {

    if (n === 1) return 1;

    return n + rec_sum(n - 1);

}

console.log(rec_sum(3));
