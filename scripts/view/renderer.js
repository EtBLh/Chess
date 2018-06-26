const board = require('./board.js');
const chess = require('./chess.js');

const colorTheme909 = {
    boardLight: "#F2F2F2",
    boardDark: "#828282",
    chessS: "#45d9fd",
    chessE: "#ee2560"
}

module.exports = function renderer(gc, width, height) {

    var boardRenderer = new board(gc, width, height, colorTheme909);
    var chessRenderer = new chess(gc, colorTheme909);

    this.refresh = () => {
        boardRenderer.refresh();
        chessRenderer.refresh();
    }
};