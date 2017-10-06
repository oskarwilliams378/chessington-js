import Piece from './piece';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        return this.rookMoves(board, location, 8);
    }
}
