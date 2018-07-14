/**
 * data transfer object
 * design pattern: singleton
 *
 */


/**
 * singleton
 * how to get:
 *
 * var gamedto = dto.getInstance();
 *
 */

'use strict';

function initMap() {

  let map = map || [];
  let i = i || 0;
  let arr = arr || [];

  for (i=1;i<=8;i++) {
    /* initialize arr as 8 'null'
     */
    arr.push(null);
  }

  for (i=1;i<=8;i++) {
    /*initialize map made up of 8 arr*/
    map.push(arr);
  };

return map;

}

/**
Map :
    the upper left corner is [0][7]
    the lower left corner is [0][0]
    the upper right corner is [7][7]
    the lower left corner is [0][7]

    like this:
    [0][7]  [1][7]  ... [6][7]  [7][7]
     .         .           .       .
     .         .           .       .
     .         .           .       .
    [0][0]  [1][0]  ... [6][0]  [7][0]

*/



function dto() {
    /**
     * Private variable
     */

    let map = initMap();

    /**
     * getters and setters
     */

    this.is_selected = false;
    this.getMap = () => map;
    this.setMap = (_map) => {
        map = _map;
    }

    let round = 0 ; // 0 refer to the black turn, 1 refer to the white turn

    let map = (function() {
        /**
         * create a empty 8x8 map
         */

        let arr = [null,null,null,null,null,null,null,null] ;
        /**
         * each row has 8 space
         * 'null' means no chess on the space
         */

        let map = [arr,arr,arr,arr,arr,arr,arr,arr,arr,arr];
        /**
         * a 8x8 map created !
         * map [1][2] to read column 2, row 3
         */

        return map;
    }());

    this.changeRound = () => {
        round = 1 - round ;
        /**
         * if round=1 before, it will be change to 0;
         * else it will be change to 1;
         *
         * 0 means black
         * 1 means white
         */

    }

    this.getRound = () => round ;
}

let instance = new dto();

module.exports.getInstance = () => instance;
