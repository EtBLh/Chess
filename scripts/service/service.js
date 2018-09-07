const dto = require('../dto.js');
const pawn = require('./chesstype/pawn.js');
const queen = require('./chesstype/queen.js');
const rook = require('./chesstype/rook.js');
const king = require('.chesstype/king.js');
const bishop = require('./chesstype/bishop.js');
const knight = require('./chesstype/knight.js');
const scan = require('./chessman/scan.js');
const tool = require('./tools.js');

const map = dto.getMap();

const BlackUndo = () => {
    let BlackSaver = dto.getBlackSaver();
    let nowPos = BlackSaver.movePosAfter;
    let targetPos = BlackSaver.movePosBefore;
    let killedPos = BlackSaver.killPos;

    //move the moved chess back
    map[targetPos[0]][targetPos[1]] = BlackSaver.move;
    map[nowPos[0]][nowPos[1]] = null;
    //make the killed chess alive
    map[killedPos[0]][killedPos[1]] = BlackSaver.kill;
    dto.clearBlackSaver();
}

const WhiteUndo = () => {
    let WhiteSaver = dto.getWhiteSaver();
    let nowPos = WhiteSaver.movePosAfter;
    let targetPos = WhiteSaver.movePosBefore;
    let killedPos = WhiteSaver.killPos;

    //move the moved chess back
    map[targetPos[0]][targetPos[1]] = WhiteSaver.move;
    map[nowPos[0]][nowPos[1]] = null;
    //make the killed chess alive
    map[killedPos[0]][killedPos[1]] = WhiteSaver.kill;
    dto.clearWhiteSaver();
}


function RTC (round) {
    // name : Round To color
    if (round === 1) return 'black';
    else return 'white';
}

/**
 * refresh: callback function (refresh view)
 * dto: data transfer object (singleton)
 **/

function service(refresh){

    //var gameDto = dto.getInstance();

    let init = init;
    let round = dto.getRound();

    this.mouseClicked = pos =>{

        /**
         * Input :
         *      an array, means the position player selected
         *
         * Output:
         *      case 1: player has not selected anything
         *          return a arr which include all the movable-position
         *
         *      case 2:player has selected something
         *          move the chess
         *
         * 1 means black
         * 0 means white
         */

        let x = pos.x, y = pos.y;

        let is_selected = dto.is_selected;

        // case 1: player has not selected anything
        if (is_selected === false && map[x][y].color === RTC(round)) {
            is_selected = false;
            return map[x][y].getMovableSquares();
        }

        // case 2: player had selected something
        if (is_selected === true) {

            let selection = dto.getSelection();
            if (moveVerify(selection, pos) === false) return;

            if (dto.getRoundByColor() === 'white') {
                dto.clearWhiteSaver();
                dto.setWhiteSaver(selection,pos);
            }
            else if (dto.getRoundByColor() === 'black') {
                dto.clearBlackSaver();
                dto.setBlackSaver(selection,pos);
            }

            let type = tool.getType(map[x][y].getMovableSquares(),selection);
            let selectionX = selection[0],
                selectionY = selection[1];

            map[selectionX][selectionY].move(selection,pos,type);

            dto.clearSelection();

            dto.changeRound();
        }
    }
    
    this.undo = () => {

        round = dto.getRoundByColor();

        dto.clearSelection();

        if (round === 'white') {
            BlackUndo();
            WhiteUndo();
        }
        else if (round === 'Black') {
            WhiteUndo();
            BlackUndo();
        }

    }

}

module.exports = service;
