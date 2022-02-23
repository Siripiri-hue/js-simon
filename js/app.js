function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

const randomNums = [];
do 
{
    let temp = getRandomInt(1,100);
    if (!randomNums.includes(temp))
        randomNums.push(temp);
} 
while (randomNums.length < 5)

alert(randomNums);