const dto = require('..../dto.js');
/**
 * how to get :
 * var pawn = pawn.getInstance();
 */

function king (color) {

    let gameDto = dto.getInstance();

    let map = gameDto.getMap(); // columns starts at 0

    // properties

    this.firstStep = true ;

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

        /**
         * if there is a map:
         * x x x
         * x K x
         * x x x
         *
         * king can go to the spaces near to him(x in the map)
         * */

        let i = i || 0,
            k = k || 0;

        for (i=x-1;i<=x+1;i++)
            for (k=y-1;k<=y+1;++k) {
                if (i<0 || i>7 || k<0 || k>7) continue;
                else {
                    if (map[i][k] !== null && !(i===x && k===y)) {
                        arr.push([i,k]);
                    }
                }
            }

        // castling
        if (firstStep) {

            // check if there any rook for castling
            // check method: if_moved, any pieced between king and the rook
            // the first line will be like this :
            // R x x x K x x R (castling need only one rook)

            let legal = false;

            let n = n || 0;

            //left one
            // step 1:check if there is a unmoved rook in king's line
            if (map[0][x].type === rook && map[0][x].color === this.color) {
                // check if the rook hasn't been if_moved
                if (map[0][x].firstStep === true) {
                    // check if there are any pieces between them
                    for (n=1;n<=x-1;++n) {
                        if (map[n][x] !== null) {
                            break;
                            legal = false;
                        }
                    }
                }
                if (legal) arr.push([x-2,y]);
            }

            //right one
            if (map[7][x].type === rook && map[7][x].color === this.color) {
                // check if the rook hasn't been if_moved
                if (map[7][x].firstStep === true) {
                    // check if there are any pieces between them
                    for (n=x+1;n<=6;++n) {
                        if (map[n][x] !== null) {
                            break;
                            legal = false;
                        }
                    }
                }
                if (legal)arr.push([x+2,y]);
            }

        }

        firstStep = false;

        return arr;
    };
}

/**
 * log :
 * finish the basic setting of castling
 * need to add a function to check if someone can attack it
 * king cannot go to where other can attack him
 */
