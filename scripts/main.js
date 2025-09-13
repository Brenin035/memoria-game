
function urlBuider(number){

    number+="";
    number = number.padStart(2, '0');

    return `imagens/heros/card${number}.jpg`;
}

let  card = new CardManager(urlBuider);
let board = new BoardManagar("board", 50, card);
