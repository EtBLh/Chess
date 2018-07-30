const DTO = require('../../dto.js')

function getMovableSquaresAsArray (pos) {

    let x = pos[0],
        y = pos[1];

    Squares = map[x][y].getMovableSquares(); // an object

    result = result || [];

    for (let key of Squares) {
        for (let item of Squares[key]) {
            result.push(item);
        }
    }

    return result;

}

function getType (pos,obj) {

    for (let key of obj) {
        if (pos.indexOf(obj.key) !== -1) return key;
    }

}

function moveVerify (nowPos,targetPos) {

    let nowX = nowPos[0],
        nowY = nowPos[1];

    if (map[nowX][nowY].getMovableSquaresAsArray().indexOf(targetPos) === -1) {
        console.log('The target position is not movable');
        console.log('Please Check');
        return false;
    }
    else return true;
}

function getColorAsInt (pos) {

    let x = pos[0],
        y = pos[1];

    color = map[x][y].getColor();

    if (color === 'black') return 1
    else if (color === 'white') return 0
    else {
        console.log('Value Error : Get Unexpected Color')
        console.log('    '+'Got'+color+', but expected \'black\' or \'white\'')
        console.log('    '+'Error in scripts/service/chesstype/tools.js')
    }
}

module.export = {
    getMovableSquaresAsArray : getMovableSquaresAsArray,
    getType : getType,
    moveVerify : moveVerify,
    getColorAsInt : getColorAsInt
}
