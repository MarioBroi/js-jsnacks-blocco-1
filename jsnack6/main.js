console.log('test');

/* const n = prompt('Inserisci un numero');
//- dove N è un numero indicato dall’utente.
let result = (n * n * n);

//- Stampa il cubo dei primi N numeri
console.log(result); */

/* let result = [];
let again;

while (again == true) {
    const n = prompt('Inserisci un numero');
    //- dove N è un numero indicato dall’utente.
    let cubed = (n * n * n);  
    again = confirm('do you want to write more numbers?');

} */

let n = Number(prompt("Enter a number"));

for (let i = 0; i < n; i++) {
    console.log(i ** 3);
}