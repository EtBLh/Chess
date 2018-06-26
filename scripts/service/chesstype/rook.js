const dto = require('..../dto.js');
/**
 * how to get :
 * var pawn = pawn.getInstance();
 */

function name (color) {

    let gameDto = dto.getInstance();

    let map = gameDto.getMap(); // columns starts at 0

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

        let is_cango = coordinate => (map[coordinate[0]][coordinate[1]] !== null && map[coordinate[0]][coordinate[1]].color !== this.color);

        /* cases of canGo*/

        let i = i || 0;

        //case 1: go by row
        i = 0;
        while (y+i<=7 && is_cango([x,y+i])) {
            arr.push([x,y+i]);
            i++;
        }
        i = 0;
        while (y-i>=0 && is_cango([x,y-i])) {
            arr.pusj([x,y-i]);
            i++;
        }

        //case 2: go by columns
        i = 0;
        while (x+i<=7 && is_cango([x+i,y])) {
            arr.push([x+i,y]);
            i++;
        }
        i = 0;
        while (x-i>=0 && is_cango([x+i,y])) {
            arr.push([x-i,y]);
            i++;
        }

        return arr;
    };
}
