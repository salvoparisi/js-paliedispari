let choice; 
let numUser;
let numPc;

choice=prompt("Scegli tra pari e dispari") //facciamo scegliere tra pari e dispari all'utente
choiceUp=choice.toUpperCase(); //in modo tale che le maiuscole non influiscono nella scelta
if(choiceUp!="PARI" && choiceUp!="DISPARI"){ //se sara diverso di pari o dispari il codice non andra avanti
    alert("scegliere tra pari e dispari")
    throw new Error("Devi scegliere tra pari e dispari")
}

numUser=prompt("Scegli un numero tra 1 e 5") //facciamo scegliere un numero tra 1 e 5
if(numUser>5 || numUser<1){ //se il numero sarà piu grande di 5 o piu piccolo di 1 il codice non andra avanti
    alert("scegliere un numero tra 1 e 5")
    throw new Error("Devi scegliere un numero tra 1 e 5")
}


