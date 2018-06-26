function chess(gc) {

    var getChessSet = () => {
        //chess names
        var chess = ['bishop', 'king', 'knight', 'pawn', 'queen', 'rook'];
        chessSet = {};
        chess.forEach((value, index, array) => {
            var img = new Image();
            img.src = './assets/images/chess-' + value + '.svg'
            chessSet[value] = img;
        });
        return chessSet;
    }

    var chessImagesE = getChessSet();

    this.refresh = () => {
        gc.drawImage(chessImagesE['rook'], 0, 0);
    }
}

module.exports = chess;