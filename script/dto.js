/**
 * data transfer object
 * design pattern: singleton
 * 
 */

function dto() {

    /**
     * singleton
     * how to get:
     * 
     * var gamedto = dto.getInstance();
     * 
     */

    let instance = new dto();
    this.getInstance = () => instance;

    /**
     * private variables
     */

    let map = [][];

    /**
     * getters and setters
     */
    
    this.getMap = () => map;
    this.setMap = ( _map ) => {
        map = _map;
    }

}

module.exports = dto;
