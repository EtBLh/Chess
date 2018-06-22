const dto = require('..../dto.js');
/**
 * how to get :
 * var pawn = pawn.getInstance();
 */

function pawn (colour) {

    let gameDto = dto.getInstance();

    let map = gameDto.getMap();

    // this.type = 'pawn';

    this.color = colour;

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

        if (map[x][y+1] === null) {
            // case 1 : go ahead (1 step)
            arr.push([[x] , [y+1]]);
        }

        if ((x+1<8 && y+1<8) && (map[x+1][y+1].color !== this.color)) {
            // case 2 : beat opposite
            arr.push([[x+1] , [y+1]]);
        }

        if ((x-1>0 && y+1<8) && (map[x-1][y+1].color != this.color)) {
            // case 3 : beat opposite
            arr.push([x-1],[y+1]);
        }

        

        return arr;
    };
}