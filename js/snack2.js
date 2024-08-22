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
const userChoice = prompt('Pari o Dispari?').toLowerCase().trim();
console.log(userChoice);
//scegliere tra un numero da 1 a 5
const userNum = parseInt(prompt('Scegli un numero tra 1 e 5'));
console.log(userNum, typeof(userNum));

