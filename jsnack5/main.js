//console.log('test');
/* 
//- Crea un array vuoto.
const emptyArray = [];

//- Chiedi per 6 volte all’utente di inserire un numero,
for (let i = 0; i < 6; i++) {
    const userNumber = Number(prompt("inserisci il numero"));

    if (userNumber % 2 === 0) {
        //controllo se é divisibile per 2, quindi pari

    } else {
        //- se è dispari inseriscilo nell’array
        emptyArray.push(userNumber)
    }
    
}

console.log(emptyArray); 
*/

//- Crea un array vuoto.
const emptyArray = [];
let i = 0
while (i < 6) {
    //- Chiedi per 6 volte all’utente di inserire un numero,
    const userNumber = Number(prompt("inserisci il numero"));

    if (userNumber % 2 === 0) {
        //controllo se é divisibile per 2, quindi pari

    } else {
        //- se è dispari inseriscilo nell’array
        emptyArray.push(userNumber)
    }

    i++

}

console.log(emptyArray); 