
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
function randomCpuInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}






function numbEvenGame(numb, bet) {
    let cpuNumber = randomCpuInt(1, 5);
    //Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    let sum = numb + cpuNumber;
    let checkBet = true
    //console.log(sum);

    if (sum % 2 != 0 && bet != 'dispari') {
        checkBet = false;
    } else if (sum % 2 == 0 && bet != 'pari') {
        checkBet = false;
    }

    //Dichiariamo chi ha vinto.
    const winnerEl = document.querySelector('h2');
    const winnerTextEl = document.getElementById('result');
    if (checkBet) {
        winnerEl.innerHTML = 'HAI VINTO!';
        winnerTextEl.innerHTML = `Il numero segreto era ${cpuNumber} e la somma con il tuo numero è ${sum}`;
    } else {
        winnerEl.innerHTML = 'HAI PERSO!';
        winnerTextEl.innerHTML = `Il numero segreto era ${cpuNumber} e la somma con il tuo numero è ${sum}`;

}
}

const formEl = document.querySelector('form');

formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    //L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    let inputNumber = Number(document.getElementById('input-numb').value);
    let inputBet = document.getElementById('game').value;
    numbEvenGame(inputNumber, inputBet);
}) 