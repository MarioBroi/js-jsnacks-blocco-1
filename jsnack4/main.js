//console.log('test');

//- Indicare l'array con la lista invitati
const guestList = [
    'Mario',
    'Giovanni',
    'Ignazio',
    'Basilio',
    'Stefano',
    'Paride'
];

//- Chiedere a l'utente il nome e salvarlo come variabile
let userName = prompt('Inserisci il tuo nome');
console.log(userName);

let reply = "you are not invited";

//- Controlla se il nome combacia con la lista invitati
for (let index = 0; index < guestList.length; index++) {

    if (userName === guestList[index]) {
        reply = "You can join"
    }

}

//- dai una risposta all'utente

console.log(login);