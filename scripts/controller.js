const width = document.getElementById('gameArea').width,
    height = document.getElementById('gameArea').width;

(function resize() {
    document.getElementById('gameArea').style.width = width;
    document.getElementById('gameArea').style.height = height;
}());

const renderer = require('./view/renderer.js');
const service = require('./service/service.js');
const playerControl = require('./service/playerControl.js');
const AIControl = require('./service/AIControl.js');

var gameArea = document.getElementById('gameArea');
var gameAreaGC = gameArea.getContext('2d');

var gameRenderer = new renderer(gameAreaGC, width, height);
var gameService = new service(gameRenderer.refresh);

gameRenderer.refresh();

document.querySelector("#gameArea").addEventListener("click", (e) => {
    gameService.mouseClicked(e.offsetX, e.offsetY);
});