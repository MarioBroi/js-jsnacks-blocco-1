//console.log('test');

/* let numbers = [];
let sum = 0
for (let i = 0; i < 10; i++) {
    const userNumber = Number(prompt("Inserisci il numero"));
    numbers.push(userNumber);
    sum += numbers[i];
}
console.log(sum); */

let numbers = [];
let i = 0
let sum = 0;
while (i < 10) {
    const userNumber = Number(prompt("Inserisci il numero"));
    numbers.push(userNumber);
    sum+= numbers[i]
    i++
}
console.log(sum);