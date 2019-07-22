import Piece from './piece';
import Direction from './direction';
export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const directions = [
            new Direction(1,1),
            new Direction(1,-1),
            new Direction(-1,1),
            new Direction(-1,-1),
            new Direction(1,0),
            new Direction(-1,0),
            new Direction(0,1),
            new Direction(0,-1)
        ];
        return this.pieceMoves(board, location, 1, directions);
    }
}
