var garde,garden1;
var cat,cat1,cat2,cat3,cat4;
var mouse,mouse1,mouse2,mouse3,mouse4;
function preload() {
    //carregue as imagens aqui
    mouse1 = loadImage("images/mouse1.png");
    mouse2 = loadImage("images/mouse2.png");
    mouse3 = loadImage("images/mouse3.png");
    mouse4 = loadImage("images/mouse4.png");

    garden1 = loadImage("images/garden.png")

    cat1 = loadImage("images/cat1.png");
    cat2 = loadImage("images/cat2.png");
    cat3 = loadImage("images/cat3.png");
    cat4 = loadImage("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
   mouse = createSprite(800,600)
   cat = createSprite(200,600)

   cat.scale=0.2;
   mouse.scale=0.15;

   cat.addAnimation("gatosentado", cat1)
mouse.addAnimation("ratocumedo", mouse1)


}

function draw() {

    background(255);

    if (cat.x - mouse.x <(cat.width - mouse.width)/2) {
        cat.velocityX=0;
        cat.addAnimation("ultimogato", cat4);
        cat.changeAnimation("ultimogato")
        cat.x=300
        cat.scale=0.2;
    }
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    drawSprites();
}


function keyPressed(){
if (keyCode === LEFT_ARROW) {
mouse.addAnimation("ratoprvocando", mouse2)
mouse.changeAnimation("ratoprovocando");
mouse.framedeLay = 25;


cat.velocityX = -5;
}
  //Para mover e alterar a animação, escreva o código aqui


}
