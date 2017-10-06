export default class Piece {
    constructor(player) {
        this.player = player;
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
    filterInvalidMoves(movesList){
        movesList = movesList.filter(move => move.row<8);
        movesList = movesList.filter(move => move.row>=0);
        movesList = movesList.filter(move => move.col>=0);
        movesList = movesList.filter(move => move.col<8);
        return movesList;
    }
}
