var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite (100,585,200,25)
    block2 = createSprite (305,585,200,25)
    block3 = createSprite (510,585,200,25)
    block4 = createSprite (715,585,200,25)

    block1.shapeColor = "green"
    block2.shapeColor = "yellow"
    block3.shapeColor = "darkblue"
    block4.shapeColor = "red"

    
    ball = createSprite(100,100,20,20)
    ball.shapeColor = "black"

    ball.velocityX = 5
    ball.velocityY = 8

    ball.x = Math.round(random(100,700))


}

function draw() {
    background(rgb(169,169,169));
    drawSprites ()
    edges = createEdgeSprites()
    
    ball.bounceOff(edges)
    
    if(ball.isTouching(block1))
    {
       ball.shapeColor = "green"
       music.play()
       ball.bounceOff(block1)
       
    }

    if(ball.isTouching(block2))
    {
       ball.shapeColor = "yellow"
       ball.velocityX = 0
       ball.velocityY = 0
       music.stop()
    }

    if(ball.isTouching(block3))
    {
       ball.shapeColor = "darkblue"
       music.play()
       ball.bounceOff(block3)
      
    }

    if(ball.isTouching(block4))
    {
       ball.shapeColor = "red"
       music.play()
       ball.bounceOff(block4)
       
    }

    //add condition to check if box touching surface and make it box
}
