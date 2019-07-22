import Piece from './piece';
import Direction from './direction';
export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const directions = [
            new Direction(1,1),
            new Direction(1,-1),
            new Direction(-1,1),
            new Direction(-1,-1)
        ];
        return this.pieceMoves(board, location, 7, directions);
    }
}
