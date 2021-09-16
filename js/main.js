let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];

let direction = "direita"

snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobriha(){
    for(i=0; i<snake.length; i++){
        context.fillStyle = "black"
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

document.addEventListener("keydown", update)

function update(event){
    if(event.keyCode == 37 && direction != "direita") direction = "esquerda";
    if(event.keyCode == 38 && direction != "baixo") direction = "cima";
    if(event.keyCode == 39 && direction != "esquerda") direction = "direita";
    if(event.keyCode == 40 && direction != "cima") direction = "baixo";

}

function inicarJogo(){

    if(snake[0].x > 15 * box && direction == "direita") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "esquerda") snake[0].x = 16 * box;
    if(snake[0].y < 0 && direction == "cima") snake[0].y = 16*box;
    if(snake[0].y > 15 * box && direction == "baixo") snake[0].y = 0;


    criarBG();
    criarCobriha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "direita") snakeX += box;
    if(direction == "esquerda") snakeX -= box;
    if(direction == "cima") snakeY -= box;
    if(direction == "baixo") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead)

}

let intervalo = setInterval(inicarJogo, 100)
