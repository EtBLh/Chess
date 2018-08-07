# Service Introduction

## ChessTypes
- File is located in `chess/scripts/service/chesstype`	
### Property	

Property | Usage | How to Get | WhoHasIt
:------:|:---:|:-------:|:-----:
color | mark the color of the chess to know its belongings | chess.getColor() | ALL
type | show the type of the chess | chess.getType() | ALL
firstStep | to know if this chess move before | chess.is_firstStep() | king, pawn
twoSquare | to know if the first step of a pawn move two squares | chess.is_twoSquares() | pawn

### API
##### To Get Properties (Same as above)
##### getMovableSquares (pos)
- __Input__ : one arguments, the position of the chess
- __Input Type__ : Array, for a chess in (x,y) of the board, please input [x,y]
- __Output__ : the movable squares for this chess
- __Output Type__ : Object, include serval types of movements, such as `{'normal':[1,2]}
- __Attention__ : the postions in output object may be repeat, if you want to get the no-repeat one, please use `getMovableSquaresByArray` in `tools.js`
 
##### move (nowPos, targetPos, type)
- __Input__ : three arguments, means the position before, the postion after, and the move type
- __Input Type__ : two array and one string, the postions should be arrays and the type should be string
- __Output__: None
- __Attention__ : The type can be calculated by the `getType` function in `tools.js`

## Tools
### API
##### getMovableSquaresByArray (pos)
- same as getMovableSquares, but output is an array, postion will not repeated