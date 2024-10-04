let choice; 
let numUser;
let numPc;
let numSum;
let evenoddResult;

choice=prompt("Scegli tra pari e dispari") //facciamo scegliere tra pari e dispari all'utente
choiceUp=choice.toUpperCase(); //in modo tale che le maiuscole non influiscono nella scelta
if(choiceUp!="PARI" && choiceUp!="DISPARI"){ //se sara diverso di pari o dispari il codice non andra avanti
    alert("scegliere tra pari e dispari")
    throw new Error("Devi scegliere tra pari e dispari")
}

numUser=prompt("Scegli un numero tra 1 e 5") //facciamo scegliere un numero tra 1 e 5
numUser=+numUser //lo trasformiamo in un numero
console.log(numUser);

if(numUser>5 || numUser<1){ //se il numero sarà piu grande di 5 o piu piccolo di 1 il codice non andra avanti
    alert("scegliere un numero tra 1 e 5")
    throw new Error("Devi scegliere un numero tra 1 e 5")
}

function rndNum(num){ //usiamo una funzione per generare un numero casuale
    num=Math.floor(Math.random() * 5) + 1;
    return num;
}
numPc=rndNum()
numPc=+numPc //trasformiamo anche questo in un numero
console.log(numPc);

numSum=numUser+numPc
console.log(numSum);
alert(`io ho scelto il numero ${numPc} e la somma è ${numSum}`)

function evenodd(evenoddNum){ //usiamo questa funzione per assegnare a evenoddNum il valore "Pari" o "Dispari"
    if(numSum%2==0){
        evenoddNum="PARI"
    }else{
        evenoddNum="DISPARI"
    }
    return evenoddNum;
}

evenoddResult=evenodd()

if(choiceUp==evenoddResult){ //qua decidiamo chi vince
    alert("Hai vinto tu!")
}else{
    alert("Ho vinto io!")
}

