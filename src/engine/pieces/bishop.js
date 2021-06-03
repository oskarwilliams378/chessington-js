import Piece from './piece';
import Direction from './direction';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const directions = [
            new Direction(1, 1),
            new Direction(1, -1),
            new Direction(-1, 1),
            new Direction(-1, -1)
        ];
        return board.findPieceMoves(this, 7, directions);
    }
}
