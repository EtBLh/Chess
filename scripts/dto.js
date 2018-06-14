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

function dto() {

    /**
     * private variables
     */

    let map = [
        []
    ];

    /**
     * getters and setters
     */

    this.getMap = () => map;
    this.setMap = (_map) => {
        map = _map;
    }

}

let instance = new dto();
getInstance = () => instance;

module.exports.getInstance = getInstance;