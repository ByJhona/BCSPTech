let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let pontos = document.getElementById("pontos");
let box = 32;
let snake = [];
var cont = 0;
let direction = "direita"
pontos.innerHTML = cont;

let comidinha = {
    x: Math.floor(Math.random() * 15  + 1) * box,
    y: Math.floor(Math.random() * 15  + 1) * box
}

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

function criarComidinha(){
    context.fillStyle = "red";
    context.fillRect(comidinha.x, comidinha.x, box, box);
}


document.addEventListener("keydown", update)

function update(event){
    if(event.keyCode == 37 && direction != "direita") direction = "esquerda";
    if(event.keyCode == 38 && direction != "baixo") direction = "cima";
    if(event.keyCode == 39 && direction != "esquerda") direction = "direita";
    if(event.keyCode == 40 && direction != "cima") direction = "baixo";

}

function iniciarJogo(){
    
    if(snake[0].x > 15 * box && direction == "direita") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "esquerda") snake[0].x = 16 * box;
    if(snake[0].y < 0 && direction == "cima") snake[0].y = 16*box;
    if(snake[0].y > 15 * box && direction == "baixo") snake[0].y = 0;

    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert("Game Over :(");
        }
    }
    
    criarBG();
    criarCobriha();
    criarComidinha();
    

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "direita") snakeX += box;
    if(direction == "esquerda") snakeX -= box;
    if(direction == "cima") snakeY -= box;
    if(direction == "baixo") snakeY += box;

    if(snakeX == comidinha.x && snakeY == comidinha.y){
        cont++;
        pontos.innerHTML = cont;
        comidinha.x = Math.floor(Math.random() * 15  + 1) * box,
        comidinha.y = Math.floor(Math.random() * 15  + 1) * box
    }else{
        snake.pop();
    }


    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead)

}

let intervalo = setInterval(iniciarJogo, 100)
