import Piece from './piece';
import Direction from './direction';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
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
        return board.findPieceMoves(this, 1, directions);
    }
}
