//crivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato

function palindroma (parola){
    var x = (parola.length - 1);
    var risultato = false;
    for(var i = 0; i <= (parola.length / 2); i++){
        var read = parola.charCodeAt(i);
        var read_reverse = parola.charCodeAt(x);
        if (read == read_reverse){
            risultato = true;
        }else{
            risultato = false;
            return risultato
        }
        x--;
    }
        return risultato;
}

parola_utente = prompt('inserisci una parola');

risposta = palindroma(parola_utente);
console.log(risposta);
