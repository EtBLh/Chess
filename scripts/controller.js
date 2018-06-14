const initialize = require('./initialize.js');
const renderer = require('./renderer.js');
const service = require('./service/service.js');
const playerControl = require('./service/playerControl.js');
const AIControl = require('./service/AIControl.js');
const remote = require('electron').remote;

var gameArea = document.getElementById('gameArea');
var gameAreaGC = gameArea.getContext('2d');

var gameRenderer = new renderer(gameAreaGC);
var gameService = new service(gameRenderer.refresh);

