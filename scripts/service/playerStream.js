import dto from '../dto.js'

/**
 * 
 * playerStream @description manage human input and AI input
 * 
 * @class @public
 * @requires dto
 * 
 * @param {Object} data - record the user assignment( human or AI? )
 * @param {String} data.black - "human" or "AI"
 * @param {String} data.white - "human" or "AI"
 */

export default playerStream = 
( data = {black: "human", white: "human"}, mouseClicked) => {
        
    //get instance of dto
    const gameDto = dto.getInstance();

    
    const human_play = () =>{

    }

    const ai_play = () => {

    }

    const main_stream = () => {

    }

    this.undo = () => {

    }

    //first run
    main_stream();
}