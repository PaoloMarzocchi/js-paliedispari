//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
function randomCpuInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.


let cpuNumber = randomCpuInt(1,5);
//let cpuNumber = 3;
console.log(cpuNumber);
let inputNumber = 5;
let inputBet = 'pari';
let sum = inputNumber + cpuNumber;
let checkBet = true
console.log(sum);

if (sum % 2 != 0 && inputBet != 'dispari') {
    checkBet = false;
} else if (sum % 2 == 0 && inputBet != 'pari') {
    checkBet = false;
}


if (checkBet) {
    console.log('vinci');
} else{
    console.log('perdi');
}

