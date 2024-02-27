console.log('test');

//- Chiedi un numero di 4 cifre all’utente 
function getSumOfDigits(num) {

    let n = prompt("Type a 4-digit number");
    let sum = 0;

    //- calcola la somma di tutte le cifre che compongono il numero.
    while (n) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }

    return sum;
}

console.log(getSumOfDigits(1));