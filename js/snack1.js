// ! First Snack
/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// # Fase di preparazione
//Chiedere la parola all'utente
const userWord = prompt('Dammi una parola').trim();
console.log(userWord);
//creo una variabile dove verrà inserita la parola al contrario
let reverseWord = '';

// # Fase di elaborazione dei dati
//dichiaro la funzione
function isPalindroma(word){
    let flag =false;
    //Analizzo tutta la parola
    for(let i = word.length - 1; i >= 0; i--) {
        //ne estraggo ogni singola lettera e la inserico in reverseWord
        reverseWord += word[i];
    }
    console.log(reverseWord);
    //se le due parole sono uguali cambio il risultato in "vero"
    if (reverseWord === word) flag = true;
    console.log(flag);
}

// # Fase di output
//richiamo la funzione assegnandole il valore di userWord
isPalindroma(userWord);