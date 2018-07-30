/**
 * data transfer object
 * design pattern: singleton
 *
 */


/**
 * singleton
 * how to get:
 *
 * var gamedto = dto.getInstance();
 *
 */

'use strict';

function initMap() {

    /**
     * create a empty 8x8 map
     */

    let arr = [null,null,null,null,null,null,null,null] ;

    /**
     * each row has 8 space
     * 'null' means no chess on the space
     */

    let map = [arr,arr,arr,arr,arr,arr,arr,arr,arr,arr];
    /**
     * a 8x8 map created !
     * map [1][2] to read column 2, row 3
     */

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

  map[0] = [new rook('white'), new knight('white'), new bishop('white'),
       new queen('white'), new king('white'), new bishop('white'),
       new knight('white'), new rook('white')];
  map[1] = [new pawn('white'), new pawn('white'), new pawn('white'),
       new pawn('white'), new pawn('white'), new pawn('white'),
       new pawn('white'), new pawn('white')];
  map[7] = [new rook('black'), new knight('black'), new bishop('black'),
       new queen('black'), new king('black'), new bishop('black'),
       new knight('black'), new rook('black')];
  map[6] = [new pawn('black'), new pawn('black'), new pawn('black'),
        new pawn('black'), new pawn('black'), new pawn('black'),
        new pawn('black'), new pawn('black')];
  }

function saver () {
    move : {},
    kill : {},
    anotherKill : {}
}

function dto() {
    /**
     * Private variable
     */

    let map = initMap();

    let selection = selection || [];

    let BlackSaver = {
        move : {},
        kill : {},
        anotherKill : {}
    }

    let WhiteSaver = {
        move : {},
        kill : {},
        anotherKill : {}
    }

    let round = 0 ; // 0 refer to the white turn, 1 refer to the black turn

    /**
     * getters and setters
     */

    this.clearBlackSaver = () => {
        BlackSaver.move = {};
        BlackSaver.kill = {};
        BlackSaver.anotherKill = {};
    }

    this.clearWhiteSaver = () => {
        WhiteSaver.move = {};
        WhiteSaver.kill = {};
        WhiteSaver.anotherKill = {};
    }

    this.setBlackSaverAnotherKill = pos => {
        let x = pos[0],
            y = pos[1];

        BlackSaver.anotherKill = map[x][y].getProperties();
        BlackSaver.pos = pos;
    }

    this.setWhiteSaverAnotherKill = pos => {
        let x = pos[0],
            y = pos[1];

        WhiteSaver.anotherKill = map[x][y].getProperties();
        WhiteSaver.pos = pos;
    }

    this.getBlackSaver = () => BlackSaver;

    this.getWhiteSaver = () => WhiteSaver;

    this.setBlackSaver = nowPos,targetPos => {
        BlackSaver.move = map[nowPos[0]][nowPos[1]];
        BlackSaver.movePosBefore = nowPos;
        BlackSaver.movePosAfter = targetPos;

        BlackSaver.kill = map[targetPos[0]][targetPos[1]];
        BlackSaver.killPos = targetPos;
    }

    this.setWhiteSaver = nowPos,targetPos => {
        WhiteSaver.move = map[nowPos[0]][nowPos[1]];
        WhiteSaver.movePosBefore = nowPos;
        WhiteSaver.movePosAfter = targetPos;

        WhiteSaver.kill = map[targetPos[0]][targetPos[1]];
        WhiteSaver.killPos = targetPos;
    }

    this.is_selected = false;

    this.getMap = () => map;

    this.setMap = (_map) => {
        map = _map;
    }

    this.changeRound = () => {
        round = 1 - round ;
        /**
         * if round=1 before, it will be change to 0;
         * else it will be change to 1;
         *
         * 1 means black
         * 0 means white
         */

    }

    this.getRound = () => round ;

    this.getRoundByColor = () => {
        if (round === 1) return 'black';
        else if (round === 0) return 'white'
    }

    this.getSelection = () => selection ;

    this.clearSelection = () => {
        selection = [];
    }

}

let instance = new dto();

module.exports.getInstance = () => instance;
