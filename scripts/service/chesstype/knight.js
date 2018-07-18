const dto = require('..../dto.js');
/**
 * how to get :
 * var pawn = pawn.getInstance();
 */

function knight (color) {

    let gameDto = dto.getInstance();

    let map = gameDto.getMap(); // columns starts at 0

    this.type = 'knight';

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
            // props are the types of movements
            normal : []
        };

        let x = pos[0],
            y = pos[1]; // (x,y) is the position

        let canMove = coor => {
            if (map[coor[0]][coor[1]] === null ) {
                return true;
            }
            else if (map[coor[0]][coor[1]].color !== this.color) return true;
            return false;
        }


        /**
         * oob refer to out_of_board
         * Input :
         *      an array, the position
         * Output :
         *      true or false
         */

        let oob = pos => {
            if (x>7 || x<0 || y>7 || y<0) return false;
            return true;
        }

        /* *
         * cases of canGo
         * 8 cases in total
         * */

         /**
          *  if there is a map(N is the knight):
          *  x 1 x 2 x
          *  3 x x x 4
          *  x x N x x
          *  5 x x x 6
          *  x 7 x 8 x
          * ( number means knight can go to these places)
          **/

         // case 1
         if (oob([x-1,y+2]) && canMove([x-1,y+2])) {
             result.normal.push([x-1,y+2]);
         }

         //case 2
         if (oob([x+1,y+2]) && canMove([x+1,y+2])) {
             result.normal.push([x+1,y+2]);
         }

         //case 3
         if (oob([x-2,y+1]) && canMove([x-2,y+1])) {
             result.normal.push([x-2,y+1]);
         }

         //case 4
         if (oob([x+2,y+1]) && canMove([x+2,y+1])) {
             result.normal.push([x+2,y+1]);
         }

         //case 5
         if (oob([x-2,y-1]) && canMove([x-2,y-1])) {
             result.normal.push([x-2,y-1]);
         }

         //case 6
         if (oob([x+2,y-1]) && canMove([x+2,y-1])) {
             result.normal.push([x+2,y-1]);
         }

         // case 7
         if (oob([x-1,y-2]) && canMove([x-1,y-2])) {
             result.normal.push([x-1,y-2]);
         }

         // case 8
         if (oob([x+1,y-2]) && canMove([x+1,y-2])) {
             result.normal.push([x+1,y-2]);
         }

        return result;
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
            console.log('By the function \'move\' defined in knight.js');
            return ;
        }

        // Data Verify
        if (nowPos.length !== 2 || typeof nowPos[0] !== number || typeof nowPos[1] !== number) {
            console.log('Unexpected input');
            console.log('By the function \'move\' defined in knight.js');
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
            default:
                console.log('Unknown type');
                console.log('By the function \'move\' defined in knight.js')

        }

    }

}

module.exports = knight;
