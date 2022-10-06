
var bg;
var ground, ground_img;
var nuvem_img;
var moeda1_img, moeda2_img;
var obs_img

function preload(){ // função que carregar todas as imagens e animações
  bg = loadImage("assets/bg.png")
  ground_img = loadImage("assets/ground.png")
  nuvem_img = loadImage("assets/nuvem.png")
  moeda1_img = loadImage("assets/moeda.png")
  moeda2_img = loadImage("assets/moeda2.png")
  obs_img = loadImage("assets/obstaculo.png")

}

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(100,100);
  
 
}

function draw(){
  background("black");
  drawSprites(); 
 
  text(mouseX+","+mouseY, mouseX, mouseY)
}

