let initialWord; //dichiariamo la variabile iniziale

initialWord=prompt("Scrivi una parola") //chiediamo all'utente una parola
console.log(initialWord);

function reverseWord(wordReversed){ //attraverso una funzione capovolgiamo la parola
    wordReversed=initialWord.split('').reverse().join('');
    console.log(wordReversed);
    return wordReversed; //la funzione restituisce il valore di wordReversed
}

let wordReversed=reverseWord() //dichiariamo fuori dalla funzione wordReversed

if(initialWord==wordReversed){  //se initialWord e wordReversed sono uguali allora sono palindrome
    alert("La parola è palindroma")
}else{
    alert("La parola non è palindroma")
}