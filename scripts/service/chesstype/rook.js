const dto = require('..../dto.js');
/**
 * how to get :
 * var pawn = pawn.getInstance();
 */

function rook (color) {

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

        let first_enermy = true;

        let is_cango = coor => {
            if (map[coor[0]][coor[1]] === null ) {
                return true;
            }
            else if (map[coor[0]][coor[1]].color !== this.color) {
                if (first_enermy) {
                    first_enermy = false;
                    return true;
            }
        }

        /* cases of canGo*/

        let i = i || 0;

        //case 1: go by row
        i = 1;
        while (obb([x,y+i])) {
            if (map[x][y+i] === null) arr.push([x,y+i]);
            else {
                if (map[x][y+i].color !== this.color) arr.push([x,y+i]);
                break;
            }
            i++;
        }

        i = 1;
        while (obb([x,y-i])) {
            if (map[x][y-i] === null) arr.push([x,y-i]);
            else {
                if (map[x][y-i].color !== this.color) arr.push([x,y-i]);
                break;
            }
            i++;
        }

        //case 2: go by columns
        i = 1;
        while (obb([x+i,y])) {
            if (map[x+i][y] === null) arr.push([x+i,y]);
            else {
                if (map[x+i][y].color !== this.color) arr.push([x+i,y]);
                break;
            }
            i++;
        }

        i = 1;
        while (obb([x-i,y])) {
            if (map[x-i][y] === null) arr.push([x-i,y]);
            else {
                if (map[x-i][y].color !== this.color) arr.push([x-i,y]);
                break;
            }
            i++;
        }


        return arr;
    };
}

module.exports = rook;
