// funzione random
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

//fn che si avvia al termine del countdown
const whenTimeIsOut = () => {

    // console.log("sono passati 10 secondi");
    //pulisco il countdown
    clearTimeout(countDown);
    let cont = 0; //imposto un contatore per chiedere all'utente 5 volte un numero

    //popolo l'altro array solo con i numeri indovinati che inserisce l'utente
    do 
    {
        let temp = parseInt(prompt("inserire numero"));
        // userNums.push(temp);
        if ( (randomNums.includes(temp)) && !(userNums.includes(temp)) )
            userNums.push(temp);
        cont++;
    } 
    while (cont < 5)
    
    console.log(userNums);

    alert(`Hai indovinato ${userNums.length} numero/i. Numero/i indovinato/i: ${userNums}.`);
}

//inizializzo i due array che mi servono: uno per i num random da indovinare, l'altro per le risposte dell'utente
const randomNums = [], userNums = [];

// richiamando la fn random, popolo l'array con 5 numeri random interi da 1 a 100
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
const countDown = setTimeout(whenTimeIsOut, 30000);