const dto = require('..../dto.js');
/**
 * how to use :
 * var scan = require('./scam')
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

            for (let item in map[x][y].canGo()) {
                s.add(item);
            }

        }

    // change s to an array
    let arr = arr || [];

    s.forEach(function (value)) {
        arr.push(value);
    }


}

/**
 * log:
 * need to add something to recognize the color
 */
