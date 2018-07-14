const dto = require('../dto.js');
const pawn = require('./chesstype/pawn.js');
const queen = require('./chesstype/queen.js');
const rook = require('./chesstype/rook.js');
const king = require('.chesstype/king.js');
const bishop = require('./chesstype/bishop.js');
const knight = require('./chesstype/knight.js');
const scan = require('./chessman/scan.js');
const map = dto.getMap();


function init() {

    /**
    Map :
        the upper left corner is [0][7]
        the lower left corner is [0][0]
        the upper right corner is [7][7]
        the lower left corner is [0][7]

        like this:
        [0][7]  [1][7]  ... [6][7]  [7][7]
         .         .           .       .
         .         .           .       .
         .         .           .       .
        [0][0]  [1][0]  ... [6][0]  [7][0]

    */

    map[0] = [new rook('black'), new knight('black'), new bishop('black'),
             new queen('black'), new king('black'), new bishop('black'),
             new knight('black'), new rook('black')];

    map[1] = [new pawn('black'), new pawn('black'), new pawn('black'),
             new pawn('black'), new pawn('black'), new pawn('black'),
             new pawn('black'), new pawn('black')];

    map[7] = [new rook('white'), new knight('white'), new bishop('white'),
             new queen('white'), new king('white'), new bishop('white'),
             new knight('white'), new rook('white')];

    map[6] = [new pawn('white'), new pawn('white'), new pawn('white'),
              new pawn('white'), new pawn('white'), new pawn('white'),
              new pawn('white'), new pawn('white')];

    dto.setMap(map);
}

function RTC (round) {
    // name : Round To color
    if (round === 0) return 'black';
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
         *          return a arr which include all the cango-position
         *
         *      case 2:player has selected something
         *          move the chess
         *
         * 0 means black
         * 1 means white
         */

         let x = pos[0],
             y = pos[1];

        // case 1: player has not selected anything
        if (dto.is_selected === false && map[x][y].color === RTC(round)) {
            return map[x][y].canGo();
        }
    }
    this.undo = () => {

    }

}

module.exports = service;
