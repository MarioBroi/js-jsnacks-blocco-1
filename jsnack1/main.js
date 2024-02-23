//console.log('Test');

//- Chieder 2 numeri tramite prompt
const numero1 = Number(prompt('Inserisci un numero'));
const numero2 = Number(prompt('Inserisci un secondo numero'));
//console.log(numero1, numero2);

//- IF numero1 é MAGGIORE di numero2
if (numero1 > numero2) {
    //    - stampare in console numero1
    console.log(numero1);

    //- ELSE IF numero2 é MAGGIORE di numero1
} else if (numero2 > numero1) {
    //    - stampare numero2
    console.log(numero2);

    //ELSE il numero é uguale
} else {
    //  - stampare 'Il numero é uguale'
    console.log('Il numero é uguale');
}