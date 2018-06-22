const fs = require('fs');

var chess = (theme) => {
    /**
     * private
     */
    var colorTheme = theme;

    //chess set (self/ally)
    var chessImagesS = {};
    //chess set (enemy)
    var chessImagesE = {};

    /**
     * 
     * @param {the color you want to use (hex color)} color
     */
    var getChessSet = (color) => {
        //chess names
        var chess = ['bishop', 'king', 'knight', 'pawn', 'queen', 'rook'];
        chessSet = {};
        chess.forEach((value, index, array) => {
            var file = fs.readFileSync('../assets/images' + value + '.svg', {
                encoding: 'utf8'
            });
            file = file.replace('#000000', colorTheme.chessS);
            var img = new Image();
            img.src = "data:image/svg+xml;charset=utf-8," + file;
            chessSet[value] = img;
        });
        return chessSet;
    }
}

module.exports = chess;