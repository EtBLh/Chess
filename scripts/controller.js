import renderer from './view/renderer.js'
import service from './service/service.js'
import playerStream from './service/playerStream.js'

//get gameArea from DOM
const gameArea = document.getElementById('gameArea');

//initialize all the class
const gameRenderer = new renderer(gameArea, width, height);
const gameService = new service(gameRenderer.refresh);
const assigner = new playerStream();

const width = gameArea.width,
    height = gameArea.width;

(function resize() {
    gameArea.style.width = width;
    gameArea.style.height = height;
}());

//initialize view
gameRenderer.refresh();

gameArea.addEventListener("click", (e) => {
    gameService.mouseClicked({x = e.offsetX,y = e.offsetY});
});