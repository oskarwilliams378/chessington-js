import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let newLocation;
        const locations = [];
        const location = board.findPiece(this);
        if (this.player === Player.WHITE) {
            newLocation = new Square(location.row + 1, location.col);
        } else {
            newLocation = new Square(location.row - 1, location.col);
        }
        if (!board.getPiece(newLocation)) {
            locations.push(newLocation);
            if (board.findPiece(this).row === 1 || board.findPiece(this).row === 6) {
                if (this.player === Player.WHITE) {
                    newLocation = new Square(location.row + 2, location.col);
                } else {
                    newLocation = new Square(location.row - 2, location.col);
                }
                if (!board.getPiece(newLocation)) {
                    locations.push(newLocation);
                }
            }
        }
        return this.filterInvalidMoves(locations);
        // return new Array(0);
    }

}
