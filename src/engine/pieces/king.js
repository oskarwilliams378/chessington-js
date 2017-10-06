import Piece from './piece';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const locations = this.bishopMoves(board, location, 2).concat(this.rookMoves(board, location, 2));
        return locations;
    }
}
