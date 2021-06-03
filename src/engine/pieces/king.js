import Piece from './piece';
import Direction from './direction';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const directions = [
            new Direction(1, 1),
            new Direction(1, -1),
            new Direction(-1, 1),
            new Direction(-1, -1),
            new Direction(1, 0),
            new Direction(-1, 0),
            new Direction(0, 1),
            new Direction(0, -1)
        ];
        
        const hopefulMoves = board.findPieceMoves(this, 1, directions);
        const otherPieces = board.getAllPiecesForOtherPlayer();
        const otherMoves = [];
        otherPieces.forEach(piece => otherMoves.push(...piece.getAvailableMoves(board)));

        return hopefulMoves.filter(move => !otherMoves.some(otherMove => otherMove.col === move.col && otherMove.row === move.row));
    }
}
