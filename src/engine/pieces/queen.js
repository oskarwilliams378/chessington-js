import Piece from './piece';
import Square from '../square';
import Bishop from './bishop';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const locations = this.bishopMoves(board, location).concat(this.rookMoves(board, location));
        return locations;
    }
}
