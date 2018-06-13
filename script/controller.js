const renderer = require('./renderer.js');
const service = require('service/service.js');
const playerControl = require('service/playerControl.js');
const AIControl = require('service/AIControl.js');
const remote = require('electron').remote;

var gameArea = document.getElementById('gameArea');
var gameAreaGC = gameArea.getContext('2d');

var gameService = new service();
var gameRenderer = new renderer(gameAreaGC, gameService);

