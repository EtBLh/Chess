const dto = require('..../dto.js');
/**
 * how to get :
 * var pawn = pawn.getInstance();
 */

function pawn (color) {

    let gameDto = dto.getInstance();

    let map = gameDto.getMap();

    this.type = 'pawn';

    this.color = color;

    this.firstStep = false;

    this.twoSqure = false;

    this.canGo = pos => {

        /**
         *  Input:
         *      a array, the position of the chess
         *      'pos' is a array ,refer to the position
         *
         *  Output:
         *      a array, the positions the chess can go
         *      each element is a position like (x,y)
         */

        let arr = arr || [];

        let x = pos[0],
            y = pos[1]; // (x,y) is the position

        //functions
        let oob = pos => {
            if (x>7 || x<0 || y>7 || y<0) return false;
            return true;
        }

        /**
         * oob refer to out_of_board
         * Input :
         *      an array, the position
         * Output :
         *      true or false
         */


        /**
         * cases of canGo
         * columns starts at 0
         * normal way
         */

        if (oob([x,y+1]) && map[x][y+1] === null)) {
            // case 1 : go ahead (1 step)
            arr.push([x,y+1]);
        }

        if (oob([x+1,y+1]) && map[x+1][y+1].color !== this.color) {
            // case 2 : beat opposite
            arr.push([x+1,y+1]);
        }

        if (oob([x-1,y+1]) && map[x-1][y+1].color !== this.color) {
            // case 3 : beat opposite
            arr.push([x-1,y+1]);
        }

        if (firstStep) {
            arr.push([x,y+2]);
            firstStep = false;
        }

        // case : "En passant"
        if (oob([x-1,y])) {
            if (map[x-1][y].twoSqure === true && map[x-1][y].firstStep === true) arr.push([x-1,y+1]);
        }
        if (oob([x+1,y])) {
            if (map[x+1][y].twoSqure === true && map[x+1][y].firstStep === false) arr.push([x+1,y+1]);
        }

        return arr;
    };
}

module.exports = pawn;
