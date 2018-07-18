const dto = require('..../dto.js');
/**
 * how to get :
 * var pawn = pawn.getInstance();
 */

function bishop (color) {

    let gameDto = dto.getInstance();

    let map = gameDto.getMap(); // columns starts at 0

    this.type = 'bishop';

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
            normal : [],
            enermy : []
        };

        let x = pos[0],
            y = pos[1]; // (x,y) is the position

        let oob = pos => {

            /**
             * oob refer to out_of_board
             * Input :
             *      an array, the position
             * Output :
             *      true or false
             */

            if (x>7 || x<0 || y>7 || y<0) return false;
            return true;
        }



        /* cases of canGo*/

        let i = i || 0;

        //case 1: right tilted
        i = 1;
        while (oob([x+i,y+i])) {
            if (map[x+i][y+i] === null) result.normal.push([x+i,y+i]);
            else {
                if (map[x+i][y+i].color !== this.color) result.enermy.push([x+i,y+i]);
                break;
            }
            i++;
        }

        i = 1;
        while (oob([x-i,y-i])) {
            if (map[x-i][y-i] === null) result.normal.push([x-i,y-i]);
            else {
                if (map[x-i][y-i].color !== this.color) result.enermy.push([x-i,y-i]);
                break;
            }
            i++;
        }

        //case 2: left tilted
        i = 1;
        while (oob([x-i,y+i])) {
            if (map[x-i][y+i] === null) result.normal.push([x-i,y+i]);
            else {
                if (map[x-i][y+i].color !== this.color) result.enermy.push([x-i,y+i]);
                break;
            }
            i++;
        }

        i = 1;
        while (oob([x+i,y-i])) {
            if (map[x+i][y-i] === null) result.normal.push([x+i,y-i]);
            else {
                if (map[x+i][y-i].color !== this.color) result.enermy.push([x+i,y-i]);
                break;
            }
            i++;
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
            console.log('By the function \'move\' defined in bishop.js');
            return ;
        }

        // Data Verify
        if (nowPos.length !== 2 || typeof nowPos[0] !== number || typeof nowPos[1] !== number) {
            console.log('Unexpected input');
            console.log('By the function \'move\' defined in bishop.js');
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
            case 'enermy':
                map[targetX][targetY] = map[nowX][nowY];
                map[nowX][nowY] = null;
                break;
            default:
                console.log('Unknown type');
                console.log('By the function \'move\' defined in bishop.js')

        }

    }
}

module.exports = bishop;
