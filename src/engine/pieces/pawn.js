import Piece from './piece';
import Player from '../player';
import Square from '../square';
import Direction from './direction';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const moves = [];
        
        const multiplier = this.player === Player.WHITE
            ? 1
            : -1;

        const singleMove = new Square(location.row + multiplier, location.col);
        if (board.isMoveValid(singleMove)) {
            moves.push(singleMove);

            const doubleMove = new Square(location.row + multiplier * 2, location.col);
            if (board.isMoveValid(doubleMove) && (location.row === 1 || location.row === 6)) {
                moves.push(doubleMove);
            }
        }

        [1, -1].forEach(takingDirection => {
            const takingMove = new Square(location.row + multiplier, location.col + takingDirection);
            if (board.isLocationValid(takingMove)
                && !!board.getPiece(takingMove)
                && board.getPiece(takingMove).player !== this.player) {
                moves.push(takingMove);
            }
        });
       
        return moves;
    }

}
