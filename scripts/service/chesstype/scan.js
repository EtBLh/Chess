const dto = require('../../dto.js');
/**
 * how to use :
 * var scan = require('./scan')
 */

/**
 * Input : the color of the chess
 * Output : an array, include all of attackable squares of enermy
 */

function scan(color) {

    let gameDto = dto.getInstance();

    let map = gameDto.getMap();

    let s = new Set();

    let x = x || 0,
        y = y || 0;

    for (x=0;x<map.length;++x)
        for (y=0;y<=map[x].length;++y) {

            //determine if map[x][y] is an enermy
            if (map[x][y].color === color) continue;

            // add coordinate to Set
            for (let item in map[x][y].getMovableSquares()) {
                s.add(item);
            }

        }

    // change s to an array
    let arr = arr || [];

    s.forEach(function (value) {
        arr.push(value);
    });

    return arr;

}

module.export = scan;

/**
 * log :
 * Need check
 */
