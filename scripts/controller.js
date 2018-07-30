import renderer from './view/renderer.js'
import service from './service/service.js'
import playerControl from './service/playerControl.js'
import AIControl from './service/AIControl.js'

const width = document.getElementById('gameArea').width,
    height = document.getElementById('gameArea').width;

(function resize() {
    document.getElementById('gameArea').style.width = width;
    document.getElementById('gameArea').style.height = height;
}());

var gameArea = document.getElementById('gameArea');

var gameRenderer = new renderer(gameArea, width, height);
var gameService = new service(gameRenderer.refresh);

gameRenderer.refresh();

document.querySelector("#gameArea").addEventListener("click", (e) => {
    gameService.mouseClicked(e.offsetX, e.offsetY);
});