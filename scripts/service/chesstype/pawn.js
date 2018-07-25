const dto = require('../../dto.js');
/**
 * how to get :
 * var pawn = pawn.getInstance();
 */

function pawn (colour) {

    let gameDto = dto.getInstance();

    let map = gameDto.getMap();

    let property = {
        type : 'pawn',
        color : colour,
        firstStep : true,
        twoSquare : false
    }

    this.getProperties = () => property;

    this.getColor = () => property.color;

    this.getType = () => property.type;

    this.is_firstStep = () => property.firstStep;

    this.is_twoSquare = () => property.twoSquare;

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
            twoSquare :[],
            enermy : [],
            promotion : [],
            'En passant' : []
        };

        let x = pos[0],
            y = pos[1]; // (x,y) is the position

        //functions
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


        /**
         * cases of canGo
         * columns starts at 0
         * normal way
         */


        if (oob([x,y+1]) && map[x][y+1] === null)) {
            // case 1 : go ahead (1 step)
            result.normal.push([x,y+1]);
        }

        if (oob([x+1,y+1]) && map[x+1][y+1].getColor() !== property.color) {
            // case 2 : beat opposite
            result.enermy.push([x+1,y+1]);
        }

        if (oob([x-1,y+1]) && map[x-1][y+1].getColor() !== property.color) {
            // case 3 : beat opposite
            result.enermy.push([x-1,y+1]);
        }

        if (firstStep) {
            result.normal.push([x,y+2]);
        }

        // case : "En passant"
        if (oob([x-1,y])) {
            if (map[x-1][y].is_twoSquare() === true && map[x-1][y].is_firstStep() === true) {
                result['En passant'].push([x-1,y+1]);
            }
        }
        if (oob([x+1,y])) {
            if (map[x+1][y].is_twoSquare() === true && map[x+1][y].is_firstStep() === false) {
                result.['En passant'].push([x+1,y+1]);
            }
        }

        //case :twoSquare
        if (property.firstStep === true) result.twoSquare.push([x,y+2]);

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
            console.log('By the function \'move\' defined in pawn.js');
            return ;
        }

        // Data Verify
        if (nowPos.length !== 2 || typeof nowPos[0] !== number || typeof nowPos[1] !== number) {
            console.log('Unexpected input');
            console.log('By the function \'move\' defined in pawn.js');
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
            case 'twoSquare':
                map[targetX][targetY] = map[nowX][nowY];
                map[nowX][nowY] = null;
                break;
            case 'En passant':
                // cause of the special situation: En passant may kill two at the same time
                if (map[targetX][targetY] !== null && property.color === 'black') {
                    dto.setBlackSaverAnotherKill(targetPos);
                }
                else if (map[targetX][targetY] !== null && property.color === 'white') {
                    dto.setWhiteSaverAnotherKill(targetPos);
                }
                map[targetX][targetY] = map[nowX][nowY];
                map[nowX][nowY] = null;
                map[targetX][nowY] = null;
                break;
            case 'enermy':
                map[targetX][targetY] = map[nowX][nowY];
                map[nowX][nowY] = null;
                break;
            default:
                console.log('Unknown type');
                console.log('By the function \'move\' defined in pawn.js');

        }

        property.firstStep = false;

        dto.setMap(map);

    }

}

module.exports = pawn;
