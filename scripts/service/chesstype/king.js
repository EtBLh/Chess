const dto = require('../../dto.js');
const scan = require('./scan.js');
/**
 * how to get :
 * var pawn = pawn.getInstance();
 */

function king (colour) {

    let gameDto = dto.getInstance();

    let map = gameDto.getMap(); // columns starts at 0

    let property = {
        type : 'king',
        color : colour,
        firstStep : true
    }

    // properties

    this.getProperties = () => property;
    
    this.is_firstStep = () => property.firstStep;

    this.getColor = () => property.color;

    this.getType = () => property.type;

    this.getMovableSquares = pos => {

        /**
         *  Input:
         *      a array, the position of the chess
         *      'pos' is a array ,refer to the position
         *
         *  Output:
         *      a array, the positions the chess can go
         *      each element is a position like (x,y)
         */

        let result = {
            normal : [],
            castling : []
        };

        let x = pos[0],
            y = pos[1]; // (x,y) is the position

        let canMove = coordinate => {
            if (map[coordinate[0]][coordinate[1]] === null || map[coordinate[0]][coordinate[1]].getColor() !== color) {
                let arr = scan(color);
                if (arr.indexOf(pos) === -1) return true;
                else return false;
            }
        }

        /* cases of canMove*/

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
                    if (canMove([i,k]) && ![i,k]===pos) {
                        result.normal.push([i,k]);
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
            if (map[0][x].getType() === rook && map[0][x].getColor() === color) {
                // check if the rook hasn't been if_moved
                if (map[0][x].is_firstStep() === true) {
                    // check if there are any pieces between them
                    for (n=1;n<=x-1;++n) {
                        if (canMove([x][n])) {
                            legal = false;
                            break;
                        }
                    }
                }
                if (legal) result.castling.push([x-2,y]);
            }

            //right one
            if (map[7][x].getType() === rook && map[7][x].getColor() === color) {
                // check if the rook hasn't been if_moved
                if (map[7][x].is_firstStep() === true) {
                    // check if there are any pieces between them
                    for (n=x+1;n<=6;++n) {
                        if (canMove([x][n])) {
                            legal = false;
                            break;
                        }
                    }
                }
                if (legal) result.castling.push([x+2,y]);
            }

        }

        return arr;
    };

    this.move = (nowPos,targetPos,type) => {

        /**
        * Input : nowPos, targetPos, type of the movement
        *
        * Output : None
        */

        // Data Verify
        if (targetPos.length !== 2 || typeof targetPos[0] !== number || typeof targetPos[1] !== number) {
            console.log('Unexpected input for targetPos');
            console.log('By the function \'move\' defined in king.js');
            return ;
        }

        // Data Verify
        if (nowPos.length !== 2 || typeof nowPos[0] !== number || typeof nowPos[1] !== number) {
            console.log('Unexpected input');
            console.log('By the function \'move\' defined in king.js');
            return ;
        }

        let nowX = nowPos[0],
            nowY = nowPos[1];

        let targetX = targetPos[0],
            targetY = targetPos[1];

        switch (type) {
            case 'normal':
                map[targetX][targetY] = map[nowX][nowY];
                map[nowX][nowY] = null;
                break;
            case 'castling':
                map[targetX][targetY] = map[nowX][nowY];
                map[nowX][nowY] = null;
                if (nowX - targetX < 0) {
                    map[0][nowY].move([0,nowY],[nowX-1,nowY],'castling');
                }
                else if (nowX - targetX > 0) {
                    map[7][nowY].move([7,nowY],[nowX+1,nowY],'castling');
                }
                break;
            default:
                console.log('Unknown type');
                console.log('By the function \'move\' defined in king.js');

        }

        dto.setMap(map);

        firstStep = false;

    }


}


module.exports = king;

/**
 * log :
 * finish the basic setting of castling
 * need to add a function to check if someone can attack it
 * king cannot go to where other can attack him
 *
 * June 30,2018
 * Need check
*/
