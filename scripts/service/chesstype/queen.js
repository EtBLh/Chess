const dto = require('..../dto.js');
/**
 * how to get :
 * var pawn = pawn.getInstance();
 */

function queen (color) {

    let gameDto = dto.getInstance();

    let map = gameDto.getMap(); // columns starts at 0

    this.type = 'queen';

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

        //case 3: right tilted
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

        //case 4: left tilted
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

module.exports = queen;
