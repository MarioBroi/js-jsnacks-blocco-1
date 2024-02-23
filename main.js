//console.log('test');

//- Chiedere 2 parole con 2 prompt e salvarle
const parola1 = prompt("Inserisci una parola");
const parola2 = prompt("Inserisci un'altra parola");
console.log(parola1, parola2);

//- Controllare quale delle 2 parole é piú lunga

//  - Se la prima parola é piú lunga allora stampare la prima parola
if (parola1.length > parola2.length) {
    console.log(parola1, parola2);

    //  - Se la seconda parola é piú lunga allora stampare la seconda parola    
} else if (parola2.length > parola1.length) {
    console.log(parola2, parola1);

    //  - Se le parole sono uguali allora stampare "Le parole sono di uguale lunghezza"
} else {
    console.log("Le parole sono di uguale lunghezza");
}