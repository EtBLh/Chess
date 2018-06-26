const dto = require('..../dto.js');
/**
 * how to get :
 * var pawn = pawn.getInstance();
 */

function name (color) {

    let gameDto = dto.getInstance();

    let map = gameDto.getMap(); // columns starts at 0

    //this.type = 'bishop';

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

        //case 1: right tilted
        i = 0;
        while (x+i<=8 && y+i<=8 && is_cango([x+i][y+i])) {
            arr.push([x+i,y+i]);
            i++;
        }
        i = 0;
        while (x-i>=0 && y-i>=0 && is_cango([x-i,y-i])) {
            arr.push([x-i,y-i]));
            i++;
        }

        //case 2: left tilted
        i = 0;
        while (x-i<=8 && y+i<=8 && is_cango([x-i][y+i])) {
            arr.push([x+i,y+i]);
            i++;
        }
        i = 0;
        while (x+i>=0 && y-i>=0 && is_cango([x+i,y-i])) {
            arr.push([x-i,y-i]));
            i++;
        }


        return arr;
    };
}
