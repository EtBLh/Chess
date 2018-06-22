/**
 * 
 * borad.js
 * use the refresh method to refresh view
 * 
 * @param {Canvas Graphic Context} gc 
 */

function board(gc, width, height, theme){

    //public

    this.refresh = () => {
        drawBorad();
    }

    //private 

    var colorTheme = theme;

    function drawBorad() {

        gc.fillStyle = colorTheme.boardLight;
        gc.fillRect(0,0,width,height);

        gc.fillStyle = colorTheme.boardDark;
        for (y = 0; y < 8; y++){
            for (x = y%2; x < 8; x+=2){
                gc.fillRect(x*width/8, y*height/8,width/8,height/8);
            }
        }
    }

}

module.exports = board;