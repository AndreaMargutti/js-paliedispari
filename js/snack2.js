// ! Second Snack
/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto.
*/

// # Fase di preparazione
//chiedo le informazioni all'utente
//scelta tra pari e dispari
const userChoice = prompt('Pari o Dispari?', 'pari').toLowerCase().trim();
console.log(userChoice);

//scegliere tra un numero da 1 a 5
const userNum = parseInt(prompt('Scegli un numero tra 1 e 5', 2));
console.log(userNum, typeof(userNum));

//creo la funzione per generare il numero del computer e sommarlo a quello dell'utente
let sum;
function getNumber() {
    //genero il numero per il computer
    const cpuNum = Math.floor(Math.random() * 5 + 1);
    console.log(cpuNum);
    //sommo il numero dell'utente e quello del computer
    sum = userNum + cpuNum;
    console.log(sum);
}

//creo funzione per verificare che la somma sia pari
let flag;
function isEven (finalNumber){
    if(finalNumber % 2 === 0){
        flag = 'pari'.toLowerCase().trim();
    } else {
        flag = 'dispari'.toLowerCase().trim();
    }
    console.log(flag);
}

//richiamo le due funzioni
getNumber();
isEven(sum);

// # Fase di output
//confronto il risultato
if(flag === userChoice){
    console.log('Hai vinto!');
} else {
    console.log('Hai perso!');
}