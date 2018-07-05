const dto = require('..../dto.js');
/**
 * how to get :
 * var pawn = pawn.getInstance();
 */

function bishop (color) {

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

        //case 1: right tilted
        i = 1;
        while (obb([x+i,y+i])) {
            if (map[x+i][y+i] === null) arr.push([x+i,y+i]);
            else {
                if (map[x+i][y+i].color !== this.color) arr.push([x+i,y+i]);
                break;
            }
            i++;
        }

        i = 1;
        while (obb([x-i,y-i])) {
            if (map[x-i][y-i] === null) arr.push([x-i,y-i]);
            else {
                if (map[x-i][y-i].color !== this.color) arr.push([x-i,y-i]);
                break;
            }
            i++;
        }

        //case 2: left tilted
        i = 1;
        while (obb([x-i,y+i])) {
            if (map[x-i][y+i] === null) arr.push([x-i,y+i]);
            else {
                if (map[x-i][y+i].color !== this.color) arr.push([x-i,y+i]);
                break;
            }
            i++;
        }

        i = 1;
        while (obb([x+i,y-i])) {
            if (map[x+i][y-i] === null) arr.push([x+i,y-i]);
            else {
                if (map[x+i][y-i].color !== this.color) arr.push([x+i,y-i]);
                break;
            }
            i++;
        }


        return arr;
    };
}

module.exports = bishop;
