function randGroup(){
    let random = getRandomInt(0, 100);
    let result = "";
    for(let i = 0; i < random; i++){
        result += getRandomInt(0, 1);
    }
    return result.toString();
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // Максимум не включается, минимум включается
}
function itDanger(){
    let situation = randGroup();
    let count = 1;
    for(let i = 0; i < situation.length - 1; i++){
        if(situation[i] === situation[i + 1])
        {
            count++;
            if(count >= 7)
            {
                console.log('YES');
                break;
            }
        } else {
            count = 1;
        }
    }
    if(count < 7){
        console.log('NO');
    }
}

itDanger();
