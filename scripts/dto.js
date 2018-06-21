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

function dto() {

    /**
     * Private variable
     */

    let map = initMap();

    /**
     * getters and setters
     */

    this.getMap = () => map;
    this.setMap = (_map) => {
        map = _map;
    }

}

let instance = new dto();

module.exports.getInstance = () => instance;
