var goblin, coin

var goblinInfo = {
	x: 50,
	y: 50,
	width: 40,
	height: 60,
	speedX: 1,
	speedY: 1,
}

var coinInfo = {
	x: 200,
	y: 200,
	width: 32,
	height: 32,
}
var score = 0

function preload(){
	goblin = loadImage("goblin.png")
	coin = loadImage("goldCoin.png")
}

function setup() {
  createCanvas(300, 300);
  
}

function draw() {
  background(0);
	fill("white")
	text("SCORE: " + score, 20, 20)
	image(goblin, goblinInfo.x, goblinInfo.y, goblinInfo.width, goblinInfo.height)
	image(coin, coinInfo.x, coinInfo.y, coinInfo.width, coinInfo.height)


	
	arrows()
	goblinCoin()
	



}

function arrows(){
	if(keyIsPressed){
		if(keyCode == 39){
			goblinInfo.x += goblinInfo.speedX
		}
		else if(keyCode == 37){
			goblinInfo.x -= goblinInfo.speedX
		}
		else if(keyCode == 38){
			goblinInfo.y -= goblinInfo.speedY
		}
		else if(keyCode == 40){
			goblinInfo.y += goblinInfo.speedY
		}
	}
}

function goblinCoin(){
	if(collideRectRect(goblinInfo.x, goblinInfo.y, goblinInfo.width, goblinInfo.height, coinInfo.x, coinInfo.y, coinInfo.width, coinInfo.height)){
		score++
		coinInfo.x = random(0, width)
		coinInfo.y = random(0, height)

	}
}