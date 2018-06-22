const dto = require('..../dto.js');
/**
 * how to get :
 * var pawn = pawn.getInstance();
 */

function king () {

    let gameDto = dto.getInstance();

    let map = gameDto.getMap();

    //this.type = 'king';

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

        

        return arr;
    };
}