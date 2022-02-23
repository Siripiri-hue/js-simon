// funzione random
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

//fn per controllare se i due array contengono gli stessi numeri nello stesso ordine
const equals = (a, b) => 
{ 
    if ((a.length === b.length) && (a.every((v, i) => v === b[i])) )
        return true;
    return false;  
}

//fn che si avvia al termine del countdown
const whenTimeIsOut = () => {

    // console.log("sono passati 10 secondi");
    //pulisco il countdown
    clearTimeout(countDown);
    let check; //inizializzo una variabile booleana

    //popolo l'altro array con i numeri che inserisce l'utente
    do 
    {
        let temp = parseInt(prompt("inserire numero"));
        userNums.push(temp);
    } 
    while (userNums.length < 5)
    
    console.log(userNums);
    
    // richiamo la fn per comparare i due array
    check = equals(userNums, randomNums);
    
    console.log(check);

    //se sono diversi
    if (!check)
        alert("Non hai indovinato!"); //stampo che l'utente non ha indovinato
    else
        alert("Hai indovinato!"); //altrimenti stampo che l'utente ha indovinato
}

//inizializzo i due array che mi servono
const randomNums = [];
const userNums = [];

// richiamano la fn random, popolo l'array con 5 numeri random interi da 1 a 100
do 
{
    let temp = getRandomInt(1,100);
    if (!randomNums.includes(temp))
        randomNums.push(temp);
} 
while (randomNums.length < 5)

console.log(randomNums);

//faccio l'alert dell'array da indovinare
alert(randomNums);

// imposto il time out di tot sec e richiamo la fn apposita
const countDown = setTimeout(whenTimeIsOut, 1000);