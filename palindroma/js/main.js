// Chiedere all’utente di inserire una parola

const inputWord = prompt('Inserisci una parola e ti dirò se è un palindromo');

//  Creare una funzione per capire se la parola inserita è palindroma

/**
 * Controlla se una parola è palindroma e restituisce un alert con la risposta
 * @param {string} word 
 */ 
function palindromeWordTest(word) {
    let check = false
    const lastIndex = word.length - 1;
    let reverseWord = '';
    //console.log(word);

    for (let i = 0; i < word.length; i++) {
        reverseWord += word[lastIndex - i];
        //console.log(reverseWord);
    }
    //console.log(reverseWord);
    if (word == reverseWord) {
        alert(`La parola è un palindromo! ${word} è uguale al suo contrario ${reverseWord}`)
    } else {
        alert(`La parola non è un palindromo! ${word} non è uguale al suo contrario ${reverseWord}`);
    }
}

palindromeWordTest(inputWord);