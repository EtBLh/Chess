const dto = require('../../dto.js');
/**
 * how to get :
 * var pawn = pawn.getInstance();
 */

function queen (colour) {

    let gameDto = dto.getInstance();

    let map = gameDto.getMap(); // columns starts at 0

    let property = {
        type : 'queen',
        color : colour
    }

    this.getProperties = () => property;

    this.getType = () => property.type;

    this.getColor = () => property.color;

    this.getMovableSquares = pos => {

        /**
         *  Input:
         *      a array, the position of the chess
         *      'pos' is a array ,refer to the position
         *
         *  Output:
         *      an object, contains the movable squares in every defferent types
         *      of moves
         */

        // Data Verify
        if (pos.length !== 2 || typeof pos[0] !== number || typeof pos[1] !== number) {
            console.log('Unexpected input');
            console.log('By the function \'getMovableSquares\' defined in queen.js')
        }

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

        //case 1: go by row
        i = 1;
        while (oob([x,y+i])) {
            if (map[x][y+i] === null) result.normal.push([x,y+i]);
            else {
                if (map[x][y+i].getColor() !== property.color) result.enermy.push([x,y+i]);
                break;
            }
            i++;
        }

        i = 1;
        while (oob([x,y-i])) {
            if (map[x][y-i] === null) result.normal.push([x,y-i]);
            else {
                if (map[x][y-i].getColor() !== property.color) result.enermy.push([x,y-i]);
                break;
            }
            i++;
        }

        //case 2: go by columns
        i = 1;
        while (oob([x+i,y])) {
            if (map[x+i][y] === null) result.normal.push([x+i,y]);
            else {
                if (map[x+i][y].getColor() !== property.color) result.enermy.push([x+i,y]);
                break;
            }
            i++;
        }

        i = 1;
        while (oob([x-i,y])) {
            if (map[x-i][y] === null) result.normal.push([x-i,y]);
            else {
                if (map[x-i][y].getColor() !== property.color) result.enermy.push([x-i,y]);
                break;
            }
            i++;
        }

        //case 3: right tilted
        i = 1;
        while (oob([x+i,y+i])) {
            if (map[x+i][y+i] === null) result.normal.push([x+i,y+i]);
            else {
                if (map[x+i][y+i].getColor() !== property.color) result.enermy.push([x+i,y+i]);
                break;
            }
            i++;
        }

        i = 1;
        while (oob([x-i,y-i])) {
            if (map[x-i][y-i] === null) result.normal.push([x-i,y-i]);
            else {
                if (map[x-i][y-i].getColor() !== property.color) result.enermy.push([x-i,y-i]);
                break;
            }
            i++;
        }

        //case 4: left tilted
        i = 1;
        while (oob([x-i,y+i])) {
            if (map[x-i][y+i] === null) result.normal.push([x-i,y+i]);
            else {
                if (map[x-i][y+i].getColor() !== property.color) result.enermy.push([x-i,y+i]);
                break;
            }
            i++;
        }

        i = 1;
        while (oob([x+i,y-i])) {
            if (map[x+i][y-i] === null) result.normal.push([x+i,y-i]);
            else {
                if (map[x+i][y-i].getColor() !== property.color) result.enermy.push([x+i,y-i]);
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
            console.log('By the function \'move\' defined in queen.js');
            return ;
        }

        // Data Verify
        if (nowPos.length !== 2 || typeof nowPos[0] !== number || typeof nowPos[1] !== number) {
            console.log('Unexpected input');
            console.log('By the function \'move\' defined in queen.js');
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
                console.log('By the function \'move\' defined in queen.js')

        }

        dto.setMap(map);

    }

}

module.exports = queen;
