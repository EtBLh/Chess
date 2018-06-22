const board = require('./board.js');

const colorTheme909 = {
    boardLight: "#F2F2F2",
    boardDark: "#828282",
    chessS: "#45d9fd",
    chessE: "#ee2560"
}

module.exports = function renderer(gc, width, height) {

    var boardDrawer = new board(gc, width, height, colorTheme909);

    this.refresh = () => {
        boardDrawer.refresh();
    }

    
};