import Piece from './piece';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const locations = this.bishopMoves(board, location, 8).concat(this.rookMoves(board, location, 8));
        return locations;
    }
}
