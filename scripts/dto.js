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

    this.setRound = () => {
        round = 1 - round ;
        /**
         * if round=1 before, it will be change to 0;
         * else it will be change to 1;
         */
    }

    this.getRound = () => round ;
}

let instance = new dto();

module.exports.getInstance = () => instance;