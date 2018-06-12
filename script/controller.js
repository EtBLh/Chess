const renderer = require('./renderer.js');
const service = require('./service.js');
const remote = require('electron').remote;

var gameArea = document.getElementById('gameArea');
var gameAreaGC = gameArea.getContext('2d');

var gameService = new service();
var gameRenderer = new renderer(gameAreaGC, gameService);

