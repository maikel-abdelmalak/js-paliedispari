//chiedere all'utente un numero tra 1 e 5 e generare un numero random tra 1 e 5. Chiedere all'utente se sceglie pari o dispari, quindi fare la somma dei due numeri (giocata utente + giocata pc), quindi valutare se il risultato è pari o dispari e comunicare all'utente se ha vinto o meno

var scelta_utente = prompt('scegli pari o dispari');
console.log('hai scelto: ' + scelta_utente);
var numero_utente = parseInt(prompt('inserisci un numero tra 1 e 5'));
console.log('il tuo numero é: ' + numero_utente);


function random(min, max){
    var numero = Math.floor(Math.random() * (max - min + 1) + min);
    return numero;
}

numero_pc = random(1, 5);
console.log('il numero del pc è: ' + numero_pc);

totale = numero_pc + numero_utente;

resto = totale % 2;

if(resto == 0 && scelta_utente == 'pari'){
    document.getElementById('si').setAttribute('class', 'visible');
}else if (resto != 0 && scelta_utente == 'dispari'){
    document.getElementById('si').setAttribute('class', 'visible');
}else{
    document.getElementById('no').setAttribute('class', 'visible');
}
